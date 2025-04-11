'use client';

import { LucideIcon } from 'lucide-react';

interface ContactLinkProps {
  href: string;
  icon: LucideIcon;
  text: string;
  isExternal?: boolean;
  children?: React.ReactNode;
}

export default function ContactLink({
  href,
  icon: Icon,
  text,
  isExternal = true,
  children,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-2 text-white-200 hover:text-blue-200 transition-colors text-lg"
      aria-label={isExternal ? `${text} (opens in new tab)` : text}
    >
      <Icon className="h-6 w-6 text-pink-100" aria-hidden="true" />
      <span>{text}</span>
      {children}
    </a>
  );
}
