import React from "react";
import { Link } from "react-router-dom";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import MobileNavSignup from "../MobileNavSignup/MobileNavSignup";
import { Container, Nav } from "react-bootstrap";
import "./NavSignup.scss";

function NavbarSignup() {
  return (
    <Nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white m-navbar">
      <Container>
        <div className="d-flex justify-content-md-between align-items-center">
          <MobileNavSignup />
          <Link to="/">
            <img
              src="/assets/svg/devto.svg"
              alt="Logo DevTo"
              width="40"
              className="me-2"
            />
          </Link>
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
          <Link to="/newpost">
            <ButtonSecondary text="Create Post" />
          </Link>
          <Link to="/create-account">
            <ButtonSecondary text="SignUp" />
          </Link>
        </div>
      </Container>
    </Nav>
  );
}

export default NavbarSignup;
