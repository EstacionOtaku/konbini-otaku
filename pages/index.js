import Head from "next/head";

import Shopify from "@shopify/shopify-api";
import Hero from "../components/Hero";
import { shop, storefrontAccessToken } from "../endpoints";
import { productsQuery } from "../src/queries/products";
import Products from "../components/Products/Products";
import { shopQuery } from "../src/queries/shop";
import Layout from "../components/Layout";

export async function getStaticProps() {
  const storefrontClient = new Shopify.Clients.Storefront(shop, storefrontAccessToken);

  const productsData = await storefrontClient.query(productsQuery);
  const shopData = await storefrontClient.query(shopQuery);
  const products = productsData.body.data.products.edges;
  const shopInfo = shopData.body.data.shop;

  return {
    props: {
      products,
      shopInfo,
    },
    revalidate: 1,
  };
}

export default function Home({ products, shopInfo }) {
  return (
    <>
      <Layout>
        <Hero products={products} shopInfo={shopInfo} />
        <Products products={products} />
      </Layout>
    </>
  );
}
