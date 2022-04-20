import Link from "next/link";

const Hero = ({ shopInfo, products }) => {
  const { title, handle, priceRange } = products[0].node;
  const amount = priceRange.minVariantPrice.amount.slice(0, -2);

  const { name, description } = shopInfo;

  return (
    <section className="relative overflow-hidden bg-white sans">
      <div className="mx-auto max-w-7xl">
        <div className="relative pb-8 mx-auto bg-white lg:max-w-2xl lg:w-full">
          <main className="px-4 mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Bienvenidos a </span>{" "}
                <span className="block text-indigo-600 xl:inline">{name}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {description}
              </p>
              <div className="justify-center mt-5 sm:mt-8 sm:flex">
                <div className="rounded-md shadow ">
                  <Link href={`/products/${handle}`}>
                    <a className="flex items-center justify-center w-full px-6 py-4 mx-auto text-base font-medium text-white bg-gray-900 border border-transparent border-none divide-x divide-gray-600 rounded-md hover:bg-gray-700 md:text-lg">
                      <span className="pr-6">{title}</span>
                      <span className="pl-6">
                        S/.
                        {amount}
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Hero;
