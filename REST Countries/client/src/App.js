import React, { useState, useEffect } from "react";
import Index from "./pages/Index";
import { Routes, Route } from "react-router-dom";
import Country from "./pages/Country";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const getStoredMode = localStorage.getItem("darkMode");
    return getStoredMode ? JSON.parse(getStoredMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const changeMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={<Index darkMode={darkMode} changeMode={changeMode} />}
      />
      <Route
        path="/country"
        element={<Country darkMode={darkMode} changeMode={changeMode} />}
      />
    </Routes>
  );
};

export default App;
