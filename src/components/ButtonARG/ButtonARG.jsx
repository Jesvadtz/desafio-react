import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./ButtonARG.module.css";

function ButtonARG(props) {
  return (
    <div className="containerButton">
      <Button className={styles.button}>See all posts</Button>
    </div>
  );
}

export default ButtonARG;
