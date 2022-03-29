import React from "react";
import Tag from "../Tags/Tags";

function HashtagList(props) {
    const { hashtags } = props;
    return (
        <ul>
            {
                hashtags.map((item) => {
                    return (
                     <li>
                        <Tag tag={item}/>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default HashtagList;