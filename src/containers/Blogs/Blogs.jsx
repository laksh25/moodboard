import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import TextOverImage from "../../components/TextOverImage/TextOverImage";
import searchIcon from "../../img/SearchIcon.svg";
import blogOne from "../../img/Blogs/BlogOne.svg";
import blogTwo from "../../img/Blogs/BlogTwo.svg";
import blogThree from "../../img/Blogs/BlogThree.svg";
import { blogActions, blogs } from "../../consts/constant";
import classes from "../../assests/styles/commonStyles.module.css";
import styles from "./Blogs.module.css";

const Blogs = () => {
  const history = useHistory();

  return (
    <div className={classes.container}>
      <div className={styles.centerItems}>
        <p className={classes.pageHeading}>BLOGS</p>
      </div>
      <div className={`${styles.centerItems} ${styles.subHeadingBox}`}>
        <div className={`${styles.centerItems} ${styles.halfBox}`}>
          <div>
            <p className={styles.subHeading}>
              Enhance Your Brand and Maximise Profits : Leveraging Advanced
              Neuroscience to Predict User Experiences.
            </p>
          </div>
          <div className={`${styles.searchBox}`}>
            <div>
              <img src={searchIcon} alt="search" width={20} height={20} />
            </div>
            <div className={styles.searchTextBox}>
              <p className={styles.searchText}>Search</p>
            </div>
          </div>
        </div>
        <div className={styles.preventOverflowBox}>
          <div className={styles.btnContainer}>
            {blogActions.map((item, idx) => (
              <Button key={idx} customStyles={styles.actionBtn}>
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.thumbnailRow}>
        <div className={styles.leftColumn}>
          <TextOverImage
            img={blogOne}
            isClickable
            text="Understanding Cognitive Load: How Our Brain Handles Technology"
          />
        </div>
        <div className={styles.rightColumn}>
          <div>
            <TextOverImage
              img={blogTwo}
              isClickable
              text="How to catch a user's attention"
            />
          </div>
          <div>
            <TextOverImage
              img={blogThree}
              isClickable
              text="A Journey into Aesthetic Appreciation"
            />
          </div>
        </div>
      </div>
      <div className={styles.blogSection}>
        <div className={styles.sectionHeading}>
          <p className={classes.pageHeading}>ENHANCE USER EXPERIENCE</p>
        </div>
        <div className={styles.blogsRow}>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <Card
                img={blog.image}
                text={blog.heading}
                subText={blog.description}
                isClickable
                onClick={() => history.push(`/blogs/${blog.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
