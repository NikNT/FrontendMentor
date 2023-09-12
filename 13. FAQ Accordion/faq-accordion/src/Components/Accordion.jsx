import downIcon from "../assets/icon-arrow-down.svg";
import { useState } from "react";
import "../index.css";
import PropTypes from "prop-types";

const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const togglePanel = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        className={`accordion ${open ? "accordionOpen" : ""}`}
        onClick={togglePanel}
      >
        {title}
        <img src={downIcon} alt="Icon" className={open ? "rotate" : ""} />
      </div>
      <div className={`panel ${open ? "open" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
