// import Card from "../../components/Cards/Card";
import Layout from "../../components/Layout";
import ProductCard from "../../components/Cards/ProductCard";
import axios from "axios";
import { baseURL } from "../../endpoints";
import Link from "next/link";

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
  const { data: productsData } = await axios.get(
    `${baseURL}/products?category_id=${id}`
  );
  const { data: categoriesData } = await axios.get(
    `${baseURL}/categories/${id}`
  );

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
      <section className=" relative overflow-hidden sans sm:h-50 md:h-70 xl:h-80">
        <div className="absolute w-screen h-full">
          <Link href="/categories">
            <div className="absolute mx-5 my-5 flex" style={{ zIndex: "1000" }}>
              <img src="https://i.postimg.cc/VkNJdLXr/atras.png"></img>
              ATRAS
            </div>
          </Link>
          <img
            className="w-screen h-full	"
            src="https://i.postimg.cc/rsydVBKB/Portada-Category.png"
          ></img>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="relative pb-8 mx-auto bg-transparent lg:max-w-2xl lg:w-full">
            <main className="px-4 mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-20 lg:mt-15 lg:px-8 xl:mt-15">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-white-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Bienvenidos a </span>
                  <span className="block text-white-600 xl:inline">
                    KOMBINI OTAKU
                  </span>
                </h1>
                <p className="mt-3 text-base text-white-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Tienda online de merchandising de Anime y Manga
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>
      <section className="flex justify-around my-5 py-1 sm:py-2  md:py-4 lg:py-6 xl:py-5 border-2 border-y-indigo-600">
        <div>
          <p className=" ext-1xl sm:text-2xl md:text-3xl font-semibold	">
            {name}
          </p>
        </div>
        <div>
          <p className="text-1xl sm:text-2xl md:text-3xl font-semibold	">
            {name}
          </p>
        </div>
        <div>
          <p className="text-1xl sm:text-2xl md:text-3xl font-semibold	">
            {name}
          </p>
        </div>
        <div>
          <p className="text-1xl sm:text-2xl md:text-3xl font-semibold	">
            {name}
          </p>
        </div>
      </section>
      <section className="max-w-2xl py-10 px-4 pb-16 mx-auto sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsData &&
            productsData.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  product={product}
                  productsData={productsData}
                />
              );
            })}
        </div>
      </section>
    </Layout>
  );
};

export default SingleCategoryPage;
