import Hero from "../components/Hero";

import Products from "../components/Products/Products";

import Layout from "../components/Layout";
import axios from "axios";
import { baseURL } from "../endpoints";

export async function getStaticProps() {
  const { data } = await axios.get(`${baseURL}/products`);
  console.log(data);
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Layout>
        <Hero data={data} />
        <Products data={data} />
      </Layout>
    </>
  );
}
