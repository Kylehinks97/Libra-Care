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
        style={{
          padding: "8px",
          margin: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container style={{ margin: 0, width: "100%" }}>
          <Navbar.Brand href="/" style={{ marginRight: "5vw" }}>
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
              <NavDropdown title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item href="/values" className="dropdown-link">
                  Values
                </NavDropdown.Item>
                <NavDropdown.Item href="/our-team" className="dropdown-link">
                  Our Team
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/testimonials"
                  className="dropdown-link"
                >
                  Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/privacy-policy"
                  className="dropdown-link"
                >
                  Privacy Policy
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/data-protection"
                  className="dropdown-link"
                >
                  Data Protection
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/services" className="link">
                Services
              </Nav.Link>
              <Nav.Link href="/blog" className="link">
                Blog
              </Nav.Link>
              <Nav.Link href="/contact-us" className="link">
                Contact Us
              </Nav.Link>
              <Nav.Link href="/inquiry" className="link">
                Make an Inquiry
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
