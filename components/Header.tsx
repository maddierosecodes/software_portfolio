"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

function Header() {
  const currentPage = usePathname();
  return (
    <header className="flex flex-wrap justify-between items-center bg-blue-500 h-24 mx-[10%]">
      <h1 className="subtitle mx-2">MaddieRoseCodes</h1>

      <h2 className="title text-center mt-2 px-2">
        {currentPage === "/" ? "Can You See Me?" : currentPage.slice(1)}
      </h2>
      <NavBar />
    </header>
  );
}

export default Header;
