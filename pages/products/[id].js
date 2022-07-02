import Image from "next/image";
import WhatsAppButton from "../../components/Buttons/WhatsAppButton.jsx";
import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { baseURL } from "../../endpoints.js";
import { findProp } from "../../utils/findProp.js";

export const getStaticPaths = async () => {
  const { data: productData } = await axios.get(`${baseURL}/products`);
  const ids = productData.map((product) => product.id.toString());
  const paths = ids.map((id) => ({ params: { id: id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { data: productData } = await axios.get(`${baseURL}/products`);
  const { data: categoryData } = await axios.get(`${baseURL}/categories`);
  const { data: seriesData } = await axios.get(`${baseURL}/series`);
  const { params } = context;
  const { id } = params;

  const productItem = productData.find(
    (product) => product.id.toString() === id
  );
  const categoryItem = findProp(categoryData, productItem.category_id);
  const seriesItem = findProp(seriesData, productItem.series_id);

  return {
    props: {
      productItem,
      categoryItem,
      seriesItem,
    },
    revalidate: 1,
  };
};

const ProductPage = ({ productItem, categoryItem, seriesItem }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { name, description, image, price } = productItem;
  const { name: categoryName, id: categoryId } = categoryItem;
  const { name: seriesName, id: seriesId } = seriesItem;

  const router = useRouter();

  const routerPush = () => {
    router.push("/", null, { shallow: true });
  };

  const handleWACLick = () => {
    setIsLoading(true);
    setTimeout(routerPush, 3000);
  };

  return (
    <Layout title={name} description={description}>
      <section className="flex justify-around my-5 py-1 sm:py-2  md:py-4 lg:py-6 xl:py-5 border-2 border-y-indigo-600">
        <div>
          <p className=" ext-1xl sm:text-2xl md:text-3xl font-semibold	">
            {name}
          </p>
        </div>
        <div>
          <p className="text-1xl sm:text-2xl md:text-3xl font-semibold	">
            {name}
          </p>
        </div>
      </section>
      <Link href="/categories">
        <div className=" mx-24 my-5 flex" style={{ zIndex: "1000" }}>
          <img src="https://i.postimg.cc/VkNJdLXr/atras.png"></img>
          ATRAS
        </div>
      </Link>
      <section className="grid items-start w-11/12 , grid-cols-1 md:grid-cols-2 p-6 mx-auto md:max-w-screen-lg md:flex-row gap-4 lg:gap-5 ">
        <div className="aspect-[4/4]  sm:rounded sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
          <figure
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <Image
              src={image}
              alt={`Foto de producto ${name}`}
              className="object-cover object-center w-full h-full rounded-lg "
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </div>

        <div className="max-w-2xl mx-auto pb-16 px-4 sm:px-0 lg:pt-0 lg:pb-24 lg:grid lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] ">
          <div className="lg:col-span-2 ">
            <h4 className="mb-2 text-sm text-gray-600">
              <Link href={`/categories/${categoryId}`}>{categoryName}</Link> |{" "}
              <Link href={`/animes/${seriesId}`}>{seriesName}</Link>
            </h4>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {name}
            </h1>
            <div className="flex gap-2">
              <h2 className="text-xl ">S/.{price}</h2>
            </div>
          </div>
          {/* Description */}
          <div className="pt-4 pb-8 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 ">
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              {description || (
                <p className="text-base text-gray-900">{description}</p>
              )}
            </div>
          </div>
          {/* Price and ADD TO CART */}
          <div className="mt-4 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <div className="flex flex-col gap-5 lg:flex-row">
              {/* <button
                onClick={handleCheckoutClick}
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white transition-colors bg-gray-900 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                {isLoading && (
                  <ButtonLoading/>
                )}
                Pagar ahora S/.{amount}
              </button> */}
              {/*  BOTON DE WHATS APP */}
              <WhatsAppButton
                handleWAclick={handleWACLick}
                title={name}
                amount={price}
                tag={name}
                isLoading={isLoading}
              />
            </div>
            <p className="mt-5 text-xs text-gray-800">
              *Pedidos por WhatsApp: Si estas en una computadora, asegúrate de
              que este activado el WhatsApp Web
            </p>
            <p className="mt-5 text-xs text-gray-800">
              *Pronto se habilitaran otros medios de pago.
            </p>
          </div>
          {/* Price and ADD TO CART  END */}
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
