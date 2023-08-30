import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  const [clickedButtonId, setClickedButtonId] = useState(null);

  const data = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];

  const handleButtonClick = (id) => {
    setClickedButtonId(id);
    onClick(id);
  };

  return (
    <>
      {data.map((d) => (
        <button
          key={d.id}
          onClick={() => handleButtonClick(d.id)}
          className={`${styles.button} ${
            clickedButtonId === d.id ? styles.clicked : ""
          }`}
        >
          {d.value}
        </button>
      ))}
    </>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
