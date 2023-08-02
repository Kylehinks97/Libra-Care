import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles/NavigationBar.css";

export default function NavigationBar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary2"
        style={{ padding: "10px", margin: 0}}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../src/assets/Scales.png"
              className="logo"
              width="30"
            />
            &nbsp;&nbsp; Libra Care
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="link">
                Home
              </Nav.Link>
              <NavDropdown title="About us" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="dropdown-link">
                  Values
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="dropdown-link">
                  Our Team
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdown-link">
                  Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdown-link">
                  Data Protection
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className="link">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link
                href="#link"
                style={{
                  backgroundColor: "coral",
                  borderRadius: "0.5em",
                  color: "white",
                  padding: "0.5em 1em",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px black",
                  textDecoration: "none",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)",
                  transition: "background-color 0.3s, box-shadow 0.3s",
                  justifyContent: "center",
                  display: "flex"
                }}
              >
                Make an Inquiry
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
