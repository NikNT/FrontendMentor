import PropTypes from "prop-types";
import thankyou from "../../assets/illustration-thank-you.svg";
import styles from "./Modal.module.css";
const Modal = ({ value }) => {
  return (
    <div className={styles.modal}>
      <figure>
        <img src={thankyou} alt="ThankYou" />
      </figure>
      <main className={styles.modal_heading}>
        <p>You selected {value} out of 5</p>
      </main>
      <div className={styles.thankyou}>
        <h1>Thank you!</h1>
      </div>
      <footer>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, do not hesitate to get in touch!
        </p>
      </footer>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  value: PropTypes.number.isRequired,
};
