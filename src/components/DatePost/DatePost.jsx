import React from "react";
import "./DatePost.scss";

function DatePost(props) {
  const { date } = props;
  return <p className="datePost">Posted on {date}</p>;
}
export default DatePost;
