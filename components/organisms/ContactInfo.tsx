'use client';

import {
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  FileText,
  ExternalLink,
  ShoppingBag,
  Briefcase,
  Globe,
  Star,
} from 'lucide-react';
import ContactSection from '../molecules/ContactSection';
import TwoColumnLayout from '../layouts/TwoColumnLayout';

export default function ContactInfo() {
  const contactLinks = [
    {
      href: 'mailto:hello@maddierosecodes.com',
      icon: Mail,
      text: 'hello@maddierosecodes.com',
      isExternal: false,
    },
    {
      href: '/cv.pdf',
      icon: FileText,
      text: 'View CV',
      children: <ExternalLink className="h-4 w-4" aria-hidden="true" />,
    },
    {
      href: 'https://g.co/kgs/XSJ6hbE',
      icon: Star,
      text: 'Leave a Review!',
      isExternal: true,
    },
  ];

  const socialLinks = [
    {
      href: 'https://www.facebook.com/maddierosecodes',
      icon: Facebook,
      text: 'Facebook',
    },
    {
      href: 'https://www.linkedin.com/in/maddierosejane',
      icon: Linkedin,
      text: 'LinkedIn',
    },
    {
      href: 'https://www.etsy.com/shop/maddierosecreates',
      icon: ShoppingBag,
      text: 'Etsy',
    },
    {
      href: 'https://www.instagram.com/maddierosecodes',
      icon: Instagram,
      text: 'Instagram',
    },
    {
      href: 'https://www.upwork.com/freelancers/maddierosecodes',
      icon: Briefcase,
      text: 'Upwork',
    },
    {
      href: 'https://www.fiverr.com/maddierosecodes',
      icon: Globe,
      text: 'Fiverr',
    },
  ];

  return (
    <section className="w-full py-8" aria-labelledby="connect-heading">
      <div className="w-full max-w-4xl mx-auto p-8 rounded-lg border-2 border-pink-300 pink-glow-box-shadow-large bg-peach-700">
        <h2
          id="connect-heading"
          className="subtitle mb-6 text-center gold-glow-text"
        >
          Connect With Me
        </h2>

        <TwoColumnLayout
          className="w-full gap-6"
          equalHeight={true}
          role="region"
          aria-label="Contact information and social media links"
        >
          <ContactSection
            title="Contact Information"
            links={contactLinks}
            variant="grid"
          />
          <ContactSection
            title="Social Media"
            links={socialLinks}
            variant="grid"
          />
        </TwoColumnLayout>
      </div>
    </section>
  );
}
