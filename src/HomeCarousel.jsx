import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./styles/HomeCarousel.css";

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <a
      href="https://www.bestcarecompare.com/homecare/info/detail.aspx?x1=6117919"
      target="_blank"
    >
      <Carousel
        activeIndex={index}
        className="carousel"
        id="review-carousel"
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& > :not(style)": {
                m: 1,
                width: {
                  xs: 180,
                  sm: 270,
                  md: 360,
                },
                height: {
                  xs: 200,
                  sm: 300,
                  md: 300,
                },
              },
            }}
          >
            <Paper
              sx={{ backgroundColor: "rgba(139, 139, 139, 0.14)" }}
              elevation={3}
            >
              <div className="review-wrapper">
                <h5 className="review">
                  Without the understanding, patience, and hard work of Libra
                  Care, both my sister and I would have struggled to cope.
                  <br />
                  <br />- Sue
                </h5>
              </div>
              <div>
                <p className="opening">"</p>
                <p className="closing">"</p>
              </div>
            </Paper>
          </Box>
        </Carousel.Item>
        <Carousel.Item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& > :not(style)": {
                m: 1,
                width: {
                  xs: 180,
                  sm: 270,
                  md: 360,
                },
                height: {
                  xs: 200,
                  sm: 300,
                  md: 300,
                },
              },
            }}
          >
            <Paper
              sx={{ backgroundColor: "rgba(139, 139, 139, 0.14)" }}
              elevation={3}
            >
              <div className="review-wrapper">
                <h5 className="review">
                  Under extreme circumstances, nothing was too much trouble; all
                  the staff who attended to her gave 100% care and compassion.
                  <br />
                  <br />- Sara
                </h5>
              </div>
              <div>
                <p className="opening">"</p>
                <p className="closing">"</p>
              </div>
            </Paper>
          </Box>
        </Carousel.Item>
        <Carousel.Item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& > :not(style)": {
                m: 1,
                width: {
                  xs: 180,
                  sm: 270,
                  md: 360,
                },
                height: {
                  xs: 200,
                  sm: 300,
                  md: 300,
                },
              },
            }}
          >
            <Paper
              sx={{ backgroundColor: "rgba(139, 139, 139, 0.14)" }}
              elevation={3}
            >
              <div className="review-wrapper">
                <h5 className="review">
                  All staff were professional, confidential, caring and
                  thorough. We noticed little things that were very important to
                  Nan, like having her nails cut and cleaned.
                  <br />
                  <br />- Anonymous
                </h5>
              </div>
              <div>
                <p className="opening">"</p>
                <p className="closing">"</p>
              </div>
            </Paper>
          </Box>
        </Carousel.Item>
        <Carousel.Item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& > :not(style)": {
                m: 1,
                width: {
                  xs: 180,
                  sm: 270,
                  md: 360,
                },
                height: {
                  xs: 200,
                  sm: 300,
                  md: 300,
                },
              },
            }}
          >
            <Paper
              sx={{ backgroundColor: "rgba(139, 139, 139, 0.14)" }}
              elevation={3}
            >
              <div className="review-wrapper">
                <h5 className="review">
                  Libra Care are supportive and attentive. Dad gets on with all
                  of the team that supports him, something very important to him
                  as he is very sociable.
                  <br />
                  <br />- John Bates
                </h5>
              </div>
              <div>
                <p className="opening">"</p>
                <p className="closing">"</p>
              </div>
            </Paper>
          </Box>
        </Carousel.Item>
      </Carousel>
    </a>
  );
}
