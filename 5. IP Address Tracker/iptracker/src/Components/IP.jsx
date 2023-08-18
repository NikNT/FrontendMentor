import { useState } from "react";
import Map from "./Map";
import desktopHeader from "../assets/pattern-bg-desktop.png";
import arrow from "../assets/icon-arrow.svg";

const IP = () => {
  const [ip, setIP] = useState("");

  const [location, setLocation] = useState({
    longitude: "",
    latitude: "",
    country: "",
    city: "",
  });

  const handleChange = (e) => {
    setIP(e.target.value);
  };

  const handleClick = () => {
    fetch(
      `http://api.ipstack.com/${ip}?access_key=b0ee4fc341423265e3c034b87a3fb18a`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLocation({
          longitude: data.longitude,
          latitude: data.latitude,
          country: data.country_name,
          city: data.city,
        });
      })
      .catch((err) => console.error(err));

    setIP("");
  };

  return (
    <>
      <div className="h-screen w-screen">
        <header className="flex justify-center">
          <img src={desktopHeader} alt="Header Image" />
        </header>
        <div className="absolute ">
          <h1>IP Address Tracker</h1>
          <div>
            <input type="text" />
            <img src={arrow} alt="Arrow" />
          </div>
          <div>IP Info</div>
        </div>
        <main>
          <Map
            key={`${location.latitude}-${location.longitude}`}
            long={location.longitude}
            lat={location.latitude}
          />
        </main>
      </div>
      {/* <label htmlFor="IP">IP: </label>
      <input type="text" value={ip} onChange={handleChange} />
      <button onClick={handleClick}>Click</button>
      <p>Lat</p>
      {location.latitude}
      <p>Long</p>
      {location.longitude}
      <b>Country</b>
      {location.country}
      <b>City</b>
      <p>{location.city}</p>
      <p>Map</p> */}
      {/* <Map
        key={`${location.latitude}-${location.longitude}`}
        long={location.longitude}
        lat={location.latitude}
      /> */}
    </>
  );
};

export default IP;
