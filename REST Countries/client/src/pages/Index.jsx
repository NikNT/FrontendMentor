import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import Cards from "../components/Cards/Cards";
const Index = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const handleFilter = (filter) => {
    setFilter(filter);
  };
  return (
    <>
      <Nav />
      <SearchFilter
        query={query}
        handleSearch={handleSearch}
        filter={filter}
        handleFilter={handleFilter}
      />
      <Cards query={query} filter={filter} />
    </>
  );
};

export default Index;
