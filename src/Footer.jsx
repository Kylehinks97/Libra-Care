import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
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
        </Container>
      </Navbar>
    </>
  );
}
