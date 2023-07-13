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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
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
            style={{
              filter: "blur(1px) brightness(80%)",
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 90%)",
              borderTop: "1px solid coral",
              zIndex: 1,
            }}
            alt="Background Image"
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
            <a href="https://uk.indeed.com/cmp/Libra-Care-Ltd/reviews">
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
                      textShadow: "2px 2px 4px black",
                    }}
                  >
                    4.3&nbsp;
                    <BiSolidStar
                      style={{
                        marginBottom: "5px",
                        fontSize: "19px",
                        color: "#9d2b6b",
                      }}
                    />
                    &nbsp;Pay/Benefits&nbsp;
                    <span
                      style={{
                        fontSize: "15px",
                        letterSpacing: 0,
                        fontWeight: "200",
                        textShadow: "2px 2px 4px black",
                      }}
                    >
                      on&nbsp;
                    </span>
                    <img
                      src="../src/assets/Indeed_logo.svg.png"
                      style={{ width: "65px", marginBottom: "7px" }}
                      href="https://uk.indeed.com/cmp/Libra-Care-Ltd/reviews#:~:text=Excellent%20place%20to%20work!,are%20both%20supportive%20and%20helpful!"
                      alt="Indeed logo"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      fontWeight: "500",
                      width: "100%",
                      height: "26.91px",
                      textShadow: "2px 2px 4px black",
                    }}
                    id="security-and-advancement"
                  >
                    4.3&nbsp;
                    <BiSolidStar
                      style={{
                        marginBottom: "2px",
                        fontSize: "19px",
                        color: "#9d2b6b",
                        textShadow: "2px 2px 4px black",
                      }}
                    />
                    &nbsp;Job Security and Advancement&nbsp;
                    <span
                      style={{
                        fontSize: "15px",
                        letterSpacing: 0,
                        fontWeight: "200",
                        textShadow: "2px 2px 4px black",
                      }}
                      id="on-security-and-advancement"
                    >
                      on&nbsp;
                    </span>
                    <img
                      src="../src/assets/Indeed_logo.svg.png"
                      style={{ width: "65px", marginBottom: "5px" }}
                      id="indeed-security-and-advancement"
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
                      textShadow: "2px 2px 4px black",
                    }}
                  >
                    4&nbsp;
                    <BiSolidStar
                      style={{
                        marginBottom: "5px",
                        fontSize: "19px",
                        color: "#9d2b6b",
                      }}
                    />
                    &nbsp;Management&nbsp;
                    <span
                      style={{
                        fontSize: "15px",
                        letterSpacing: 0,
                        fontWeight: "200",
                        textShadow: "2px 2px 4px black",
                      }}
                    >
                      on&nbsp;
                    </span>
                    <img
                      src="../src/assets/Indeed_logo.svg.png"
                      style={{ width: "65px", marginBottom: "7px" }}
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
                      textShadow: "2px 2px 4px black",
                    }}
                  >
                    4&nbsp;
                    <BiSolidStar
                      style={{
                        marginBottom: "5px",
                        fontSize: "19px",
                        color: "#9d2b6b",
                      }}
                    />
                    &nbsp;Culture&nbsp;
                    <span
                      style={{
                        fontSize: "15px",
                        letterSpacing: 0,
                        fontWeight: "200",
                        textShadow: "2px 2px 4px black",
                      }}
                    >
                      on&nbsp;
                    </span>
                    <img
                      src="../src/assets/Indeed_logo.svg.png"
                      style={{ width: "65px", marginBottom: "7px" }}
                      alt="Indeed logo"
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
                  // fontSize: "40px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px black",
                  whiteSpace: "nowrap",
                  zIndex: 2,
                }}
                id="title"
              >
                Libra Care
              </h1>
            </div>
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
            textShadow: "2px 2px 4px black",
            whiteSpace: "nowrap",
            zIndex: 2,
          }}
          id="slogan"
        >
          "Balancing care with your independence"
        </h2>
        <button
          style={{
            position: "absolute",
            top: "71%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px black",
            whiteSpace: "nowrap",
            padding: "1.8%",
            borderRadius: "10px",
            border: "none",
            background: "#FF6B3D",
            boxShadow: "1px 1px 6px black",
            zIndex: 2,
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
