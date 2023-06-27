


export default function HomeImage() {
    return (
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src="/src/assets/old man.jpg"
          width="100%"
          style={{
            filter: "blur(1.2px) brightness(80%)",
            clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 90%)",
            borderTop: "1px solid coral"
          }}
          alt="Background Image"
        />
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
            whiteSpace: "nowrap"
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
            whiteSpace: "nowrap"
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
            boxShadow: "1px 1px 6px black"
          }}
        >
          Make an Inquiry
        </button>
      </div>
    );
  }
  