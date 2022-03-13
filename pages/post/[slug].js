import Image from "next/image";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import moment from "moment";
import { client, urlFor } from "../../utils/sanity";

import styles from "../../styles/Post.module.css";
import Layout from "../../components/layout";

const picture = "/assets/picture.png";

export default function SinglePost({ post, dataPosts, listCategory }) {
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };


  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.grid_container}>
          <div className={styles.post}>
            <Image
              src={urlFor(post.mainImage).width(800).url()}
              width={500}
              height={300}
              layout="responsive"
              alt={post.title}
            />
            <div className={styles.post_body}>
              <div className={styles.post_auth}>
                <Image
                  src={urlFor(post.mainImage).width(800).url()}
                  width={50}
                  height={50}
                  className={styles.post_auth_img}
                  layout="responsive"
                  alt={post.post_auth_name}
                />
                <div>
                  <h2 className={styles.post_auth_name}>Moussa </h2>
                  <p className={styles.post_auth_date}>
                    {" "}
                    Post on {moment(post.publishedAt).format("MMM DD")}{" "}
                  </p>
                </div>
              </div>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.description}>
                <BlockContent blocks={post.body} serializers={serializers} />
              </div>
            </div>
          </div>
          <aside className={styles.aside}>
            <div className={styles.categories_container}>
              <h3 className={styles.categories_title}>Categories</h3>
              <ul className={styles.list_categories}>
                {listCategory.map((category, index) => (
                  <li key={index} className={styles.category}>
                    <Link href={`/${category.title}`}>
                      <a >{category.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.articles_container}>
              <h3 className={styles.articles_title}>Recents Posts</h3>
              <div className={styles.list_articles}>
                {dataPosts.map((item, index) => (
                  <div key={index} className={styles.article}>
                    <Link href={`/post/${item.slug.current}`}>
                      <a className={styles.article_link}>{item.title}</a>
                    </Link>
                    <p className={styles.article_date}>
                      Post on {moment(post.publishedAt).format("MMM DD")}{" "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;
  const query = `*[ _type == "post" && slug.current == "${pageSlug}" ]`;

  const res = await client
    .fetch(query)
    .then((result) => result)
    .catch((err) => console.log(err));

  const posts = await client
    .fetch(`*[_type=="post"]`)
    .then((result) => result)
    .catch((err) => console.log(err));

  const listCategory = await client
    .fetch(`*[_type=="category"]`)
    .then((result) => result)
    .catch((err) => console.log(err));

  return {
    props: {
      post: res[0],
      dataPosts: posts,
      listCategory: listCategory,
    },
  };
};
