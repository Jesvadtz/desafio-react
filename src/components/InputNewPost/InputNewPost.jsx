import React from "react";
import Form from "react-bootstrap/Form";
import SectionEditText from "../SectionEditText/SectionEditText";
import { Button } from "react-bootstrap";
import "./InputNewPost.scss";

function InputNewPost() {
  const [newPost, setNewPost] = React.useState({
    title: "",
    tags: [],
    content: "",
    image: "",
  });

  return (
    <div className="containerPost">
      <div className="input-post d-flex flex-column align-items-start mt-4 gap-3 ps-3 ps-md-5">
        <Button variant="outline-secondary">Add a cover image</Button>
        <Form className="w-100">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="New post title here..."
              className="mt-3 new-post p-0"
              name="titlePost"
            />
          </Form.Group>
        </Form>
        <div className="d-flex w-100 h-auto">
          {/* <input
            id="hashtag"
            type="text"
            placeholder="Add up to 4 tags..."
            className="w-100 mb-4"
            style="outline: none;"
          /> */}
        </div>
      </div>
      <SectionEditText />
      <div>
        <textarea
          className="form-control border-0 ps-3 ps-md-5 pt-4"
          id="formText"
          rows="100"
          placeholder="Write your post content here..."
        ></textarea>
      </div>
    </div>
  );
}

export default InputNewPost;
