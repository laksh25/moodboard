import React from "react";
import PropTypes from "prop-types";

import classes from "../../assests/styles/commonStyles.module.css";
import styles from "./Button.module.css";

const Button = ({ children, customStyles, onClick }) => {
  return (
    <button
      className={`${customStyles ? customStyles : ""} ${styles.btnStyles} ${
        classes.commonBoxStyles
      }`}
      onClick={onClick ? () => onClick() : () => {}}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  customStyles: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
