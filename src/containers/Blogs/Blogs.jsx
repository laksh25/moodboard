import React from "react";

import classes from "../../assests/styles/commonStyles.module.css";
import styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <div className={classes.container}>
      <div className={styles.headingBox}>
        <p className={classes.pageHeading}>BLOGS</p>
      </div>
      <div className={`${styles.headingBox} ${styles.subHeadingBox}`}>
        <div className={`${styles.headingBox} ${styles.halfBox}`}>
          <p className={styles.subHeading}>
            Enhance Your Brand and Maximise Profits : Leveraging Advanced
            Neuroscience to Predict User Experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
