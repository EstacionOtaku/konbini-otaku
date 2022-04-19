import Shopify from "@shopify/shopify-api";
const storefrontAccessToken = process.env.STOREFRONT_ACCESS_TOKEN;

const shop = process.env.SHOPIFY_URL;

const storefrontClient = new Shopify.Clients.Storefront(shop, storefrontAccessToken);

const storefront = async (pageQuery) => {
  const storefrontData = await storefrontClient.query({
    data: pageQuery,
  });
  return storefrontData;
};

export default storefront;
