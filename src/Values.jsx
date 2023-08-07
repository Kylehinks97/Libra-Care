import Footer from "./Footer.jsx";
import "./styles/DataProtection.css";
import FinalFooter from "./FinalFooter.jsx"

export default function Values() {
  return (
    <>
      <div
        style={{
          marginBottom: "5em",
        }}
      >
        <h1
          className="d-flex justify-content-center"
          style={{
            marginTop: "1em",
            userSelect: "none"
          }}
        >
          Our Values
        </h1>
        <div
          style={{
            margin: "auto",
            marginTop: "2em",
          }}
          id="text-container"
        >
          <ul>
            <li>
              To provide our customers with a high quality support service that
              focuses on maximising independence and aims to enable the person
              to be as autonomous as possible.
            </li>
            <br></br>
            <li>
              To offer a responsive and flexible way of working with
              individuals.
            </li>
            <br></br>
            <li>
              To provide a suitably trained work force who are able to deliver a
              quality service that focuses on empowerment and enablement.
            </li>
            <br></br>
            <li>
              Where possible to delay the deterioration of well-being associated
              with ageing, illness and disability.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
      <FinalFooter />
    </>
  );
}
