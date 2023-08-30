import styles from "./Card.module.css";
import star from "../../assets/icon-star.svg";
import Button from "../Buttons/Button";
import { useState } from "react";
import Modal from "../Modal/Modal";

import { motion, AnimatePresence } from "framer-motion";

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
        <div className={styles.card}>
          {modal === true ? (
            <AnimatePresence>
              {modal && (
                <motion.div
                  initial={{ opacity: 0, x: "15%" }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5 },
                  }}
                  exit={{
                    opacity: 0,
                    x: "100%",
                    transition: { duration: 0.5 },
                  }}
                >
                  <Modal value={clickedValue} />
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <>
              <figure className={styles.image}>
                <img src={star} alt="Star Icon" />
              </figure>
              <div className={styles.heading}>
                <h1>How did we do?</h1>
              </div>
              <main className={styles.subHeading}>
                <p>
                  Please let us know how we did with your support request. All
                  feedback is appreciated to help us improve our offering!
                </p>
              </main>
              <div className={styles.buttons}>
                <Button onClick={handleButtonClick} />
              </div>
              <div>
                <button
                  disabled={clickedValue === null ? true : false}
                  onClick={handleSubmit}
                  className={styles.submit}
                >
                  SUBMIT
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
