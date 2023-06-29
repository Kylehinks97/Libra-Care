import HomeCarousel from "./HomeCarousel";
import HomeImage from "./HomeImage";
import { MapContainer, TileLayer, Polygon, Marker } from "react-leaflet";
import {} from "leaflet";
import "./styles/Map.css";
import "leaflet/dist/leaflet.css";
import FormComponent from "./FormComponent";
import Footer from "./Footer";
import * as turf from "@turf/turf";

export default function Home() {
  // const polygonCoords = [
  //   [52.615, -2.115],
  //   [52.7, -2.05],
  //   [52.7, -1.95],
  //   [52.6, -1.95],
  // ];

  const transparentIcon = new L.Icon({
    iconUrl: "../assets/",
    iconSize: [0, 0], // Set the icon size to 0x0
  });

  const markerCoords = 
    [
      [52.608787, -1.993917],
      [52.603735, -1.942715],
      [52.602003, -1.943823],
      [52.612602, -1.994888],
      [52.613196, -1.942931],
      [52.648283, -1.989843],
      [52.586713, -1.986419],
      [52.619668, -1.981383],
      [52.615297, -1.932066],
      [52.620103, -1.985038],
      [52.616938, -1.935317],
      [52.60816, -1.978749],
      [52.61535, -1.939768],
      [52.613055, -1.998774],
      [52.58605, -1.880128],
      [52.593694, -1.961498],
      [52.60722, -1.970668],
      [52.64731, -1.983913],
      [52.579606, -1.916812],
      [52.623455, -1.994055],
      [52.612056, -1.999197],
      [52.609717, -1.945763],
      [52.594888, -1.945799],
      [52.593623, -1.853371],
      [52.602558, -1.9732],
      [52.611402, -1.987069],
      [52.604258, -1.942875],
      [52.614822, -1.932869],
      [52.603568, -1.94387],
      [52.605889, -1.943026],
      [52.604614, -1.942914],
      [52.603677, -1.944529],
      [52.587389, -1.87674],
      [52.601997, -1.941354],
      [52.614727, -1.939224],
      [52.595787, -1.941609],
      [52.6154, -1.8845],
      [52.674827,-2.029781]
  
  ];

  const bufferedPolygon = turf.buffer(turf.multiPoint(markerCoords), 3.4, {
    units: "kilometers",
  });

  const polygonCoords = bufferedPolygon.geometry.coordinates[0]
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
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 0,
            marginBottom: 10,
            textShadow: "2px 2px 4px black",
            padding: "10px",
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
          center={[52.605738, -1.957181]}
          scrollWheelZoom={false}
        >
          <Polygon positions={polygonCoords} color="#006400" />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markerCoords.map((coord, idx) => {
            console.log(coord);
            return <Marker position={coord} id={idx} key={idx} icon={transparentIcon}></Marker>;
          })}
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
            marginTop: "10px",
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
