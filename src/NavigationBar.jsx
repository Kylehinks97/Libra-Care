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
        style={{ padding: "8px", margin: 0, display: "flex", justifyContent: "center"}}
      >
        <Container style={{margin: 0, width: "100%"}}>
          <Navbar.Brand href="#home" style={{marginRight: "5vw"}}>
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
              <Nav.Link href="/" className="link">
                Home
              </Nav.Link>
              <Nav.Link href="/services" className="link">
                Services
              </Nav.Link>
              <NavDropdown title="About us" id="basic-nav-dropdown">
                <NavDropdown.Item href="/values" className="dropdown-link">
                  Values
                </NavDropdown.Item>
                <NavDropdown.Item href="/our-team" className="dropdown-link">
                  Our Team
                </NavDropdown.Item>
                <NavDropdown.Item href="/testimonials" className="dropdown-link">
                  Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item href="/data-protection" className="dropdown-link">
                  Data Protection
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className="link">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link
                href="/inquiry"
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
                id="inquiry-button-nav"
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
