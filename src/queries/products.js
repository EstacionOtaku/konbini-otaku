export const threeProducts = {
  data: `{
    products (first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }`,
};
export const productsQuery = {
  data: `{
  products(first: 10) {
    edges {
      node {
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 1) {
          edges {
            node {
              transformedSrc(preferredContentType:WEBP)
              altText
            }
          }
        }
      }
    }
  }
}`,
};
