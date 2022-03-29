import React from "react";
import "./TitleARAncor.css";

function TitleARAncor(props) {
  const { title } = props;
  return <a className="titleCardARAncor">{title}</a>;
}

export default TitleARAncor;
