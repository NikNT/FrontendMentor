import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "./Map.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import icon from "../assets/icon-location.svg";

const Map = ({ lat, long }) => {
  const [position, setPosition] = useState([lat, long]);
  useEffect(() => {
    setPosition([lat, long]);
  }, [lat, long]);

  const customIcon = L.icon({
    iconUrl: icon,
    iconSize: [29, 40],
    iconAnchor: [16, 32],
  });

  return (
    <MapContainer center={position} zoom={lat === "" ? 2 : 20}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lat && (
        <Marker position={position} icon={customIcon}>
          <Popup>Found You!</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  key: PropTypes.any.isRequired,
};

export default Map;
