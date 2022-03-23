import React from "react";
import { Button } from "react-bootstrap";
import "./ButtonIconText.scss";

function ButtonIconText(props) {
  const { src, text, count, onClick } = props;

  return (
    <Button
      className="btn-white d-flex gap-2"
      variant="light"
      onClick={onClick}
    >
      <img src={src} alt="icon" />
      <p className="d-flex gap-1 text-secondary">
        {count} <span className="d-none d-md-block">{text}</span>
      </p>
    </Button>
  );
}

export default ButtonIconText;
