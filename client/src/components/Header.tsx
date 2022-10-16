import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar className="navbar" bg="light" variant="light" expand="lg">
      <Navbar.Brand className="brand">
        <img
          className="logo"
          src="logo.png"
          width="400"
          height="70"
          alt="logo"
        />
      </Navbar.Brand>
      <Nav.Link href="/homepage">Homepage</Nav.Link>
      <Nav.Link href="/configure">Configure</Nav.Link>
    </Navbar>
  );
};

export default Header;
