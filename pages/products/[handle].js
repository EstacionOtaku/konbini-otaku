import Image from "next/image";


import Shopify from "@shopify/shopify-api";
import { shop, storefrontAccessToken } from "../../endpoints";
import { productsQuery } from "../../src/queries/products";

import WhatsAppButton from "../../components/Buttons/WhatsAppButton.jsx";
import { useState } from "react";
// import { checkoutMutation } from "../../src/queries/checkout";
import shopify, { storefront } from "../../shopify";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const storefrontClient = new Shopify.Clients.Storefront(shop, storefrontAccessToken);
  const { body } = await storefrontClient.query(productsQuery);
  const products = body.data.products.edges;
  const handles = products.map((product) => product.node.handle);
  const paths = handles.map((handle) => ({ params: { handle: handle } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const storefrontClient = new Shopify.Clients.Storefront(shop, storefrontAccessToken);
  const { body } = await storefrontClient.query(productsQuery);
  const products = body.data.products.edges;

  const { params } = context;
  const { handle } = params;

  const productItem = products.find((product) => product.node.handle === handle);

  return {
    props: {
      productItem,
    },
    revalidate: 1,
  };
};

const ProductPage = ({ productItem }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { id, title, priceRange, images, tags, description, variants } = productItem.node;
  const { transformedSrc, altText } = images.edges[0].node;
  const amount = priceRange.minVariantPrice.amount.slice(0, -2);
  const tag = tags[0];
  const variantId = variants.edges[0].node.id;
  console.log(variantId);
  const checkoutMutation = {
    data: `
    mutation CheckoutCreate($variantId: ID!) {
      checkoutCreate(input: { lineItems: { variantId: $variantId, quantity: 1 } }) {
        checkout {
          webUrl
        }
      }
    }
  `,
  };
  async function handleCheckoutClick() {
    setIsLoading(true);

    const { data } = await shopify(checkoutMutation, variantId);
    const { webUrl } = await data.checkoutCreate.checkout;
    console.log(webUrl);
    //Checkout Button
    // const { data } = await storefront(checkoutMutation, variantId);
    // const response = await storefront(checkoutMutation, variantId);
    // console.log(response);
  }

  const router = useRouter();
  const handleWACLick = () => {
    router.push("/", null, { shallow: true });
  };

  return (
    <Layout title={title} description={description}>
      <section className="grid items-start w-11/12 , grid-cols-1 md:grid-cols-2 p-6 mx-auto md:max-w-screen-lg md:flex-row gap-4 lg:gap-5 ">
        <div className="aspect-[4/4]  sm:rounded sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
          <figure style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src={transformedSrc}
              alt={`Foto de producto ${title}`}
              className="object-cover object-center w-full h-full rounded-lg "
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </div>
        {/* Product info */}
        <div className="max-w-2xl mx-auto pb-16 px-4 sm:px-0 lg:pt-0 lg:pb-24 lg:grid lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] ">
          <div className="lg:col-span-2 ">
            <h4 className="mb-2 text-sm text-gray-600">{tag}</h4>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
            <div className="flex gap-2">
              <h2 className="text-xl">S/.{amount}</h2>
              {/* <h2 className="text-xl ">{`S/. ${sale_price || price}`}</h2>
              <h2 className="text-base text-gray-500 line-through">
                {" "}
                {sale_price === price ? `S/. ${regular_price}` : ""}
              </h2> */}
            </div>
          </div>
          {/* Description */}
          <div className="pt-4 pb-8 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 ">
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">{description || <p className="text-base text-gray-900">{description}</p>}</div>
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
                  <svg
                    className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Pagar ahora S/.{amount}
              </button> */}
              {/*  BOTON DE WHATS APP */}
              <WhatsAppButton handleWAclick={handleWACLick} title={title} amount={amount} tag={tag} />
            </div>
            <p className="mt-5 text-xs text-gray-800">
              *Pedidos por WhatsApp: Si estas en una computadora, asegúrate de que este activado el WhatsApp Web
            </p>
            <p className="mt-5 text-xs text-gray-800">*Pronto se habilitaran otros medios de pago.</p>
          </div>
          {/* Price and ADD TO CART  END */}
        </div>
      </section>
    </Layout>
  );
};

// export const getServerSideProps = async (context) => {
//  const res = await getProductsData();

// }
// const getProducts = async() => {
//   return products
// }

export default ProductPage;
