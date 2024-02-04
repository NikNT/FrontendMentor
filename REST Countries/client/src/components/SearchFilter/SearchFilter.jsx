import React, { useRef, useState, useEffect } from "react";
import styles from "./SearchFilter.module.css";
import search from "../../asset/search.png";
import down from "../../asset/down.png";

const SearchFilter = ({ query, handleSearch, handleFilter }) => {
  const [options, setOptions] = useState(false);
  const filterListRef = useRef(null);
  const handleFilterChange = (country) => {
    handleFilter(country);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        filterListRef.current &&
        !filterListRef.current.contains(event.target)
      ) {
        setOptions(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.search}>
        <div className={styles.icon}>
          <img src={search} alt="Search" />
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.dropdown} ref={filterListRef}>
        <div
          className={styles.dropdownLabel}
          onClick={() => setOptions(!options)}
        >
          <span>Filter by Region</span>
          <img src={down} alt="down arrow" />
        </div>
        {options && (
          <div className={styles.dropdownOptions}>
            <span onClick={() => handleFilterChange("Africa")}>Africa</span>
            <span onClick={() => handleFilterChange("Americas")}>America</span>
            <span onClick={() => handleFilterChange("Asia")}>Asia</span>
            <span onClick={() => handleFilterChange("Europe")}>Europe</span>
            <span onClick={() => handleFilterChange("Oceania")}>Oceania</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchFilter;
