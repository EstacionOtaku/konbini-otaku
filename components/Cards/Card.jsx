import Link from "next/link";
import Image from "next/image";

const Card = ({ data, type }) => {
  const { name, reference_image, id, products } = data;
  const quantityOfProducts = products.length;
  return (
    <>
      <Link href={`/${type}/${id}`}>
        <a className="group">
          <div className="w-full aspect-video rounded-lg  group-hover:opacity-75 shadow">
            <figure style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image layout="fill" objectFit="cover" className="object-cover object-center group-hover:opacity-75" src={reference_image} alt={`Foto de ${name}`} title={name} />
            </figure>
          </div>
          <h3 className="mt-4 text-sm text-gray-700"></h3>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-gray-900">{name}</p>
            <p className="text-lg font-medium text-gray-900">{quantityOfProducts} productos</p>
          </div>
        </a>
      </Link>
      {/* {"simple" === productType ? <AddToCart product={product} /> : null} */}
    </>
  );
};

export default Card;
