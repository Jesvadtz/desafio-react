import React from "react";
import styles from "./TitleDetailPost.module.scss";

function TitleDetailPost(props) {
  const { title } = props;
  return <h1 className={styles.titleDetailPost}>{title}</h1>;
}

export default TitleDetailPost;
