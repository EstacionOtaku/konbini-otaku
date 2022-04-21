import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/ko-favicon.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
