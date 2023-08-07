import Footer from "./Footer";
import FormComponent from "./FormComponent";
import FinalFooter from "./FinalFooter.jsx";
import "./styles/ContactUs.css"

export default function ContactUs() {
  return (
    <>
      <h1
        className="d-flex justify-content-center"
        style={{
          marginTop: "1em",
          userSelect: "none",
        }}
      >
        Contact Us
      </h1>
      <div
        style={{
          marginTop: "2em",
          marginBottom: "2em"
        }}
        id="contact-us-wrapper"
      >
        <h4
          style={{
            marginTop: "1em",
          }}
        >
          Email
        </h4>
        <p>libracare@outlook.com</p>
        <h4>Telephone</h4>
        <p>01922 234 453</p>
        <h4>Mobile</h4>
        <p>07974 733 121</p>
        <h4>Address</h4>
        <p style={{ marginBottom: "0px" }}>Suite 58 Beacon Buildings</p>
        <p style={{ marginBottom: "0px" }}>Leighswood Road</p>
        <p style={{ marginBottom: "0px" }}>Aldridge</p>
        <p>WS9 8AA</p>
      </div>
        <p
          className="d-flex justify-content-center"
          style={{
            marginTop: "2em",
          }}
        >
          or alternatively...
        </p>
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "2em" }}
      >
        <FormComponent />
      </div>
      <Footer />
      <FinalFooter />
    </>
  );
}
