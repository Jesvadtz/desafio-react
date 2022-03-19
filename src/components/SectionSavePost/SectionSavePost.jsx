import React from "react";
import { Button } from "react-bootstrap";

function SectionSavePost(props) {
  const { timeRead } = props;
  return (
    <div>
      <span>{timeRead}</span>
      <Button variant="primary">Save</Button>
    </div>
  );
}

export default SectionSavePost;
