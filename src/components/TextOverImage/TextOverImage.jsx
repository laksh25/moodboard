import React from "react";
import PropTypes from "prop-types";

import landscapePlaceholder from "../../img/landscapePlaceholder.svg";
import useImageLoad from "../../CustomHooks/useImageLoad";
import classes from "../../assests/styles/commonStyles.module.css";
import styles from "./TextOverImage.module.css";

const TextOverImage = ({ alt, img, isClickable, onClick, text }) => {
  const { isImageLoaded } = useImageLoad({ src: img });

  return (
    <div
      className={`${isClickable ? styles.isClickable : ""} ${styles.container}`}
      onClick={onClick ? onClick : () => {}}
    >
      <img
        src={img ? img : landscapePlaceholder}
        alt={alt || "image"}
        className={styles.imgStyles}
        width={600}
        height={600}
      />
      {isImageLoaded && (
        <div className={styles.textContainer}>
          <p className={`${styles.textStyles} ${classes.textStyles}`}>
            {text || "Dummy Text"}
          </p>
        </div>
      )}
    </div>
  );
};

TextOverImage.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.node,
  isClickable: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default TextOverImage;
