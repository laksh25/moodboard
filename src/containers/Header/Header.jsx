import React from "react";
import { Link, useLocation } from "react-router-dom";

import { ABOUT, BLOGS, CONTACT_US, DEFAULT, SERVICES } from "../../Auth/Routes";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();

  const isLinkActive = (route) => {
    const currentRoute = location.pathname?.split("/")?.[1];
    const definedRoute = route?.split("/")?.[1];
    return currentRoute === definedRoute;
  };

  isLinkActive();

  return (
    <div className={styles.container}>
      <div>
        <Link to={DEFAULT} className={styles.link}>
          Logo
        </Link>
      </div>
      <div className={styles.navContainer}>
        <Link
          to={ABOUT}
          className={`${isLinkActive(ABOUT) ? styles.activeLink : ""} ${
            styles.link
          }`}
        >
          About
        </Link>
        <Link
          to={SERVICES}
          className={`${isLinkActive(SERVICES) ? styles.activeLink : ""} ${
            styles.link
          }`}
        >
          Services
        </Link>
        <Link
          to={BLOGS}
          className={`${isLinkActive(BLOGS) ? styles.activeLink : ""} ${
            styles.link
          }`}
        >
          Blogs
        </Link>
        <Link
          to={CONTACT_US}
          className={`${isLinkActive(CONTACT_US) ? styles.activeLink : ""} ${
            styles.link
          } ${styles.contactUs}`}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
