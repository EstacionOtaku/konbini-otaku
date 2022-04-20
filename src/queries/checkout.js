const gql = String.raw;
export const checkoutMutation = gql`
  mutation CheckoutCreate($variantId: ID!) {
    checkoutCreate(input: { lineItems: { variantId: $variantId, quantity: 1 } }) {
      checkout {
        webUrl
      }
    }
  }
`;
