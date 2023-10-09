import React from "react";

import Button from "../../components/Button/Button";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div>
          <p className={styles.heading}>NeuroUX</p>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.leftColumn}>
            <p className={styles.text}>
              Enhance Your Brand and Maximise Profits : Leveraging Advanced
              Neuroscience to Predict User Experiences.
            </p>
            <div className={styles.btnContainer}>
              <Button customStyles={styles.getInTouchBtn}>Get in Touch</Button>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.column}>
              <p className={styles.bold}>About</p>
              <div className={styles.subHeadingBox}>
                <p className={styles.subHeading}>Sub heading 1 </p>
                <p className={styles.subHeading}>Sub heading 1 </p>
                <p className={styles.subHeading}>Sub heading 1 </p>
                <p className={styles.subHeading}>Sub heading 1 </p>
              </div>
            </div>
            <div className={styles.column}>
              <p className={styles.bold}>Services</p>
              <div className={styles.subHeadingBox}>
                <p className={styles.subHeading}>Sub heading 1 </p>
                <p className={styles.subHeading}>Sub heading 1 </p>
                <p className={styles.subHeading}>Sub heading 1 </p>
                <p className={styles.subHeading}>Sub heading 1 </p>
              </div>
            </div>
            <div className={styles.column}>
              <p className={styles.bold}>Blog</p>
              <div className={styles.subHeadingBox}>
                <p className={styles.subHeading}>Sub heading 1 </p>
                <p className={styles.subHeading}>Sub heading 1 </p>
                <p className={styles.subHeading}>Sub heading 1 </p>
                <p className={styles.subHeading}>Sub heading 1 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
