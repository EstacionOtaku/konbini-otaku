import axios from "axios";
import Card from "../../components/Cards/Card";
import Layout from "../../components/Layout";
import { baseURL } from "../../endpoints";

export async function getStaticProps() {
  const { data: dataCategories } = await axios.get(`${baseURL}/categories`);
  const { data: dataProducts } = await axios.get(`${baseURL}/products`);
  const categoryWithProductData = dataCategories.map((category) => {
    return {
      ...category,
      products: dataProducts.filter(({ category_id }) => category.id === category_id),
    };
  });

  return {
    props: {
      data: categoryWithProductData,
    },
    revalidate: 1,
  };
}

const CategoriesPage = ({ data }) => {
  return (
    <Layout>
      <section className="max-w-2xl py-10 px-4 pb-16 mx-auto sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-6">
        <h2 className="text-2xl text-center font-bold ">Explora nuestras categorías</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data &&
            data.map((category, index) => {
              return <Card key={index} data={category} type="categories" />;
            })}
        </div>
      </section>
    </Layout>
  );
};

export default CategoriesPage;
