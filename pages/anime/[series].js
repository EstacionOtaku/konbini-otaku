import Shopify from "@shopify/shopify-api";
import { productsQuery } from "../../src/queries/products";

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
const CategoryPage = () => {
  return <></>;
};

export default CategoryPage;
