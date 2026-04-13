import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getTemplate } from '@/utils/filesUtils';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    },
  );

  const data = await response.json();
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    const { name, email, message, turnstileToken } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 },
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'CAPTCHA verification is required' },
        { status: 400 },
      );
    }

    const isHuman = await verifyTurnstileToken(turnstileToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: 'CAPTCHA verification failed' },
        { status: 403 },
      );
    }

    const adminHtml = getTemplate('admin-contact', {
      name,
      email,
      message: message.replace(/\n/g, '<br>'),
    });

    const adminResult = await resend.emails.send({
      from: 'MaddieRoseCodes <hello@maddierosecodes.com>',
      to: ['hello@maddierosecodes.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: adminHtml,
    });

    if (adminResult.error) {
      return NextResponse.json(
        { success: false, error: adminResult.error },
        { status: 500 },
      );
    }

    const clientHtml = getTemplate('client-contact', { name });

    const clientResult = await resend.emails.send({
      from: 'MaddieRoseCodes <hello@maddierosecodes.com>',
      to: [email],
      subject: 'Thank you for your message!',
      html: clientHtml,
    });

    if (clientResult.error) {
      return NextResponse.json(
        { success: false, error: clientResult.error },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
