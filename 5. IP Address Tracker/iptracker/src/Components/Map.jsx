import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";

const Map = ({ long, lat }) => {
  const position = [lat, long];
  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[43.77182317159686, -79.1739087472265]}>
        <Popup>Found You!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
