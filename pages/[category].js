import Image from "next/image";
import axios from "axios";
import { client } from "../utils/sanity";
import styles from "../styles/Home.module.css";
import Card from "../components/card";
import Layout from "../components/layout";

const picture = "/assets/picture.png";

export default function Category({ posts }) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>The blog</h1>

        <div className={styles.grid}>
          <Image
            src={picture}
            alt="Picture"
            width={700}
            height={300}
            className={styles.img}
          />
          <div className={styles.content}>
            <h3 className={styles.heading}>
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </h3>
            <p className={styles.para}>
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
          </div>
        </div>

        <div className={styles.posts_container}>
          {posts.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (content) => {
  const slug = content.query.category;
  const query = `*[_type=="post" &&  "${slug}" in category[]->title] {
    ...,
    category[] -> {
            title
    },
  }`;

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
