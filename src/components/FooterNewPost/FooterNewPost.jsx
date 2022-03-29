import React from "react";
import { Container } from "react-bootstrap";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import "./FooterNewPost.scss";

function FooterNewPost({ handleDelete, primaryButtonText = "Publish" }) {
  return (
    <Container className="ps-0">
      <footer className="d-flex justify-content-start sticky-bottom footer-post py-2 gap-2">
        <ButtonPrimary text={primaryButtonText} />
        <ButtonIcon src="/assets/svg/icon-savepost.svg" />
        <ButtonIcon text="Delete" onClick={handleDelete} />
      </footer>
    </Container>
  );
}

export default FooterNewPost;
