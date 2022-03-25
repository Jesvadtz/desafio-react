import React from "react";
import "./TitleCardAR.css";

function TitleCardAR(props) {
  const { title } = props;
  return <a className="titleCardAR">{title}</a>;
}

export default TitleCardAR;
