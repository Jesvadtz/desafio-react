import React from "react";
import "./TitleCard.scss";

function TitleCard(props) {
  const { title } = props;
  return <a className="titleCard">{title}</a>;
}

export default TitleCard;
