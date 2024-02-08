import React, { useRef, useState, useEffect } from "react";
import styles from "./SearchFilter.module.css";
import search from "../../asset/search.png";
import down from "../../asset/down.png";
import downLight from "../../asset/down-light.png";
import searchLight from "../../asset/search-light.png";

const SearchFilter = ({ query, handleSearch, handleFilter, mode, filter }) => {
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

  const removeFilter = () => {
    handleFilter("");
  };

  return (
    <section className={styles.container}>
      <div className={styles.search}>
        <div className={styles.icon}>
          <img src={mode ? searchLight : search} alt="Search" />
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
          <span>{filter ? filter : "Filter by Region"}</span>
          <img src={mode ? downLight : down} alt="down arrow" />
          {filter && (
            <button className={styles.removeFilter} onClick={removeFilter}>
              Remove
            </button>
          )}
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
