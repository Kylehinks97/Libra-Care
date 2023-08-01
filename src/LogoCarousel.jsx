import Carousel from "react-bootstrap/Carousel";
import "./styles/LogoCarousel.css";

export default function LogoCarousel() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <div
          className="d-flex justify-content-around align-items-center"
          style={{ height: "100px" }}
        >
          <a
            href="https://www.cqc.org.uk/location/1-2564241746"
            target="_blank"
          >
            <img src="../src/assets/CQC.png" id="cqc"></img>
          </a>
          <a href="https://www.skillsforcare.org.uk/Home.aspx" target="_blank">
            <img
              src="../src/assets/skills for care.png"
              id="skills-for-care"
            ></img>
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-flex justify-content-around align-items-center"
          style={{ height: "100px" }}
        >
          <a href="https://www.savinglivesuk.com/" target="_blank">
            <img src="../src/assets/save lives.png" id="save-lives"></img>
          </a>
          <a
            href="https://uk.indeed.com/cmp/Libra-Care-Ltd/reviews"
            target="_blank"
          >
            <img src="../src/assets/Indeed_logo.svg.png" id="indeed"></img>
          </a>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
