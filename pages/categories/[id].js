// import Card from "../../components/Cards/Card";
import Layout from "../../components/Layout";
import ProductCard from "../../components/Cards/ProductCard";
import axios from "axios";
import { baseURL } from "../../endpoints";

export const getStaticPaths = async () => {
  const { data: categoriesData } = await axios.get(`${baseURL}/categories`);
  const ids = categoriesData.map((category) => category.id.toString());
  const paths = ids.map((id) => ({ params: { id: id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { id } = params;
  const { data: productsData } = await axios.get(`${baseURL}/products?category_id=${id}`);
  const { data: categoriesData } = await axios.get(`${baseURL}/categories/${id}`);

  return {
    props: {
      productsData,
      categoriesData,
    },
    revalidate: 1,
  };
};

const SingleCategoryPage = ({ productsData, categoriesData }) => {
  const { name, reference_image } = categoriesData;

  return (
    <Layout>
      <section className="max-w-2xl py-10 px-4 pb-16 mx-auto sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-6">
        <h2 className="text-2xl text-center font-bold ">{name}</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsData &&
            productsData.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
        </div>
      </section>
    </Layout>
  );
};

export default SingleCategoryPage;
