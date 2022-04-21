import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import logo from "../src/images/konbini-otaku-logo.svg";
const Footer = ({ footer, header }) => {
  return (
    <footer className="px-4 divide-y font-sans">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="lg:w-1/3 col-span-2 ">
            <Link href="/" passHref>
              <div className="w-[80px] h-[60px]">
                <figure style={{ width: "100%", height: "100%", position: "relative" }}>
                  <Image
                    layout="fill"
                    objectFit="contain"
                    className="object-cover object-center pointer "
                    src={logo}
                    alt={`Logo de konbini otaku`}
                  />
                </figure>
              </div>
            </Link>
          </div>
          <div className="space-y-3 font-sans">
            <h3 className="uppercase text-gray-600 text-xs font-semibold">Sobre nosotros</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" target="_blank" href="https://estacion-otaku.vercel.app">
                  Proyecto Estacion Otaku
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" target="_blank" href="https://estacion-otaku.vercel.app/nosotros">
                  ¿Quiénes Somos?
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-600 text-xs font-semibold">Explora nuestro repositorio</div>
            <div className="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="https://github.com/EstacionOtaku/konbini-otaku"
                target="_blank"
                title="Repositorio Konbini Otaku"
                className="flex items-center p-1"
              >
                <AiFillGithub className="scale-[2]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-coolGray-400">
        © 2022 Konbini Otaku. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
