import React from "react";
import Tag from "../Tags/Tags";

function SectionTags(props) {
  const { tag } = props;
  return (
    <section>
      {/* {tags.map((tag) => {
        const { tag } = tags; */}
      <Tag tag={tag} variant="light" />
    </section>
  );
}

export default SectionTags;
