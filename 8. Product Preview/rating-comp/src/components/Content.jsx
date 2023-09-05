import "../index.css";
import cart from "../assets/icon-cart.svg";

const Content = () => {
  return (
    <div className="content-wrapper">
      <header className="content-header">
        <h2>P E R F U M E</h2>
      </header>
      <div className="content-title">
        <h1>Gabrielle Essence Eau De Parfum</h1>
      </div>
      <div className="content-description">
        <p>
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
      </div>
      <div className="content-price">
        <span className="content-real-price">$149.99</span>
        <span className="content-striked-price">
          <strike>$169.99</strike>
        </span>
      </div>
      <div>
        <button className="content-button">
          <img src={cart} alt="Cart" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Content;
