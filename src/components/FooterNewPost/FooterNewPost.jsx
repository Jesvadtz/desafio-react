import React from "react";
import { Container } from "react-bootstrap";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import "./FooterNewPost.scss";

function FooterNewPost(props) {
  return (
    <Container>
      <footer className="d-flex justify-content-start sticky-bottom footer-post ms-lg-2 pt-2 gap-2">
        <ButtonPrimary text="Publish" />
        <ButtonIcon text="Save" />
        <ButtonIcon src="/assets/svg/icon-savepost.svg" />
        <ButtonIcon text="Delete" />
      </footer>
    </Container>
  );
}

export default FooterNewPost;
