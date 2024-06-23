import { Container, Navbar, Nav } from "react-bootstrap";
import "./HomeNav.css";
import logo from "../imgs/logoFrontend.jpg";

function HomeNav() {
  return (
    <Navbar
      data-bs-theme="dark"
      className="bg-body-tertiary navbar-background top-0 w-100"
      expand="md"
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="brand-container">
          <img
            alt=""
            src={logo}
            width="100"
            height="75"
            className="d-inline-block align-top"
          />{" "}
           RP Breakfast Recipe Calculator
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="pe-3">
            <Nav.Link
              href="https://www.raypec.k12.mo.us/o/rphs"
              target="_blank"
              rel="noopener noreferrer"
            >
              About RP
            </Nav.Link>
            <Nav.Link
              href="https://www.raypec.org/o/rphs/page/high-school-xc-team"
              target="_blank"
              rel="noopener noreferrer"
            >
              About RP Cross Country
            </Nav.Link>
            <Nav.Link
              href="https://www.raymore.com/government/city-departments/parks-recreation/parks"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Rec Park
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
