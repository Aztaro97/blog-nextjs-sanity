import { useRouter } from "next/router";
import Image from "next/image";
import moment from "moment";
import styles from "../../styles/Card.module.css";
import { urlFor } from "../../utils/sanity";

const picture = "/assets/picture.png";

const Card = ({ post }) => {
  const router = useRouter();

  const slug = post.slug.current;


  const handleClick = (slugUrl) => {
    router.push(`/post/${slugUrl}`);
  };

  return (
    <div className={styles.card} onClick={() => handleClick(slug)}>
      <Image
        src={urlFor(post.mainImage).width(200).url()}
        className={styles.img}
        width="100"
        height="200"
        alt="Picture"
      />
      <p className={styles.date}>
        
        Post on {moment(post.publishedAt).format("MMM DD")} - Update {moment(post._updatedAt).format("MMM DD")}
      </p>
      <h2 className={styles.title}>{post.title}</h2>
      {/* <p className={styles.description}>
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem
        ipsum dolor
      </p> */}
    </div>
  );
};

export default Card;
