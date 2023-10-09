import React from "react";
import { Link } from "react-router-dom";

import { ABOUT, BLOGS, CONTACT_US, DEFAULT, SERVICES } from "../../Auth/Routes";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to={DEFAULT} className={styles.link}>
          Logo
        </Link>
      </div>
      <div className={styles.navContainer}>
        <Link to={ABOUT} className={styles.link}>
          About
        </Link>
        <Link to={SERVICES} className={styles.link}>
          Services
        </Link>
        <Link to={BLOGS} className={styles.link}>
          Blogs
        </Link>
        <Link to={CONTACT_US} className={`${styles.link} ${styles.contactUs}`}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
