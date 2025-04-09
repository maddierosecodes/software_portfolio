import { ContactForm } from '@/components/organisms/ContactForm';
import { FC } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me | Maddie Rose Codes',
  description:
    'Get in touch with Maddie Rose for collaboration opportunities, project inquiries, or just to say hello.',
  keywords:
    'contact, get in touch, collaboration, web development, software engineer',
};

const Contact: FC = () => {
  return (
    <main>
      <section role="region" aria-label="Contact page content">
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
