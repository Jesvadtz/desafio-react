import React from "react";
import styles from "./TitleSecondary.module.scss";

function TitleSecondary(props) {
  const { title } = props;
  return <h4 className={styles.titleSecondary}>{title}</h4>;
}

export default TitleSecondary;
