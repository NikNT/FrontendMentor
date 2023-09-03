import "../index.css";
import Scores from "./Scores";

const Summary = () => {
  return (
    <div className="summary-wrapper">
      <header className="summary-header">
        <h2>Summary</h2>
      </header>
      <section className="summary-score">
        <Scores />
      </section>
      <section className="summary-button">
        <button>Continue</button>
      </section>
    </div>
  );
};

export default Summary;
