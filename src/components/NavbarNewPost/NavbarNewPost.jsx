import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarNewPost() {
  return (
    <Container>
      <div className="header-post d-flex justify-content-end justify-content-md-between align-items-center sticky-top p-2">
        <div className="ps-3 d-none d-md-block">
          <Link to="/">
            <img src="/assets/svg/devto.svg" alt="Logo DevTo" width="40" />
          </Link>
          <span className="ps-2">Create Post</span>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <div className="edit-header">
            <button className="btn">Edit</button>
            <button className="btn">Preview</button>
          </div>
          <div id="icon-close" className="edit-close">
            <Link to="/">
              <button className="btn">
                <i className="bi bi-x-lg"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default NavbarNewPost;
