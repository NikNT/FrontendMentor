import React from "react";
import styles from "./Cards.module.css";
import data from "../../data.json";

const Cards = ({ query, filter }) => {
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) &&
      (filter === "" || filter === item.region)
  );
  return (
    <main className={styles.container}>
      <div className={styles.cards}>
        {filteredData.map((item) => (
          <div className={styles.card}>
            <div className={styles.flag}>
              <img src={item.flags.png} alt="Flag" />
            </div>
            <div className={styles.info}>
              <div className={styles.info_title}>
                <span>{item.name}</span>
              </div>
              <div className={styles.info_details}>
                <p>
                  <span>Population: </span>
                  {item.population}
                </p>
                <p>
                  <span>Region: </span>
                  {item.region}
                </p>
                <p>
                  <span>Capital: </span>
                  {item.capital}
                </p>
              </div>
            </div>
          </div>
        ))}
        {filteredData.length === 0 && <span>No such country!</span>}
      </div>
    </main>
  );
};

export default Cards;
