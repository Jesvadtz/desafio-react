import React from "react";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import "./Navbar.scss";
import { Container, Nav } from "react-bootstrap";

function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white m-navbar">
      <Container>
        <div className="d-flex justify-content-md-between align-items-center">
          <NavbarMobile />
          <a id="homePost" className="navbar-brand" href="index.html">
            <img src="/assets/svg/devto.svg" alt="Logo DevTo" width="40" />
          </a>
          <div className="d-flex inputSearch">
            <input
              className="form-control d-none d-md-block"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="d-none d-md-block">
              Log in
            </Nav.Link>
          </Nav.Item>
          <ButtonSecondary text="Create Post" />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
