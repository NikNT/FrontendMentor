import { useState } from "react";
import Map from "./Map";
import desktopHeader from "../assets/pattern-bg-desktop.png";
import arrow from "../assets/icon-arrow.svg";

const IP = () => {
  const [ip, setIP] = useState("");

  const [location, setLocation] = useState({
    ip: "",
    longitude: "",
    latitude: "",
    country: "",
    city: "",
    zip: "",
    country_flag: "",
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
          ip: data.ip,
          longitude: data.longitude,
          latitude: data.latitude,
          country: data.country_name,
          city: data.city,
          zip: data.zip,
          country_flag: data.location.country_flag,
        });
      })
      .catch((err) => console.error(err));

    setIP("");
  };

  return (
    <>
      <div className="h-screen w-screen relative">
        <header className="flex justify-center">
          <img src={desktopHeader} alt="Header Image" />
        </header>
        <section
          className="absolute top-10
         left-0  w-screen flex flex-col justify-center items-center"
        >
          <h1 className="text-3xl text-white font-semibold mb-4">
            IP Address Tracker
          </h1>
          <div className="flex w-96 h-12">
            <input
              placeholder="Search for any IP address or domain"
              type="text"
              value={ip}
              onChange={handleChange}
              className="w-80 rounded-tl-xl rounded-bl-xl text-sm text-center"
            />
            <div className="h-8">
              <img
                src={arrow}
                alt="Arrow"
                onClick={handleClick}
                className="h-12 p-2 bg-black h-12 rounded-br-xl rounded-tr-xl"
              />
            </div>
          </div>
          <section className="mt-4 bg-white w-11/12 h-24 rounded-md flex justify-evenly">
            <div className="my-auto border-r-2 border-blue-900">
              <p className="text-darkGray text-sm mb-2">IP ADDRESS</p>
              <p className="text-2xl">{location.ip}</p>
            </div>
            <div className="my-auto">
              <p className="text-sm mb-2">Location</p>
              <p className="text-2xl">{location.city}</p>
            </div>
            <div className="my-auto">
              <p className="text-sm mb-2">Zip</p>
              <p className="text-2xl">{location.zip}</p>
            </div>
            <div className="my-auto">
              <p className="text-sm mb-2">Country</p>
              <img
                src={location.country_flag}
                className="h-8"
                alt="Country Flag"
              />
              {/* <p className="text-2xl">{location.country_flag}</p> */}
            </div>
            <div></div>
          </section>
        </section>
        <main className="relative">
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
