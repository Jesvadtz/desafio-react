import React from "react";

function LinkIcon(props) {
  const { href, src, alt } = props;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  );
}

export default LinkIcon;
