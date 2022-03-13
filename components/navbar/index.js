import styles from "../../styles/Navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <a href="/">
            Logo
            {/* <img src="/images/logo.png" alt="logo" /> */}
          </a>
        </div>
        <ul className={styles.navbar_menu}>
          <li className={styles.navbar_list}>
            <a href="/" className={styles.navbar_item}>
              Home
            </a>
            <div></div>
          </li>
          <li className={styles.navbar_list}>
            <a href="/" className={styles.navbar_item}>
              About
            </a>
            <div></div>
          </li>
          <li className={styles.navbar_list}>
            <a href="/" className={styles.navbar_item}>
              Contact
            </a>
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
