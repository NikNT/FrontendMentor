import "../index.css";
import Results from "./Results";
import Summary from "./Summary";

const Card = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="result">
          <Results />
        </div>
        <div className="summary">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Card;
