import FormComponent from "./FormComponent";
import Footer from "./Footer.jsx";
import FinalFooter from "./FinalFooter.jsx";

export default function Inquiry() {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{
          marginTop: "1.5em",
          marginBottom: "2em",
        }}
      >
        <FormComponent />;
      </div>
      <Footer />
      <FinalFooter />
    </>
  );
}
