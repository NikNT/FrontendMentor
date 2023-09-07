import "./index.css";
import equillibrium from "./assets/image-equilibrium.jpg";
import eth from "./assets/icon-ethereum.svg";
import clock from "./assets/icon-clock.svg";
import avatar from "./assets/image-avatar.png";
import view from "./assets/icon-view.svg";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <figure className="image">
            <img src={equillibrium} alt="Equillibrium" />
            <div className="overlay">
              <img src={view} alt="View" className="overlay-image" />
            </div>
          </figure>

          <div className="title">
            <h1>Equilibrium #3429</h1>
          </div>

          <main>
            <p>Our Equilibrium collection promtes balance and calm.</p>
          </main>

          <section className="values">
            <div className="price">
              <img src={eth} alt="Eth" className="price-image" />
              <span className="price-text">0.041 ETH</span>
            </div>
            <div className="days">
              <img src={clock} alt="Eth" className="days-image" />
              <span className="days-text">3 days left</span>
            </div>
          </section>

          <hr className="hr" />
          <footer>
            <img src={avatar} alt="Avatar" />
            <p>
              <span> Creation of </span> Jules Wyvern
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
