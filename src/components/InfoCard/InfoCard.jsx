import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import useImageLoad from "../../CustomHooks/useImageLoad";
import classes from "../../assests/styles/commonStyles.module.css";
import styles from "./InfoCard.module.css";

const InfoCard = ({
  alt,
  btnName,
  description,
  heading,
  isImageFirst,
  onButtonClick,
  src,
}) => {
  const { isImageLoaded } = useImageLoad({ src: src });

  if (!isImageLoaded) {
    return <></>;
  }

  return (
    <div
      className={`${isImageFirst ? styles.reverseColumns : ""} ${styles.row}`}
    >
      <div className={styles.leftColumn}>
        <div>
          <p className={styles.heading}>{heading}</p>
        </div>
        <div className={styles.descriptionStyles}>
          <p className={classes.subText}>{description}</p>
        </div>
        <div>
          <Button
            onClick={onButtonClick ? () => onButtonClick() : () => {}}
            customStyles={classes.yellowBtnStyles}
          >
            {btnName}
          </Button>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <img src={src} alt={alt || "Image"} className={styles.image} />
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  alt: PropTypes.string,
  btnName: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string,
  isImageFirst: PropTypes.bool,
  onButtonClick: PropTypes.func,
  src: PropTypes.string,
};

export default InfoCard;
