import React from "react";
import Tag from "../Tags/Tags";

function SectionTags(props) {
  const { tags } = props;

  return (
    <section>
      {/* {tags.map((tag) => {
        const { tag } = tags; */}
      <Tag tag={tags} />
    </section>
  );
}

export default SectionTags;
