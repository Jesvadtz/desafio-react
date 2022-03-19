import React from "react";
import { Button } from "bootstrap";

function Tag(props) {
  const { tag } = props;
  return <Button variant="light">#{tag}</Button>;
}

export default Tag;
