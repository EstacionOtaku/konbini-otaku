import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout title="404">
      <section className="flex items-center justify-center w-screen h-screen py-16 overflow-x-hidden">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-6 lg:py-16">
              <h1 className="font-bold text-indigo-600 text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-[#EF7800]">Oops!</span> Página no encontrada
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">La pagina que estas buscando no existe.. aún.</p>
              <Link href="/">
                <a className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Regresar al Inicio
                </a>
              </Link>
            </div>
            <div className="mx-auto mt-4 -mt-10 w-72 md:w-90 h-80 lg:mt-0 ">
              <figure style={{ width: "100%", height: "100%", position: "relative" }}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  className="object-cover object-center w-full h-full mb-auto "
                  src="
                  https://i.ytimg.com/vi/xHtFw7os5Aw/maxresdefault.jpg"
                  alt="img"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
