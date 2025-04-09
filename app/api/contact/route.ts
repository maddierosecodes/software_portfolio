import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getTemplate } from '@/utils/filesUtils';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { to, subject, templateName, replacements } = await request.json();

    if (!to || !subject || !templateName) {
      return NextResponse.json(
        { error: 'Recipient, subject, and template name are required' },
        { status: 400 },
      );
    }

    const html = getTemplate(templateName, replacements || {});

    const data = await resend.emails.send({
      from: 'MaddieRoseCodes <hello@maddierosecodes.com>',
      to,
      subject,
      html,
    });

    if (data.error) {
      return NextResponse.json({ success: false, data });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
