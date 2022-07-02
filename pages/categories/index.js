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
      products: dataProducts.filter(
        ({ category_id }) => category.id === category_id
      ),
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
      <section className=" relative overflow-hidden sans sm:h-50 md:h-70 xl:h-80">
        <div className="absolute w-screen h-full">
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
            CATEGORIAS
          </p>
        </div>
        <div>
          <p className="text-1xl sm:text-2xl md:text-3xl font-semibold	">
            CATEGORIAS
          </p>
        </div>
        <div>
          <p className="text-1xl sm:text-2xl md:text-3xl font-semibold	">
            CATEGORIAS
          </p>
        </div>
        <div>
          <p className="text-1xl sm:text-2xl md:text-3xl font-semibold	">
            CATEGORIAS
          </p>
        </div>
      </section>
      <section className="max-w-2xl py-10 px-4 pb-16 mx-auto sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-6">
        <h2 className="text-2xl text-center font-bold ">
          Explora nuestras categorías
        </h2>
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
