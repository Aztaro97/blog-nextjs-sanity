import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <Link href="/">
            <a>
              Logo
              {/* <img src="/images/logo.png" alt="logo" /> */}
            </a>
          </Link>
        </div>
        <ul className={styles.navbar_menu}>
          <li className={styles.navbar_list}>
            <Link href="/">
              <a className={styles.navbar_item}>Home</a>
            </Link>
            <div></div>
          </li>
          <li className={styles.navbar_list}>
            <Link href="/">
              <a className={styles.navbar_item}>About</a>
            </Link>
            <div></div>
          </li>
          <li className={styles.navbar_list}>
            <Link href="/">
              <a className={styles.navbar_item}>Contact</a>
            </Link>
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
