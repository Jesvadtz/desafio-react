import React from "react";
import "./ButtonIcon.scss";

function ButtonIcon(props) {
  const { src, text, onClick, type = "button" } = props;
  return (
    <button className="button-icon" onClick={onClick} type={type}>
      {text}
      {src && <img src={src} alt="icon-text" />}
    </button>
  );
}

export default ButtonIcon;
