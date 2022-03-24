import React from "react";
import "./ButtonIcon.scss";

function ButtonIcon(props) {
  const { src, text } = props;
  return (
    <button className="button-icon">
      {text}
      {src && <img src={src} alt="icon-text" />}
    </button>
  );
}

export default ButtonIcon;
