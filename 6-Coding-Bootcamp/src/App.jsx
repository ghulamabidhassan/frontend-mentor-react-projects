import { useState } from "react";
import "./App.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import raw from "./data.json";

function App() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(raw);

  const next = () => {
    setIndex((index) => {
      if (index > data.length) {
        return 0;
      } else {
        return 1;
      }
    });
  };

  const prev = () => {
    setIndex((index) => {
      if (index < 0) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="main">
      <div className="container">
        <section className="section-one">
          <img
            src="../src/assets/pattern-bg.svg"
            alt=""
            className="bg-pattern"
          />

          <div className="box">
            <img src={data[index].img} alt="" className="avatar" />
            <div className="arrows">
              <FaAngleLeft onClick={prev} className="arrow" />
              <FaAngleRight onClick={next} className="arrow" />
            </div>
          </div>
        </section>
        <section className="section-two">
          <img
            src="../src/assets/pattern-quotes.svg"
            alt=""
            className="quotes"
          />
          <div className="content">
            <p className="desc">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              eveniet. Nihil magnam ipsa vero laboriosam quisquam fugiat
              numquam, unde explicabo, repellendus quia laudantium, tempore
              ab?""
            </p>
            <div className="profile">
              <h4 className="name">{data[index].name}</h4>
              <h4 className="title">{data[index].title}</h4>
            </div>
          </div>
        </section>
      </div>
      <div className="overlays">
        <img
          src="../public/images/pattern-curve.svg"
          alt=""
          className="curve"
        />
      </div>
    </div>
  );
}

export default App;
