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
    <Carousel
      activeIndex={index}
      className="carousel"
      onSelect={handleSelect}
      style={{
        background: "white",
        height: "250px",
        
      }}
    >
      <Carousel.Item>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& > :not(style)": {
              m: 1,
              width: 178,
              height: 188,
            },
          }}
        >
          <Paper
            sx={{ backgroundColor: "rgba(139, 139, 139, 0.14)" }}
            elevation={3}
          >
            <div style={{maxWidth: '50%'}}>
            <h5>Without the understanding, patience, and hard work of Libra Care, both my sister and I would have struggled to cope.<br/><br/>- Sue</h5>
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
              width: 178,
              height: 188,
            },
          }}
        >
           <Paper
            sx={{ backgroundColor: "rgba(139, 139, 139, 0.14)" }}
            elevation={3}
          >
            <div style={{maxWidth: '50%'}}>
            <h5>Under extreme circumstances, nothing was too much trouble; all the staff who attended to her gave 100% care and compassion.<br/><br/>- Sara</h5>
            </div>
            <div>
              <p className="opening">"</p>
              <p className="closing">"</p>
            </div>
          </Paper>
        </Box>
      </Carousel.Item>
    </Carousel>
  );
}
