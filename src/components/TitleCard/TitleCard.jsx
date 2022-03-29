import React from "react";
import "./TitleCard.scss";

function TitleCard(props) {
  const { title } = props;
  return <h2 className="titleCard">{title}</h2>;
}

export default TitleCard;
