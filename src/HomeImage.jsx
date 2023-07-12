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
          position: "absolute",
          fontSize: "14px",
          margin: 0,
          zIndex: 2,
          justifyContent: "center",
          borderBottom: "3px solid #C8FFC8",
          color: "green",
          whiteSpace: "nowrap",
          width: "100vw",
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
            filter: "blur(1.2px) brightness(80%)",
            clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 90%)",
            borderTop: "1px solid coral",
          }}
          alt="Background Image"
        />
        <div
          style={{ position: "absolute", top: 23, width: "auto", padding: 0 }}
        >
          <Carousel controls={false} indicators={false} >
            <Carousel.Item style={{}}>
              <div
                style={{
                  padding: "0px 5px 0px",
                  color: "white",
                  fontWeight: "500",

                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  width: "100vw",
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
                  }}
                >
                  on&nbsp;
                </span>
                <img
                  src="../src/assets/Indeed_logo.svg.png"
                  style={{ width: "65px", marginBottom: "7px" }}
                  href="https://uk.indeed.com/cmp/Libra-Care-Ltd/reviews#:~:text=Excellent%20place%20to%20work!,are%20both%20supportive%20and%20helpful!"
                ></img>
              </div>
            </Carousel.Item>
            <Carousel.Item style={{}} >
              <div
                style={{
                  padding: "0px 5px 0px",
                  color: "white",
                  fontWeight: "500",
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  width: "100vw",
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
                &nbsp;Job Security and Advancement&nbsp;
                <span
                  style={{
                    fontSize: "15px",
                    letterSpacing: 0,
                    fontWeight: "200",
                  }}
                >
                  on&nbsp;
                </span>
                <img
                  src="../src/assets/Indeed_logo.svg.png"
                  style={{ width: "65px", marginBottom: "7px" }}
                ></img>
              </div>
            </Carousel.Item>
            <Carousel.Item style={{}}>
              <div
                style={{
                  padding: "0px 5px 0px",
                  color: "white",
                  fontWeight: "500",
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  width: "100vw",
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
                  }}
                >
                  on&nbsp;
                </span>
                <img
                  src="../src/assets/Indeed_logo.svg.png"
                  style={{ width: "65px", marginBottom: "7px" }}
                ></img>
              </div>
            </Carousel.Item>
            <Carousel.Item style={{}}>
              <div
                style={{
                  padding: "0px 5px 0px",
                  color: "white",
                  fontWeight: "500",
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  width: "100vw",
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
                  }}
                >
                  on&nbsp;
                </span>
                <img
                  src="../src/assets/Indeed_logo.svg.png"
                  style={{ width: "65px", marginBottom: "7px" }}
                ></img>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <h1
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px black",
            whiteSpace: "nowrap",
          }}
        >
          Libra Care
        </h1>
        <h2
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "15.5px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px black",
            whiteSpace: "nowrap",
          }}
        >
          "Balancing care with your independence"
        </h2>
        <button
          style={{
            position: "absolute",
            top: "70%",
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
          }}
          onClick={scrollToBottom}
        >
          Make an Inquiry
        </button>
      </div>
    </>
  );
}
