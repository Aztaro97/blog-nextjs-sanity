import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navbar";
import AllPosts from "../components/AllPosts";
import styles from "../styles/Home.module.css";
import { client } from "../utils/sanity";
import Layout from "../components/layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <AllPosts posts={posts} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]`;

  const res = await client
    .fetch(query)
    .then((resul) => resul)
    .catch((err) => console.log(err));

  return {
    props: {
      posts: res,
    },
  };
};
