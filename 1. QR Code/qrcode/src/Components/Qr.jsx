import React from "react";
import styles from "./Qr.module.css";
import qr from "../Assets/image-qr-code.png";

const Qr = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img src={qr} alt="QR Code" />
        </div>
        <div className={styles.title}>
          <p>Improve your front-end skills by building projects</p>
        </div>
        <div className={styles.subtitle}>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qr;
