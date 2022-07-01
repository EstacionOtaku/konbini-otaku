export const productsQuery = {
  data: `{
 tags(first: 10) {
   edges {
     node {
       name
       id 
     }
   }
 }
}`,
};
