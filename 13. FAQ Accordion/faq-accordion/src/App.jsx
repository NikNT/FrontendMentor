import "./index.css";
import Accordion from "./Components/Accordion";
import accordionData from "./data.json";
import Image from "./Components/Image";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <Image />
        </div>
        <main className="content">
          {accordionData.map((accordion, index) => (
            <Accordion
              key={index}
              title={accordion.title}
              content={accordion.content}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;
