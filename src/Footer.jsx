import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#FF6B3D", margin: 0, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(300px, 1fr)",
            gap: "10px",
            padding: "5%",
            color: "white",
            textShadow: "2px 2px 4px black",
          }}
        >
          <h3 style={{ margin: 0 }}>
            241 Lichfield Road
            <br />
            Shelfield
            <br />
            Walsall
            <br />
            WS4 1PJ
          </h3>
          <h3 style={{ margin: 0 }}>07800646398</h3>
          <h3 style={{ margin: 0 }}>libracare@gmail.com</h3>
        </div>
      </div>
    </>
  );
}
