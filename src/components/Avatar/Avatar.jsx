import React from "react";
import "./Avatar.scss";

function Avatar(props) {
  const { src } = props;
  return <img src={src} className="rounded-circle avatar" />;
}

export default Avatar;
