import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import logo from "../../src/images/konbini-otaku-logo.svg";

const NavItemsDesktop = ({ menuItems }) => {
  return (
    <ul className="items-center justify-around hidden w-8/12 space-x-8 md:flex ">
      {menuItems.map((item) => {
        let uniqueId = nanoid();
        return (
          <>
            <li key={uniqueId} className="flex-1 flex justify-center">
              <Link
                href={item.url}
                className="text-base text-gray-800  focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
              >
                <a target={item.blank ? "_blank" : ""}>{item.title}</a>
              </Link>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default NavItemsDesktop;
