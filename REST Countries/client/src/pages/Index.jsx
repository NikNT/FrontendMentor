import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import Cards from "../components/Cards/Cards";
const Index = ({ darkMode, changeMode }) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const handleFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div
      className={`index-background ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <Nav changeMode={changeMode} darkMode={darkMode} />
      <SearchFilter
        query={query}
        handleSearch={handleSearch}
        filter={filter}
        handleFilter={handleFilter}
        mode={darkMode}
      />
      <Cards query={query} filter={filter} />
    </div>
  );
};

export default Index;
