import React from "react";
import PropTypes from "prop-types";

import landscapePlaceholder from "../../img/landscapePlaceholder.svg";
import classes from "../../assests/styles/commonStyles.module.css";
import styles from "./Card.module.css";

const Card = ({ alt, img, subText, text }) => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={img || landscapePlaceholder}
          alt={alt || "Image"}
          width={500}
          height={500}
          className={styles.imgStyles}
        />
      </div>
      <div className={styles.heading}>
        <p className={`${classes.textStyles}`}>{text || "Dummy Text"} </p>
      </div>
      {!!subText && (
        <div>
          <p className={styles.description}>{subText}</p>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.node,
  text: PropTypes.string,
};

export default Card;
