import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import SectionEditText from "../SectionEditText/SectionEditText";
import { Button } from "react-bootstrap";
import "./InputNewPost.scss";
import FooterNewPost from "../FooterNewPost/FooterNewPost";

function InputNewPost(props) {
  const navigate = useNavigate();
  const [newPost, setNewPost] = React.useState({
    title: "",
    tags: "",
    content: "",
    image: "",
  });

  function saveData(event) {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  }
  async function createPost(event) {
    event.preventDefault();
    const res = await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        Authorization: "",
      },
    }).then((res) => res.json());
    navigate("/", { replace: true });
    setNewPost(res);
  }

  return (
    <>
      <div className="containerPost">
        <div className="input-post d-flex flex-column align-items-start mt-4 gap-3">
          <Button variant="outline-secondary" className="ms-3 ms-md-5">
            Add a cover image
          </Button>
          <Form className="w-100" onSubmit={createPost}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="New post title here..."
                className="mt-3 new-post ps-3 ps-md-5"
                name="title"
                onChange={saveData}
              />
            </Form.Group>
            <SectionEditText />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control
                type="text"
                className="form-control border-0 ps-3 ps-md-5 pt-4"
                rows="100"
                placeholder="Write your post content here..."
                name="content"
                onChange={saveData}
              />
            </Form.Group>
            <FooterNewPost />
          </Form>
        </div>
      </div>
    </>
  );
}

export default InputNewPost;
