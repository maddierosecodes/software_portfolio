'use client';

import Link from 'next/link';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'About Me',
    path: '/about',
  },
  {
    name: 'My Projects',
    path: '/projects',
  },
  {
    name: 'Contact Me',
    path: '/contact',
  },
];

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center gap-1 self-end pr-0.5">
      {navLinks.map((navLink, i) => {
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
