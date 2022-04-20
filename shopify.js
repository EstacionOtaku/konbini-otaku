import { shop, storefrontAccessToken } from "./endpoints";
import { GraphQLClient } from "graphql-request";

const shopify = async (query, variables) => {
  const endpoint = `https://tienda-estacion-otaku.myshopify.com/api/2022-04/graphql.json`;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
  });
  return await graphQLClient.request(query, variables);
};
export default shopify;
