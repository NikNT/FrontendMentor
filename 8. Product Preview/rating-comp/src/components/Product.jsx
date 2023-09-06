import Content from "./Content";
import "../index.css";
import desktopImage from "../assets/image-product-desktop.jpg";
import mobileImage from "../assets/image-product-mobile.jpg";

const Product = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="image">
          <picture>
            <source media="(min-width: 394px)" srcSet={desktopImage} />
            <source media="(max-width: 393px)" srcSet={mobileImage} />
            <img src={desktopImage} alt="Product Image" className="picture" />
          </picture>
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Product;
