import Carousel from "react-bootstrap/Carousel";
import "./styles/HomeImage.css";
import { BiSolidStar } from "react-icons/bi";

export default function HomeImage() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h6
        style={{
          background: "#C8FFC8",
          padding: "1px",
          display: "flex",
          justifyContent: "center",
          fontSize: "14px",
          margin: 0,
          borderBottom: "3px solid #C8FFC8",
          color: "green",
          whiteSpace: "nowrap",
          width: "100%",
          cursor: "pointer",
        }}
        id="hiring-banner"
        onClick={scrollToBottom}
      >
        🚀&nbsp;<span>We are currently hiring carers! Apply Now</span>&nbsp;💼
      </h6>
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src="/src/assets/old man.jpg"
          width="100%"
          alt="Background Image"
          id="background-img"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.16)",
          }}
        >
          <a
            href="https://uk.indeed.com/cmp/Libra-Care-Ltd/reviews"
            target="_blank" rel="noreferrer"
          >
            <Carousel
              controls={false}
              indicators={false}
              style={{ cursor: "pointer" }}
            >
              <Carousel.Item>
                <div
                  style={{
                    padding: "0px 5px 0px",
                    color: "white",
                    fontWeight: "500",
                    width: "100%",
                  }}
                  id="carousel-text"
                >
                  4.3&nbsp;
                  <BiSolidStar
                    style={{
                      marginBottom: "5px",
                      fontSize: "19px",
                      color: "#9d2b6b",
                    }}
                    id="star"
                  />
                  &nbsp;Pay/Benefits&nbsp;on&nbsp;
                  <img
                    src="../src/assets/Indeed_logo.svg.png"
                    style={{ width: "65px" }}
                    href="https://uk.indeed.com/cmp/Libra-Care-Ltd/reviews#:~:text=Excellent%20place%20to%20work!,are%20both%20supportive%20and%20helpful!"
                    alt="Indeed logo"
                    id="indeed-logo"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    padding: "0px 5px 0px",
                    color: "white",
                    fontWeight: "500",
                    width: "100%",
                  }}
                  id="carousel-text"
                >
                  4.3&nbsp;
                  <BiSolidStar
                    style={{
                      marginBottom: "5px",
                      fontSize: "19px",
                      color: "#9d2b6b",
                    }}
                    id="star"
                  />
                  &nbsp;Job Security and Advancement&nbsp;on&nbsp;
                  <img
                    src="../src/assets/Indeed_logo.svg.png"
                    style={{ width: "65px" }}
                    id="indeed-logo"
                    alt="Indeed logo"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    padding: "0px 5px 0px",
                    color: "white",
                    fontWeight: "500",
                    width: "100%",
                  }}
                  id="carousel-text"
                >
                  4&nbsp;
                  <BiSolidStar
                    style={{
                      marginBottom: "5px",
                      fontSize: "19px",
                      color: "#9d2b6b",
                    }}
                    id="star"
                  />
                  &nbsp;Management&nbsp;on&nbsp;
                  <img
                    src="../src/assets/Indeed_logo.svg.png"
                    style={{ width: "65px" }}
                    alt="Indeed logo"
                    id="indeed-logo"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    padding: "0px 5px 0px",
                    color: "white",
                    fontWeight: "500",
                    width: "100%",
                  }}
                  id="carousel-text"
                >
                  4&nbsp;
                  <BiSolidStar
                    style={{
                      marginBottom: "5px",
                      fontSize: "19px",
                      color: "#9d2b6b",
                    }}
                    id="star"
                  />
                  &nbsp;Culture&nbsp;on&nbsp;
                  <img
                    src="../src/assets/Indeed_logo.svg.png"
                    style={{ width: "65px" }}
                    alt="Indeed logo"
                    id="indeed-logo"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </a>
          <div
            style={{
              position: "absolute",
              top: "430%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            id="title"
          >
            <h1
              style={{
                color: "white",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                zIndex: 2,
              }}
              id="title"
            >
              Libra Care
            </h1>
          </div>
        </div>
        <h2
          style={{
            position: "absolute",
            top: "57%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "19.5px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            zIndex: 2,
          }}
          id="slogan"
        >
          &quot;Balancing care with your independence&quot;
        </h2>
        <button
          style={{
            position: "relative",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px black",
            whiteSpace: "nowrap",
            padding: "1.8%",
            borderRadius: "0.5em",
            border: "none",
            background: "#FF6B3D",
            boxShadow: "1px 1px 6px black",
            zIndex: 2,
            width: "fit-content",
          }}
          onClick={scrollToBottom}
          id="inquiry-button"
        >
          Make an Inquiry
        </button>
      </div>
    </>
  );
}
