import { useState } from "react";
import "./App.css";
import dataset from "./data.json";

function App() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(dataset);

  return (
    <div className="main">
      <img src="./../src/bg-top.svg" alt="" className="overlay overlay-right" />
      <img
        src="./../src/bg-bottom.svg"
        alt=""
        className="overlay overlay-bottom"
      />
      <div className="container">
        <div className="section-one">
          <h2 className="pricing">our pricing</h2>
          <div className="swap">
            <h2 className="monthly">monthly</h2>
            <span
              onClick={() => {
                setToggle(!toggle);
              }}
              className={`${toggle ? "checkbox flex-end" : "checkbox"}`}
            >
              <span
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="circle"
              ></span>
            </span>
            <h2 className="annual">annually</h2>
          </div>
        </div>
        <div className="section-two">
          <article>
            <h3 className="heading">basic</h3>
            <h2 className="price">{toggle ? "$119.99" : "$19.99"}</h2>
            <div className="spans">
              <span className="span">500 GB storage</span>
              <span className="span"> 2 users allowed</span>
              <span className="span">send up to 3 GB</span>
            </div>
            <button className="btn">learn more</button>
          </article>
          <article className="article-blue">
            <h3 className="heading">professional</h3>
            <h2 className="price">{toggle ? "$249.99" : "$24.99"}</h2>
            <div className="spans">
              <span className="span">1 TB storage</span>
              <span className="span">5 users allowed</span>
              <span className="span">send up to 10 GB</span>
            </div>
            <button className="btn">learn more</button>
          </article>
          <article>
            <h3 className="heading">master</h3>
            <h2 className="price">{toggle ? "$399.99" : "$39.99"}</h2>
            <div className="spans">
              <span className="span">2 TB storage</span>
              <span className="span">10 users allowed</span>
              <span className="span">send up to 20 GB</span>
            </div>
            <button className="btn">learn more</button>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
