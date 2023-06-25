import "./App.css";
import logo from "./images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import Illus from "./images/illustration-devices.svg";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="main">
      <div className="container">
        <div className={`${toggle ? "overlay-menu true" : "overlay-menu"}`}>
          <ul>
            <li>product</li>
            <li>features</li>
            <li>pricing</li>
            <li className="login">login</li>
          </ul>
        </div>
        <nav>
          <div className="logo-div">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="menus">
            <FaBars
              onClick={() => {
                setToggle(!toggle);
              }}
              className={`${toggle ? "none" : "bar"}`}
            />
            <FaTimes
              onClick={() => {
                setToggle(!toggle);
              }}
              className={`${toggle ? "close true" : "close"}`}
            />
            <ul className="menu">
              <li>product</li>
              <li>features</li>
              <li>pricing</li>
              <li className="dot"></li>
              <li className="login">login</li>
            </ul>
          </div>
        </nav>
        <div className="overlay-curve"></div>
        <section className="section">
          <article className="article-one">
            <img src={Illus} alt="" className="illus" />
          </article>
          <article className="article-two">
            <div className="art-one">
              <span className="new">new</span>
              <span className="mono">monograph dashboard</span>
            </div>
            <h2 className="heading">powerful insights into your team</h2>
            <p className="desc">
              project planning and time tracking for agile teams
            </p>
            <div className="art-two">
              <button className="btn">schedule a demo</button>
              <p className="preview">to see a preview</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
