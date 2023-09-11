import "./index.css";
import desktopIllustration from "./assets/illustration-woman-online-desktop.svg";
// import desktopPattern from "./assets/bg-pattern-desktop.svg";
import box from "./assets/illustration-box-desktop.svg";
const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="image">
          <figure>
            <img src={box} alt="Box" />
            <img src={desktopIllustration} alt="FAQ Illustration" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default App;
