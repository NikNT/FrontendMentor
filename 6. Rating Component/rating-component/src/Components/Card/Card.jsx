import styles from "./Card.module.css";
import star from "../../assets/icon-star.svg";
import Button from "../Buttons/Button";
import { useState } from "react";

const Card = () => {
  const [clickedValue, setClickedValue] = useState(null);
  const [modal, setModal] = useState(false);

  const handleButtonClick = (value) => {
    setClickedValue(value);
  };

  const handleSubmit = () => {
    setModal(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {modal === true ? (
          <h1>You selected {clickedValue} </h1>
        ) : (
          <>
            <figure>
              <img src={star} alt="Star Icon" />
            </figure>
            <div>
              <h1>How did we do?</h1>
            </div>
            <main>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </main>
            <div>
              <Button onClick={handleButtonClick} />
            </div>
            <div>
              <button
                disabled={clickedValue === null ? true : false}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
