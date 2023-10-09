import React from "react";
import { useParams } from "react-router-dom";

import classes from "../../assests/styles/commonStyles.module.css";

const Blog = () => {
  const { id } = useParams();

  return (
    <div className={classes.container}>
      <p className={classes.pageHeading}>Blog with id: {id}</p>
    </div>
  );
};

export default Blog;
