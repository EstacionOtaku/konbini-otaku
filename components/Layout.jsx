import Head from "next/head";
import Navbar from "./Navbar/Navbar.jsx";


import Footer from "./Footer.jsx";
const Layout = ({ children, title, description }) => {
  const pageTitle = title ? `${title} | Konbini otaku` : "Konbini Otaku";
  const pageDescription = description || "La tienda Oficial de Estación Otaku";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <meta name="description" content={pageDescription}></meta>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
