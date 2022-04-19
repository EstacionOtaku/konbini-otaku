export const productsQuery = {
  data: `{
  products(first: 10) {
    edges {
      node {
        description
        tags
        id
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
