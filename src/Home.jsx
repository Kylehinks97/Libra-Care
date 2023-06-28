import HomeCarousel from "./HomeCarousel";
import HomeImage from "./HomeImage";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import {} from "leaflet";
import "./styles/Map.css";
import "leaflet/dist/leaflet.css";
import FormComponent from "./FormComponent";
import Footer from "./Footer";

export default function Home() {
  const polygonCoords = [
    [52.615, -2.115],
    [52.7, -2.05],
    [52.7, -1.95],
    [52.6, -1.95],
  ];

  return (
    <>
      <HomeImage />
      <HomeCarousel />
      <div
        style={{
          backgroundColor: "#FF6B3D",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
          marginBottom: "20px"
        }}
      >
        <h3
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 0,
            marginBottom: 10,
            textShadow: "2px 2px 4px black",
            padding: "10px"
          }}
        >
          Where we deliver care...
        </h3>
        <MapContainer
          style={{
            height: "65%",
            width: "80%",
            borderRadius: "10px",
          }}
          zoom={10}
          center={[52.613175, -1.955385]}
          scrollWheelZoom={false}
        >
          <Polygon positions={polygonCoords} color="#9ACD32" />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
        <h4
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 0,
            marginBottom: 10,
            textShadow: "2px 2px 4px black",
            padding: "10px",
            fontSize: "16px",
            marginTop: "10px"
          }}
        >
          We deliver care in Walsall, Lichfield and Cannock. 
        </h4>
      </div>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 90%)",
          height: "500px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormComponent></FormComponent>
      </div>
      <Footer />
    </>
  );
}
