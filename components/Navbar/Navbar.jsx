import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import NavItemsDesktop from "./NavItemsDesktop";
import NavItemsMobile from "./NavItemsMobile";
import menuItems from "../../src/menus/menu";
import { useEffect } from "react";
import logo from "../../src/images/konbini-otaku-logo.svg";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav className="z-10">
        <div className="container mx-auto">
          <div className="relative">
            {/* For large screens */}
            <div className="px-6 py-4  ">
              <div className="container flex items-center justify-between mx-auto">
                {/* Logo */}
                <Link href="/" passHref>
                  <div className="w-[80px] h-[60px]">
                    <figure style={{ width: "100%", height: "100%", position: "relative" }}>
                      <Image layout="fill" objectFit="contain" className="object-cover object-center " src={logo} alt={`Logo de konbini otaku`} />
                    </figure>
                  </div>
                </Link>
                {/*  nav items in desktop */}

                <NavItemsDesktop menuItems={menuItems} />
                <div className="flex items-center justify-end space-x-4 md:w-2/12 xl:space-x-8">
                  <div className="flex lg:hidden">
                    <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-black rounded  md:hidden focus:outline-none focus:ring-2 focus:ring-gray-600">
                      <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* For small screen */}
            <div id="mobile-menu" className={`${showMenu ? "absolute" : "hidden"}  top-0 left-0 inset-0  bg-white flex-col h-screen w-full z-50`}>
              <div className="flex items-center justify-between p-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3"></div>
                <button onClick={() => setShowMenu(false)} aria-label="close menu" className="rounded focus:outline-none focus:ring-2 focus:ring-gray-600">
                  <svg className="text-gray-800 fill-stroke " width={25} height={25} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              {/* NAV ITEMS IN MOBILE VERSION */}
              <div className="p-4 ">
                {" "}
                <NavItemsMobile setShowMenu={setShowMenu} menuItems={menuItems} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
