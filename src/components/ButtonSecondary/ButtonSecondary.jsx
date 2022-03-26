import React from "react";
import "./ButtonSecondary.scss";

function ButtonSecondary(props) {
  const { text } = props;
  return (
    <button
      className="btn btn-purple-outline"
      type="submit"
      href="./pages/new-post.html"
    >
      {text}
    </button>
  );
}

export default ButtonSecondary;
