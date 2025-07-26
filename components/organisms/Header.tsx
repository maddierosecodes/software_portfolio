'use client';

import { usePathname } from 'next/navigation';
import NavBar from '../molecules/NavBar';
import HeaderLayout from '../layouts/HeaderLayout';
import { navigationRoutes, getCurrentPageTitle } from '../../config/routes';

function Header() {
  const currentPage = usePathname();

  return (
    <HeaderLayout
      role="banner"
      aria-label="Site header"
      leftSectionClassName="subtitle text-[clamp(1.5rem,2vw,2.5rem)] mx-2"
      centerSectionClassName="title text-[clamp(1.5rem,2vw,2.5rem)]"
      rightSectionClassName=""
    >
      <h1 aria-label="MaddieRoseCodes - Home">MaddieRoseCodes</h1>

      <p
        className="subtitle text-[clamp(1.5rem,2vw,2.5rem)] mx-2"
        aria-label={`Current page: ${getCurrentPageTitle(currentPage)}`}
      >
        {getCurrentPageTitle(currentPage)}
      </p>

      <NavBar items={navigationRoutes} />
    </HeaderLayout>
  );
}

export default Header;
