import Image from "next/image";

const ImageComponent = ({ src, alt }) => {
  return (
    <div className="w-full h-full   rounded-lg  group-hover:opacity-75 shadow">
      <figure style={{ width: "100%", height: "100%", position: "relative" }}>
        <Image layout="fill" objectFit="cover" className="object-cover object-center group-hover:opacity-75" src={src} alt={`Foto de ${alt || "producto"}`} title={alt || "producto"} />
      </figure>
    </div>
  );
};

export default ImageComponent;
