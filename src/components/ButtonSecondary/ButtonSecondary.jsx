import React from "react";
import "./ButtonSecondary.scss";

function ButtonSecondary(props) {
  const { text } = props;
  return (
    <a
      className="btn btn-purple-outline"
      type="submit"
      href="./pages/new-post.html"
    >
      {text}
    </a>
  );
}

export default ButtonSecondary;
