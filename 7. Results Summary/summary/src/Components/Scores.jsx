import "../index.css";
import scores from "../data.json";
const Scores = () => {
  return (
    <div className="score-card-wrapper">
      {scores.map((score) => (
        <div
          key={score.score}
          className="score-card"
          style={{ backgroundColor: score.bgColor }}
        >
          <>
            <div className="score-image-category">
              <img src={score.icon} alt={score.category} />
              <span style={{ color: score.color }} className="score-category">
                {score.category}
              </span>
            </div>
            <span className="score-value"> {score.score} / 100</span>
          </>
        </div>
      ))}
    </div>
  );
};

export default Scores;
