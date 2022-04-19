import Link from "next/link";
import Image from "next/image";

// import AddToCart from "../Cart/AddToCart";

const Product = ({ product }) => {
  const { title, handle, images, priceRange, id } = product;
  const { transformedSrc, altText } = images.edges[0].node;

  const amount = priceRange.minVariantPrice.amount.slice(0, -2);
  return (
    <>
      <Link href={`/products/${handle}`}>
        <a className="group">
          <div className="w-full aspect-[4/3]   rounded-lg  group-hover:opacity-75 shadow">
            <figure style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                layout="fill"
                objectFit="contain"
                className="object-cover object-center group-hover:opacity-75"
                src={transformedSrc}
                alt={`Foto de ${title}`}
                title={title}
              />
            </figure>
          </div>
          <h3 className="mt-4 text-sm text-gray-700"></h3>
          <div className="flex justify-between items-center">
            <p className="mt-1 text-lg font-medium text-gray-900">{title}</p>
            <p className=" text-base font-medium text-gray-600 pl-2">S/.{amount}</p>
          </div>
        </a>
      </Link>
      {/* {"simple" === productType ? <AddToCart product={product} /> : null} */}
    </>
  );
};

export default Product;
