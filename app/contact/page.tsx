import { ContactForm } from '@/components/organisms/ContactForm';
import { FC } from 'react';

const Contact: FC = () => {
  return (
    <section role="region" aria-label="Contact page content">
      <ContactForm />
    </section>
  );
};

export default Contact;
