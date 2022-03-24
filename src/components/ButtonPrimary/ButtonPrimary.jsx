import React from "react";
import "./ButtonPrimary.scss";

function ButtonPrimary(props) {
  const { text } = props;
  return <button className="button-primary">{text}</button>;
}
export default ButtonPrimary;
