import { nanoid } from "nanoid";
import Link from "next/link";

const NavItemsMobile = ({ menuItems, setShowMenu }) => {
  const handleClick = () => {
    setShowMenu(false);
  };
  return (
    <ul className="flex flex-col space-y-6">
      {menuItems.map((item) => {
        let uniqueId = nanoid();
        return (
          <Link href={item.url} key={uniqueId}>
            <a target={item.blank ? "_blank" : ""} onClick={handleClick}>
              <li className="flex items-center justify-between text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800">
                {item.title}
                <svg
                  className="text-black fill-stroke dark:text-white"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            </a>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavItemsMobile;
