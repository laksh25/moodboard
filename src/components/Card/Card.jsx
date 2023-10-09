import React from "react";
import PropTypes from "prop-types";

import useImageLoad from "../../CustomHooks/useImageLoad";
import landscapePlaceholder from "../../img/landscapePlaceholder.svg";
import classes from "../../assests/styles/commonStyles.module.css";
import styles from "./Card.module.css";

const Card = ({ alt, img, isClickable, onClick, subText, text }) => {
  const { isImageLoaded } = useImageLoad({ src: img });

  if (!isImageLoaded) {
    return <> </>;
  }

  return (
    <div
      className={`${isClickable ? classes.clickable : ""} ${styles.container}`}
      onClick={onClick ? onClick : () => {}}
    >
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
          <p className={classes.subText}>{subText}</p>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.node,
  isClickable: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Card;
