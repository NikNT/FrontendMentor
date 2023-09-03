import "../index.css";
const Results = () => {
  return (
    <div className="result-wrapper">
      <header className="result-header">
        <h1>Your Result</h1>
      </header>
      <section className="result-score">
        <p>76</p>
        <p>of 100</p>
      </section>
      <section className="result-comment">
        <p>Great</p>
      </section>
      <section className="result-footer">
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
    </div>
  );
};

export default Results;
