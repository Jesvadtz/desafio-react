import React from "react";
import { Nav } from "react-bootstrap";

function NavLinkIconText(props) {
  const { src, text, href, alt } = props;
  return (
    <li>
      <Nav.Item className="d-flex align-items-center">
        <img src={src} alt={alt} className="me-2" />
        <Nav.Link href={href} className="text-secondary">
          {text}
        </Nav.Link>
      </Nav.Item>
    </li>
  );
}

export default NavLinkIconText;
