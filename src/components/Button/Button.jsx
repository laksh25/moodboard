import React from "react";

import styles from "./Button.module.css";

const Button = ({ children, customStyles, onClick }) => {
  return (
    <button
      className={`${styles.btnStyles} ${customStyles ? customStyles : ""}`}
      onClick={onClick ? () => onClick() : () => {}}
    >
      {children}
    </button>
  );
};

export default Button;
