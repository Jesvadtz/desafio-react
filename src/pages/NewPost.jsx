import React from "react";
import NavbarNewPost from "../components/NavbarNewPost/NavbarNewPost";
import InputNewPost from "../components/InputNewPost/InputNewPost";
import { Container, Row, Col } from "react-bootstrap";
// import HelperOne from "../components/Helpers/Helpers";
import FooterNewPost from "../components/FooterNewPost/FooterNewPost";

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
            <Col md={3}>{/* <HelperOne /> */}</Col>
          </Row>
        </Container>
      </main>
      <FooterNewPost />
    </>
  );
}

export default NewPost;
