import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./ButtonARB.module.css";

function ButtonARB(props) {
  return (
    <div className="containerButton">
      <Button className={styles.button}>Submit Your Project!</Button>
    </div>
  );
}

export default ButtonARB;
