import Image from "next/image";
import axios from "axios";
import { client } from "../utils/sanity";
import Card from "./card/index";
import styles from "../styles/Home.module.css";

const picture = "/assets/picture.png";

export default function AllPosts({posts}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The blog</h1>

      <div className={styles.grid}>
        <Image
          src={picture}
          alt="Picture"
          width={700}
          height={400}
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
  );
}


