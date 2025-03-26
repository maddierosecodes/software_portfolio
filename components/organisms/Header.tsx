'use client';

import { usePathname } from 'next/navigation';
import NavBar from '../molecules/NavBar';
import { routes, getCurrentPageTitle } from '../../config/routes';

function Header() {
  const currentPage = usePathname();
  return (
    <header className="flex flex-wrap justify-between items-center bg-blue-500 h-24 mx-[10%] px-4">
      <h1 className="subtitle text-[clamp(1.5rem,2vw,2.5rem)] mx-2">
        MaddieRoseCodes
      </h1>

      <h2 className="title text-[clamp(1.5rem,2vw,2.5rem)] text-center mt-2 px-2">
        {getCurrentPageTitle(currentPage)}
      </h2>
      <NavBar items={routes} />
    </header>
  );
}

export default Header;
