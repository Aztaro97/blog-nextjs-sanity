import NavBar from "../navbar";
import Footer from "../footer";

import styles from "../../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
