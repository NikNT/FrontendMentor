import React from "react";
import styles from "./Cards.module.css";
import data from "../../data.json";
import { Link } from "react-router-dom";
import usePagination from "../../hooks/usePagination";

const Cards = ({ query, filter }) => {
  const itemsPerPage = 8;
  const { alphabet, handleAlphabetClick, getPaginatedData } = usePagination(
    data,
    itemsPerPage
  );

  const currentItems = getPaginatedData();
  const filteredData = currentItems.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) &&
      (filter === "" || filter === item.region)
  );

  return (
    <main className={styles.container}>
      <div className={styles.cards}>
        {filteredData.map((item) => (
          <Link
            to={{
              pathname: "/country",
              search: `?item=${JSON.stringify(item)}`,
            }}
          >
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
                    {item.population.toLocaleString()}
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
          </Link>
        ))}
        {filteredData.length === 0 && (
          <p style={{ color: "var(--text)" }}>No such country!</p>
        )}
      </div>
      <div className={styles.pagination}>
        {alphabet.split("").map((letter, index) => (
          <button key={index} onClick={() => handleAlphabetClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Cards;
