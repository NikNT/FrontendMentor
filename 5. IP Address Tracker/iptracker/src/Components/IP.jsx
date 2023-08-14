import { useState } from "react";
import Map from "./Map";

const IP = () => {
  const [ip, setIP] = useState("");

  const [location, setLocation] = useState({
    longitude: "",
    latitude: "",
  });

  // useEffect(() => {
  //   fetch(
  //     "http://api.ipstack.com/134.201.250.155?access_key=b0ee4fc341423265e3c034b87a3fb18a"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setLocation({
  //         longitude: data.longitude,
  //         latitude: data.latitude,
  //       });
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  const handleChange = (e) => {
    setIP(e.target.value);
  };

  // const handleClick = () => {
  //   fetch(
  //     `http://api.ipstack.com/${ip}?access_key=b0ee4fc341423265e3c034b87a3fb18a`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setLocation({
  //         longitude: data.longitude,
  //         latitude: data.latitude,
  //       });
  //     })
  //     .catch((err) => console.error(err));

  //   setIP("");
  // };

  const handleClick = () => {
    setLocation({
      longitude: -79.40194702148438,
      latitude: 43.843650817871094,
    });

    setIP("");
  };

  return (
    <>
      <label htmlFor="IP">IP: </label>
      <input type="text" value={ip} onChange={handleChange} />
      <button onClick={handleClick}>Click</button>
      <p>Lat</p>
      {location.latitude}
      <p>Long</p>
      {location.longitude}
      <p>Map</p>
      <Map long={location.longitude} lat={location.latitude} />
    </>
  );
};

export default IP;
