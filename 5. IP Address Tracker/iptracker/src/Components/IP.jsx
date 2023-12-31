import { useState } from "react";
import Map from "./Map";
import styles from "./IP.module.css";
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
      <div className={styles.container}>
        <header>
          <img src={desktopHeader} alt="Header Image" />
        </header>
        <section className={styles.content}>
          <h1>IP Address Tracker</h1>
          <div className={styles.input}>
            <input
              placeholder="Search for any IP address or domain"
              type="text"
              value={ip}
              onChange={handleChange}
            />
            <img src={arrow} alt="Arrow" onClick={handleClick} />
          </div>
          <section>
            <div>
              <p>IP ADDRESS</p>
              <p>{location.ip}</p>
            </div>
            <div>
              <p>LOCATION</p>
              <p>{location.city}</p>
            </div>
            <div>
              <p>ZIP</p>
              <p>{location.zip}</p>
            </div>
            <div>
              <p>COUNTRY</p>
              <img src={location.country_flag} alt="Country Flag" />
            </div>
          </section>
        </section>
        <main>
          <Map
            key={`${location.latitude}-${location.longitude}`}
            long={location.longitude}
            lat={location.latitude}
          />
        </main>
      </div>
    </>
  );
};

export default IP;
