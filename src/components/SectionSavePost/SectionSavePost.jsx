import React from "react";
import { Button } from "react-bootstrap";
import "./SectionSavePost.scss";

function SectionSavePost() {
  return (
    <div className="d-flex gap-2 align-items-center">
      <span className="timeRead">2 min read</span>
      <Button variant="light">Save</Button>
    </div>
  );
}

export default SectionSavePost;
