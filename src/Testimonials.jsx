import Footer from "./Footer.jsx";
import FinalFooter from "./FinalFooter.jsx";
import HomeCarousel from "./HomeCarousel.jsx";

export default function Testimonials() {
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
            userSelect: "none",
            marginBottom: "0.75em",
          }}
        >
          Testimonials
        </h1>
        <HomeCarousel />
        <div
          style={{
            margin: "auto",
            marginTop: "2em",
          }}
          id="text-container"
        >
          <p>
            Libra Care is the proud owners of many reviews from customers and
            staff alike.
          </p>
          <p>
            You can read staff reviews on{" "}
            <a href="https://uk.indeed.com/cmp/Libra-Care-Ltd/reviews">
              Indeed Reviews
            </a>
          </p>
          <p>
            And customer reviews on{" "}
            <a href="https://www.bestcarecompare.com/homecare/info/detail.aspx?x1=6117919">
              BestCompare.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
      <FinalFooter />
    </>
  );
}
