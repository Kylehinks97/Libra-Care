
import { MapContainer, TileLayer} from "react-leaflet"
import {} from "leaflet"
import "./styles/Map.css"
import "leaflet/dist/leaflet.css"

export default function Map() {
return (
    <MapContainer zoom={15} center={[52.6132, 1.9554]}>
<TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
/>
    </MapContainer>
)
}