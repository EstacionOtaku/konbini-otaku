import Product from "./Product";

const Products = ({ products }) => {
  return (
    <section className="max-w-2xl py-10 px-4 pb-16 mx-auto sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-6">
      <h2 className="text-2xl text-center font-bold ">Explora nuestro catálogo</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products ? (
          products.map((item) => {
            const id = item.node.id;
            const product = item.node;
            return <Product key={id} product={product} />;
          })
        ) : (
          <div>No se pudo fetchear</div>
        )}
      </div>
    </section>
  );
};

export default Products;
