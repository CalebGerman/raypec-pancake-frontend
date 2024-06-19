import { Container, Navbar, Nav } from "react-bootstrap";
import "./HomeNav.css";
import logo from "../imgs/logoFrontend.jpg";

function HomeNav() {
  return (
    <Navbar data-bs-theme="dark" className="bg-body-tertiary navbar-background top-0 w-100" expand="md">
      <Container fluid>
        <Navbar.Brand href="#home" className="brand-container">
          <img
            alt=""
            src={logo}
            width="100"
            height="75"
            className="d-inline-block align-top"
          />{" "}
          Raypec Breakfast
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="pe-3">
            <Nav.Link href="#">About RP</Nav.Link>
            <Nav.Link href="#">About RP Cross Country</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
