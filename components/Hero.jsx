import Link from "next/link";
import ImageComponent from "./Image/ImageComponent";
// import Image from "./Image/ImageComponent";

const heroData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ctaTitle: "Bienvenidos a Konbini Otaku",
    ctaText: "La tienda oficial de Estación Otaku",
    ctaBtn: "Compra ahora",
    linkId: null,
    url: "/products",
  },
  {
    id: 2,
    ctaText: "Explora la colección Naruto Shippuden",
    ctaBtn: "Konoha te espera",
    image:
      "https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    linkId: `series/${2}`,
  },
  {
    id: 3,
    ctaText: "Inspiración de los mares",
    ctaBtn: "Comienza ahora",
    linkId: `series/${4}`,
    image:
      "https://images.unsplash.com/photo-1560746420-1b4dc6d92d17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  },
];

const informationData = [
  {
    id: 1,
    image: "https://i.postimg.cc/Znws0pRW/image-1.png",
    ctaTitle: "Compra seguro",
    ctaText:
      "Cada compra esta asegurada y encriptada, no almacenamos sus datos delicados y somos transparentes en nuestras políticas.",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/D0p57hjs/image-2.png",
    ctaTitle: "Lleva siempre a tus personajes favoritos ",
    ctaText:
      "Desde un póster hasta una camiseta, lleva a tus personajes favoritos a donde quieras y en cualquier producto. ",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/TPj9pgNT/image-3.png",
    ctaTitle: "Garantizamos todo lo que hacemos",
    ctaText:
      "Porque sabemos que priorizar la durabilidad da como resultado consumir menos energía, desperdiciar menos agua y generar menos basura",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/Qt4cTbQZ/image-4.png",
    ctaTitle: "Devolvemos cada venta",
    ctaText:
      "Hemos destinado el 5% de las ventas a la conservación y restauración del medio ambiente natural",
  },
];

const Hero = ({ data }) => {
  const CTABigger = heroData[0];
  const CTASecond = heroData[1];
  const CTAThird = heroData[2];

  const INFOOne = informationData[0];
  const INFOTwo = informationData[1];
  const INFOThree = informationData[2];
  const INFOFour = informationData[3];

  return (
    <section className="relative overflow-hidden bg-white sans px-6">
      <div className="max-w-[90%] gap-y-8 gap-x-4 md:gap-x-8 md:max-w-7xl mx-auto grid grid-cols-2 grid-rows-2 h-[100vh] md:grid-cols-6  ">
        <div className="col-span-2 md:row-span-2 md:col-span-4 relative hover:opacity-75 transition-all ">
          <div className="absolute top-1/2 left-1/2 md:left-1/4  md:-translate-x-1/4 -translate-x-1/2 -translate-y-1/2 px-5 py-3 z-10 w-[70%] md:w-2/3 transparency-bg text-gray-900 flex flex-col gap-2 ">
            <h3 className="text-3xl font-extrabold tracking-tight  sm:text-5xl md:text-6xl">
              {CTABigger.ctaTitle}
            </h3>
            <p className="leading-5 font-semibold"> {CTABigger.ctaText}</p>
            <Link href={""} passHref>
              <a className="font-extrabold border-b-4 border-b-gray-900 w-fit text-lg">
                {CTABigger.ctaBtn}
              </a>
            </Link>
          </div>
          <div className="h-full ">
            <ImageComponent src={CTABigger.image} alt={CTABigger.ctaTitle} />
          </div>
        </div>
        <div className="col-start-1 col-end-2 md:col-start-5 md:col-end-7 row-start-2 row-end-3  md:row-start-1 md:row-end-2  flex flex-col hover:opacity-75 transition-all text-gray-800">
          <ImageComponent src={CTASecond.image} alt={CTASecond.ctaText} />
          <h3 className="leading-5 text-sm font-medium pt-2">
            {CTASecond.ctaText}
          </h3>
          <p className="leading-5 text-sm font-medium border-b-2 pb-1 border-b-gray-900  w-fit pt-1">
            {" "}
            {CTASecond.ctaBtn}
          </p>
        </div>
        <div className="col-start-2 col-end-3 md:col-start-5 md:col-end-7 row-start-2 row-end-3  md:row-start-2 md:row-end-3  flex flex-col hover:opacity-75 transition-all text-gray-800">
          <ImageComponent src={CTAThird.image} alt={CTAThird.ctaText} />
          <h3 className="leading-5 text-sm font-medium pt-2">
            {CTAThird.ctaText}
          </h3>
          <p className="leading-5 text-sm font-medium border-b-2 pb-1 border-b-gray-900 w-fit pt-1">
            {" "}
            {CTAThird.ctaBtn}
          </p>
        </div>
      </div>
      <section className="flex gap-x-4 md:gap-x-8 max-w-90% md:max-w-7xl mx-auto my-12 grid grid-cols-2 grid-rows-2  md:grid-rows-1 md:grid-cols-4">
        <article className="flex flex-1 flex-col justify-around		">
          <div>
            <img src={INFOOne.image}></img>
          </div>
          <div>
            <h2 className="font-black	">{INFOOne.ctaTitle}</h2>
            <p className="font-medium">{INFOOne.ctaText}</p>
          </div>
        </article>
        <article className="flex flex-1 flex-col justify-around		">
          <div>
            <img src={INFOTwo.image}></img>
          </div>
          <div>
            <h2 className="font-black	">{INFOTwo.ctaTitle}</h2>
            <p className="font-medium">{INFOTwo.ctaText}</p>
          </div>
        </article>
        <article className="flex flex-1 flex-col justify-around		">
          <div>
            <img src={INFOThree.image}></img>
          </div>
          <div>
            <h2 className="font-black	">{INFOThree.ctaTitle}</h2>
            <p className="font-medium">{INFOThree.ctaText}</p>
          </div>
        </article>
        <article className="flex flex-1 flex-col justify-around		">
          <div>
            <img src={INFOFour.image}></img>
          </div>
          <div>
            <h2 className="font-black	">{INFOFour.ctaTitle}</h2>
            <p className="font-medium">{INFOFour.ctaText}</p>
          </div>
        </article>
      </section>
      {/* <div className="mx-auto max-w-7xl"> 
        <div className="relative pb-8 mx-auto bg-white lg:max-w-2xl lg:w-full">
          <main className="px-4 mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Bienvenidos a </span> <span className="block text-indigo-600 xl:inline">Konbini Otaku</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">La tienda oficial de Estación Otaku</p>
              <div className="justify-center mt-5 sm:mt-8 sm:flex">
                <div className="rounded-md shadow ">
                  <Link href={`/products/${id}`}>
                    <a className="flex items-center justify-center w-full px-6 py-4 mx-auto text-base font-medium text-white bg-gray-900 border border-transparent border-none divide-x divide-gray-600 rounded-md hover:bg-gray-700 md:text-lg">
                      <span className="pr-6">{name}</span>
                      <span className="pl-6">
                        S/.
                        {price}
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
