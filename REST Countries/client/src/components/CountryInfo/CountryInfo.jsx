import React from "react";
import styles from "./CountryInfo.module.css";

const CountryInfo = ({ item }) => {
  return (
    <main className={styles.container}>
      <div className={styles.flag}>
        <img src={item.flags.svg} alt={`${item.name}'s Flag`} />
      </div>
      <div className={styles.info}>
        <div className={styles.info_country_name}>
          <h1>{item.name}</h1>
        </div>
        <div className={styles.info_stats}>
          <div className={styles.info_stats_left}>
            <p>
              Native Name: <span>{item.name}</span>
            </p>
            <p>
              Population: <span>{item.population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{item.region}</span>
            </p>
            <p>
              Sub Region: <span>{item.subregion}</span>
            </p>
            <p>
              Capital: <span>{item.capital}</span>
            </p>
          </div>
          <div className={styles.info_stats_right}>
            <p>
              Top Level Domain: <span>{item.topLevelDomain}</span>
            </p>
            <p>
              Currencies:{" "}
              <span>{item.currencies.map((item) => item.code)}</span>
            </p>
            <p>
              Languages:{" "}
              <span>
                {item.languages.map((language, index) => (
                  <span key={index}>
                    {language.name}
                    {index !== item.languages.length - 1 && ", "}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>
        <div className={styles.info_border_countries}>
          <p>Border Countries:</p>
          <div className={styles.info_border_countries_values}>
            {item.borders
              ? item.borders.map((country) => <span>{country}</span>)
              : "None"}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryInfo;
