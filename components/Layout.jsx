import Head from "next/head";
import Navbar from "./Navbar/Navbar.jsx";
import icon from "../public/favicon-ko.svg";
const Layout = ({ children, title, description }) => {
  const pageTitle = `${title} | Konbini otaku` || "Konbini Otaku";
  const pageDescription = description || "La tienda Oficial de Estación Otaku";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <meta name="description" content={pageDescription}></meta>
        <link rel="shortcut icon" type="image/png" href="../public/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
