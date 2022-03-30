import React from "react";
import CreateComment from "../CommentCreate/CommentCreate";
import CommentPost from "../CommentPost/CommentPost";

function Comments() {
    const arrayComments = localStorage.getItem('comments')
    const parseArray = JSON.parse(arrayComments)
    console.log(parseArray)
    return (
        <>
            <CreateComment />
            {parseArray.map((comment) => {
                console.log(comment)
            return(
          <CommentPost text={comment.text}/>
            ) 
            })}
        </>
    )
}

export default Comments;