import { useState } from "react";

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAlphabetClick = (letter) => {
    setCurrentPage(1);
    setSelectedAlphabet(letter);
  };

  const getPaginatedData = () => {
    let currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    if (selectedAlphabet) {
      currentItems = data.filter((item) =>
        item.name.startsWith(selectedAlphabet)
      );
    }

    return currentItems;
  };

  return {
    currentPage,
    totalPages,
    paginate,
    alphabet,
    selectedAlphabet,
    handleAlphabetClick,
    getPaginatedData,
  };
};

export default usePagination;
