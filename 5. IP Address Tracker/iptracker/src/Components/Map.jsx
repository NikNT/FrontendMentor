import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";
import PropTypes from "prop-types";

const Map = ({ lat, long }) => {
  const position = [lat, long];
  // const [position, setPosition] = useState(lat, long);
  // useEffect(() => {
  //   setPosition([lat, long]);
  // }, [lat, long]);
  return (
    <MapContainer center={position} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Found You!</Popup>
      </Marker>
    </MapContainer>
  );
};

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
};

export default Map;
