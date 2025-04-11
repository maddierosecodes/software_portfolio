import { ContactForm } from '@/components/organisms/ContactForm';
import ContactInfo from '@/components/organisms/ContactInfo';
import { FC } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me | Maddie Rose Codes',
  description:
    'Get in touch with Maddie Rose for collaboration opportunities, project inquiries, or just to say hello. Available for web development, software engineering, and creative projects.',
  keywords:
    'contact, get in touch, collaboration, web development, software engineer, freelance developer, Maddie Rose, contact form',
  openGraph: {
    title: 'Contact Me | Maddie Rose Codes',
    description:
      'Get in touch with Maddie Rose for collaboration opportunities, project inquiries, or just to say hello.',
    type: 'website',
    url: 'https://maddierosecodes.com/contact',
    siteName: 'Maddie Rose Codes',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Me | Maddie Rose Codes',
    description:
      'Get in touch with Maddie Rose for collaboration opportunities, project inquiries, or just to say hello.',
  },
  alternates: {
    canonical: 'https://maddierosecodes.com/contact',
  },
};

const Contact: FC = () => {
  return (
    <main>
      <section
        role="region"
        aria-label="Contact page content"
        aria-roledescription="Contact form and information section"
      >
        <ContactForm />
        <ContactInfo />
      </section>
    </main>
  );
};

export default Contact;
