import React from "react";
import "./NavbarMobile.scss";
import { Navbar, Container, Offcanvas } from "react-bootstrap";
import MenuMobile from "../MenuMobile/MenuMobile";
import CardLogin from "../CardLogin/CardLogin";

function NavbarMobile() {
  return (
    <Navbar expand={false}>
      <Container fluid>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="border-0 ps-0"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          className="NavbarMobile-width"
        >
          <Offcanvas.Header closeButton bg="white">
            <Offcanvas.Title id="offcanvasNavbarLabel" className="fw-bolder">
              DEV Community
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <CardLogin />
            <MenuMobile />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarMobile;
