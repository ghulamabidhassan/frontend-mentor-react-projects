import "./App.css";
import BgPattern from "../public/bg-pattern.svg";
import Circles from "../public/pattern-circles.svg";
import Check from "../public/icon-check.svg";
import { useState } from "react";

function App() {
  const [slider, setSlide] = useState(false);

  return (
    <div className="main">
      <div className="overlays">
        <img src={BgPattern} alt="" className="bg-pattern" />
        <img src={Circles} className="bg-circles" alt="" />
      </div>
      <div className="headings">
        <p className="heading">Simple, traffic-based pricing</p>
        <p className="sub-heading">
          Sign-up for our 30 days trial. No credit card required
        </p>
      </div>
      <div className="container">
        <div className="inner-container">
          <div className="section-one">
            <div>
              <h2 className="page-views">100k Pageviews</h2>
            </div>
            <div>
              <h4 className="price">$16.00</h4>
              <span className="per-month">/ month</span>
            </div>
          </div>
          <div className="section-two">
            <input className="input-range" type="range" name="" id="" />
          </div>
          <div className="section-three">
            <span className="monthly billing">Montly billing</span>
            <span>
              <label
                htmlFor=""
                className="switch"
                onClick={() => {
                  setSlide(!slider);
                }}
              >
                <input type="checkbox" className="checkbox" />
                <span className={`${slider ? " right" : "slider"}`}></span>
              </label>
            </span>
            <span className="year billing">year billing</span>
            <span className="discount">25% discount</span>
          </div>
        </div>
        <div className="inner-container-two">
          <div>
            <article>
              <span>
                <img src={Check} alt="" className="check" />
              </span>
              <span className="title">Unlimited websites </span>
            </article>
            <article>
              <span>
                <img src={Check} alt="" className="check" />
              </span>
              <span className="title">100% data ownership</span>
            </article>
            <article>
              <span>
                <img src={Check} alt="" className="check" />
              </span>
              <span className="title">Email reports </span>
            </article>
          </div>
          <div>
            <button className="btn">Start my trial</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
