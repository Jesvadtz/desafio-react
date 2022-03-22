import React from "react";
import Button from "react-bootstrap/Button";

function Tag(props) {
  const { tag } = props;
  return (
    <Button variant="light" className="btn-white">
      #{tag}
    </Button>
  );
}

export default Tag;
