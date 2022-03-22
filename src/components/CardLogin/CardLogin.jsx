import React from "react";
import { Card, Nav } from "react-bootstrap";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import "./CardLogin.scss";

function CardLogin() {
  return (
    <Card style={{ width: "100%" }} className="border-0 bg-gray">
      <Card.Body>
        <Card.Title className="fw-bolder mb-2 purple-color">
          Dev Community
          <span className="text-black">
            {" "}
            is a community of 757,079 amazing developers
          </span>
        </Card.Title>
        <Card.Text className="text-secondary">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </Card.Text>
        <div className="d-flex flex-column">
          <ButtonSecondary text="Create account" />
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              className="text-center text-decoration-none text-black"
            >
              Log in
            </Nav.Link>
          </Nav.Item>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardLogin;
