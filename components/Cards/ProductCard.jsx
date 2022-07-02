import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const { name, image, price, id } = product;

  return (
    <>
      <Link href={`/products/${id}`}>
        <a className="group">
          <div className="w-full aspect-[4/3]   rounded-lg  group-hover:opacity-75 shadow">
            <figure
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                layout="fill"
                objectFit="cover"
                className="object-cover object-center group-hover:opacity-75"
                src={image}
                alt={`Foto de ${name}`}
                title={name}
              />
            </figure>
          </div>
          <h3 className="mt-4 text-sm text-gray-700"></h3>
          <div className="flex justify-between items-center">
            <p className="mt-1 text-lg font-medium text-gray-900">{name}</p>
            <p className=" text-base font-medium text-gray-600 pl-2">
              S/.{price}
            </p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default ProductCard;
