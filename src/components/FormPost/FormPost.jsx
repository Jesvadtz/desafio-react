import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import SectionEditText from "../SectionEditText/SectionEditText";
import { Button } from "react-bootstrap";
import "./FormPost.scss";
import FooterNewPost from "../FooterNewPost/FooterNewPost";

const initialState = {
  title: "",
  tags: "",
  content: "",
  image: "",
};

function FormPost({ dataPost = initialState, idPost }) {
  const navigate = useNavigate();
  const [newPost, setNewPost] = React.useState(dataPost);

  function saveData(event) {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  }
  async function savePost(event) {
    event.preventDefault();
    const endpoint = idPost
      ? `http://localhost:8080/posts/${idPost}`
      : "http://localhost:8080/posts";

    const method = idPost ? "PATCH" : "POST";

    await fetch(endpoint, {
      method,
      body: JSON.stringify(newPost),
      headers: {
        Authorization: "",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    navigate("/", { replace: true });
  }

  async function handleDelete() {
    if (idPost) {
      await fetch(`http://localhost:8080/posts/${idPost}`, {
        method: "DELETE",
        headers: {
          Authorization: "",
        },
      });
    }
    navigate("/", { replace: true });
  }

  return (
    <>
      <div>
        <div className="input-post d-flex flex-column align-items-start mt-2 gap-3">
          <Form className="w-100" onSubmit={savePost}>
            <div className="containerPost">
              <Button variant="outline-secondary" className="ms-3 ms-md-5 mt-4">
                Add a cover image
              </Button>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="New post title here..."
                  className="mt-3 new-post ps-3 ps-md-5"
                  name="title"
                  value={newPost.title}
                  onChange={saveData}
                />
              </Form.Group>
              <SectionEditText />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  as="textarea"
                  type="text"
                  className="form-control border-0 ps-3 ps-md-5 pt-4"
                  rows="100"
                  placeholder="Write your post content here..."
                  name="content"
                  onChange={saveData}
                  value={newPost.content}
                />
              </Form.Group>
            </div>
            <FooterNewPost
              handleDelete={handleDelete}
              primaryButtonText={idPost ? "Update" : "Publish"}
            />
          </Form>
        </div>
      </div>
    </>
  );
}

export default FormPost;
