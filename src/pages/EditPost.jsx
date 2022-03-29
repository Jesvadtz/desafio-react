import React, { useEffect, useState } from "react";
import NavbarNewPost from "../components/NavbarNewPost/NavbarNewPost";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FormPost from "../components/FormPost/FormPost";

function EditPost() {
  const params = useParams();

  const [dataPost, setDataPost] = useState();

  useEffect(() => {
    async function getPost() {
      const post = await fetch(`http://localhost:8080/posts/${params.idPost}`, {
        method: "GET",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjY1Nzc1ZjZjMTU0ZmQ4Nzk0NWRhYyIsImlhdCI6MTY0ODU3MzAzNSwiZXhwIjoxNjQ4NjA5MDM1fQ.4FNg-BDz8JPzjEgyYbFqhJPLo2IZnCtSqRA7yn0aiBQ",
        },
      }).then((res) => res.json());
      setDataPost(post.data.post);
    }
    getPost();
  }, [params.idPost]);

  return (
    <>
      <NavbarNewPost />
      <main>
        <Container>
          <Row>
            <Col md={8}>
              {dataPost && (
                <FormPost dataPost={dataPost} idPost={params.idPost} />
              )}
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default EditPost;
