import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleSignOut = () => {
    signOut();
  };

  // if (user && location.pathname !== "/Home") {
  //   navigate("/Home");
  // }

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width="160px" height="30"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-between"
          id="responsive-navbar-nav"
        >
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Experts">
              Experts
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Register">
              Register
            </Nav.Link>
            {user ? (
              <Nav.Link onClick={handleSignOut} as={Link} to="/Login">
                {user.displayName} Log Out
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/Login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
