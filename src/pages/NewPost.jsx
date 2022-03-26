import React from "react";
import NavbarNewPost from "../components/NavbarNewPost/NavbarNewPost";
import InputNewPost from "../components/InputNewPost/InputNewPost";
import { Container, Row, Col } from "react-bootstrap";

function NewPost() {
  return (
    <>
      <NavbarNewPost />
      <main>
        <Container>
          <Row>
            <Col md={8}>
              <InputNewPost />
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default NewPost;
