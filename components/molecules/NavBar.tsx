'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '../../types/routes.types';

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export default function NavBar({ items, className = '' }: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav
      className={`flex justify-between items-center gap-1 self-end pr-0.5 mt-auto ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {items.map((navLink, i) => {
        return (
          <Link
            key={navLink.path + i}
            href={navLink.path}
            className="bg-pink-500 p-1 rounded-md rounded-b-none text-white-500 hover:bg-pink-200 hover:text-white-900"
            aria-current={navLink.path === pathname ? 'page' : undefined}
          >
            {navLink.name}
          </Link>
        );
      })}
    </nav>
  );
}
