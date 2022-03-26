import React from "react";

function ContentPost(props) {
  const { content } = props;
  return (
    <div>
      <p>{content}</p>
    </div>
  );
}

export default ContentPost;
