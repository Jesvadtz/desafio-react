import React from "react";
import "./Avatar.scss";

function Avatar(props) {
  const { src } = props;
  return <img src={src} className="rounded-circle avatar" alt="Avatar user" />;
}

export default Avatar;
