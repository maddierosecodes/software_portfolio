'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '../../types/routes.types';
import { useState } from 'react';

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export default function NavBar({ items, className = '' }: NavBarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`flex justify-between items-center gap-1 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-1">
        {items.map((navLink, i) => (
          <Link
            key={navLink.path + i}
            href={navLink.path}
            className="bg-pink-500 p-1 rounded-md rounded-b-none text-white-500 hover:bg-pink-200 hover:text-white-900"
            aria-current={navLink.path === pathname ? 'page' : undefined}
          >
            {navLink.name}
          </Link>
        ))}
      </div>

      {/* Mobile Burger Menu Button */}
      <div className="relative lg:hidden">
        <button
          className="lg:hidden bg-pink-500 p-2 rounded-md text-white-500 hover:bg-pink-200 hover:text-white-900 relative z-50"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
        >
          <svg
            className="w-10 h-10 lg:hidden"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`absolute top-full mt-2 bg-blue-500 w-48 px-4 py-2 rounded-md shadow-lg z-40 
            left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0
            ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col gap-2">
            {items.map((navLink, i) => (
              <Link
                key={navLink.path + i}
                href={navLink.path}
                className="bg-pink-500 p-2 rounded-md text-white-500 hover:bg-pink-200 hover:text-white-900 text-center"
                aria-current={navLink.path === pathname ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {navLink.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
