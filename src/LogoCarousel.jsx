import Carousel from "react-bootstrap/Carousel";

export default function LogoCarousel() {
    return (
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div className="carousel-item active">1</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item active">2</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item active">3</div>
        </Carousel.Item>
      </Carousel>
    );
  }
  
