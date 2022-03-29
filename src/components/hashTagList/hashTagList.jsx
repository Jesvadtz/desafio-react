import React from "react";
import Tag from "../Tags/Tags";

function HashtagList(props) {
  const { hashtags, key } = props;
  return (
    <ul>
      {hashtags.map((item, index) => {
        return (
          <li key={index}>
            <Tag tag={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default HashtagList;
