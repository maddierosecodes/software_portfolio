'use client';

import Link from 'next/link';

interface NavItem {
  name: string;
  path: string;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export default function NavBar({ items, className = '' }: NavBarProps) {
  return (
    <nav
      className={`flex justify-between items-center gap-1 self-end pr-0.5 mt-auto ${className}`}
    >
      {items.map((navLink, i) => {
        return (
          <Link
            key={navLink.path + i}
            href={navLink.path}
            className="bg-pink-500 p-1 rounded-md rounded-b-none text-white-500 hover:bg-pink-200 hover:text-white-900"
          >
            {navLink.name}
          </Link>
        );
      })}
    </nav>
  );
}
