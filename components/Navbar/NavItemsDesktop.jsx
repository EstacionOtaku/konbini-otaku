import { nanoid } from "nanoid";
import Link from "next/link";

const NavItemsDesktop = ({ menuItems }) => {
  return (
    <ul className="items-center justify-center hidden w-8/12 space-x-8 md:flex ">
      {menuItems.map((item) => {
        let uniqueId = nanoid();
        return (
          <li key={uniqueId}>
            <Link
              href={item.url}
              className="text-base text-gray-800  focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
            >
              <a target={item.blank ? "_blank" : ""}>{item.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItemsDesktop;
