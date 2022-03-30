import React, { useState } from "react";

function CreateComment() {

    const [newComment, setNewComment] = React.useState("");


    const update = (e) => {
        setNewComment(
            e.target.value
        );
        console.log(newComment)
    }

    const objectComments = localStorage.getItem('comments') ? JSON.parse( localStorage.getItem('comments')) : [] 



    const createComment = () => {
       console.log(objectComments)

         const newCommentObj = {
            text: newComment,
        }
        const myJSON = JSON.stringify([ ...objectComments, newCommentObj ])
        localStorage.setItem('comments', myJSON);
        setNewComment(
            ""
        );
    }



    return (
        <div style={{ margin: "10px", marginBottom: "30px" }}>
            <div class="d-flex align-items-start gap-3">
                <img src="/assets/user-01.webp" alt="User" width="32" height="32" class="rounded-circle" />
                <textarea onChange={update} class="form-control" placeholder="Add to discussion" rows="2" value={newComment}></textarea>
            </div>


            <div class=" d-flex align-items-start gap-3">
                <button onClick={createComment} style={{ marginLeft: "7%", border: "none", width: "84px", height: "40px", color: "#f6f7f8", borderRadius: "6px", backgroundColor: "rgb(124, 124, 252)" }}>Submit</button>
                <button style={{ border: "none", width: "84px", height: "40px", borderRadius: "6px", color: "darkgray", backgroundColor: "rgb(#e8e8e8)" }}>Preview</button>

            </div>
        </div>
    )
}

export default CreateComment; 