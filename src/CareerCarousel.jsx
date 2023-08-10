import Carousel from "react-bootstrap/Carousel";
import { BiSolidStar } from "react-icons/bi";

export default function CareerCarousel() {
  return (
    <>
      <a
        target="_blank"
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
                src="./images/Indeed_logo.svg.png"
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
                src="/images/Indeed_logo.svg.png"
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
                src="/images/Indeed_logo.svg.png"
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
                src="/images/Indeed_logo.svg.png"
                style={{ width: "65px" }}
                alt="Indeed logo"
                id="indeed-logo"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </a>
    </>
  );
}
