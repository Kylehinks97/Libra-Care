import HomeCarousel from "./HomeCarousel";
import HomeImage from "./HomeImage";
import { MapContainer, TileLayer } from "react-leaflet";
import {} from "leaflet";
import "./styles/Map.css";
import "leaflet/dist/leaflet.css";

export default function Home() {
  return (
    <>
      <HomeImage />
      <HomeCarousel />
      <div
        style={{
          backgroundColor: "#FF6B3D",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MapContainer
          style={{
            height: "65%",
            width: "80%",
          }}
          zoom={10}
          center={[52.613175, -1.955385]}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </>
  );
}
