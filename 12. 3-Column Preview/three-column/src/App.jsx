import "./index.css";
import data from "./data.json";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        {data.map((d) => (
          <div
            key={d.id}
            className="card"
            style={{ backgroundColor: d.bgColor }}
          >
            <main className="content">
              <figure>
                <img src={d.icon} alt="Icon" />
              </figure>
              <p className="title"> {d.title} </p>
              <p className="description"> {d.description} </p>
              <button
                style={{
                  color: d.bgColor,
                }}
                className={`button${d.id}`}
              >
                Learn More
              </button>
            </main>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
