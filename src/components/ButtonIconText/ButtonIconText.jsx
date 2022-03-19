import React from "react";
import { Button } from "react-bootstrap";

function ButtonIconText(props) {
  const { src, text } = props;
  return (
    <Button>
      <img src={src} alt="icon" />
      <span>{text}</span>
    </Button>
  );
}

export default ButtonIconText;
