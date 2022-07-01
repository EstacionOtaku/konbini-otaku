import { IoLogoWhatsapp } from "react-icons/io";
import ButtonLoading from "../loading/ButtonLoading";
const WhatsAppButton = ({ handleWAclick, title, tag, amount, isLoading }) => {
  const apiWhatsApp = `https://api.whatsapp.com/send?phone=51991537893&text=Hola%20Konbini%20Otaku%20Store,%20quiero%20comprar%20el%20siguiente%20producto:%20${title};%20Tema:%20${tag};%20el%20precio%20es%20el%20siguiente:%20S/.%20${amount}.%20Muchas%20Gracias`;

  return (
    <>
      <a
        href={apiWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white transition-colors border border-transparent rounded-md bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        onClick={() => handleWAclick()}
      >
        {isLoading && <ButtonLoading />}
        Pedir en <IoLogoWhatsapp className="mx-3 scale-150" /> por S/.{amount}
      </a>
    </>
  );
};

export default WhatsAppButton;
