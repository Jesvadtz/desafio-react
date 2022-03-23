import React from "react";
import "./TitleCardAR.scss";

function TitleCardAR(props) {
  const { title } = props;
  return <a className="titleCardAR">{title}</a>;
}

export default TitleCardAR;
