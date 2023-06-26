import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <img
        style={{
          width: "100%",
          filter: "blur(1px) brightness(80%)",
        }}
        src="../public/images/old man.jpg"
        alt="Your Image"
      />
      <Container
        sx={{
          fontSize: {
            xs: "15px",
            sm: "34px",
            md: "46px",
            fontFamily: "'Raleway'",
            letterSpacing: ".11rem",
            textShadow: "0 0 5px black, 0 0 8px black, 0 0 10px black",
          },
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -120%)",
            color: "white",
          }}
        >
          Libra Care
        </h1>
      </Container>
      <Container
        sx={{
          fontSize: {
            xs: "9px",
            sm: "22x",
            md: "29px",
            fontFamily: "'Raleway'",
            letterSpacing: "0.1rem",
            textShadow: "0 0 5px black, 0 0 8px black, 0 0 10px black",
          },
        }}
      >
        <h2
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            fontWeight: "400",
            transform: "translate(-50%, -150%)",
            whiteSpace: "nowrap",
            color: "white",
            textShadow: "0 0 5px black, 0 0 8px black, 0 0 10px black",
          }}
        >
          Balancing care with your independence
        </h2>
      </Container>
      <Container
        sx={{
          fontFamily: "'Raleway'",
          letterSpacing: "0.1rem",
          textShadow: "0 0 5px black, 0 0 8px black, 0 0 10px black",
        }}
      >
        <Button
             sx={{
                fontSize: { xs: "18px" },
                textTransform: "none",
                position: "absolute",
                top: "65%",
                left: "50%",
                fontWeight: "400",
                transform: "translateX(-50%)", 
                whiteSpace: "nowrap",
                color: "white",
                textShadow: "0 0 5px black, 0 0 8px black, 0 0 10px black",
                padding: {sm: "2%", md: "3%"},
                borderRadius: "10px",
                background: "coral",
                border: "none",
                boxShadow: "0 0 1px black, 0 0 20px black, 0 0 20px black",
              }}
        >
          Inquire Now
        </Button>
      </Container>
    </div>
  );
}
