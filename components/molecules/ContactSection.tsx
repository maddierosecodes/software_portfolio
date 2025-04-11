'use client';

import ContactLink from '../atoms/ContactLink';
import { LucideIcon } from 'lucide-react';
import { useId } from 'react';

interface ContactSectionProps {
  title: string;
  links: Array<{
    href: string;
    icon: LucideIcon;
    text: string;
    isExternal?: boolean;
    children?: React.ReactNode;
  }>;
  variant?: 'grid' | 'list';
}

export default function ContactSection({ title, links }: ContactSectionProps) {
  const headingId = useId();

  return (
    <div
      className="p-6 flex flex-col gap-6 bg-pink-900/20 rounded-lg border-2 border-gold-300 gold-glow-box-shadow"
      aria-labelledby={headingId}
    >
      <h3 id={headingId} className="text-2xl font-bold pink-glow-text mb-2">
        {title}
      </h3>

      <div
        className="grid grid-rows-[repeat(3,min-content)] auto-cols-fr grid-flow-col gap-6"
        role="list"
        aria-label={`${title} links`}
      >
        {links.map((link, index) => (
          <div key={index} role="listitem">
            <ContactLink
              href={link.href}
              icon={link.icon}
              text={link.text}
              isExternal={link.isExternal}
            >
              {link.children}
            </ContactLink>
          </div>
        ))}
      </div>
    </div>
  );
}
