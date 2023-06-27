import { useState } from "react";
import "./App.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaYoutube,
  FaAngleUp,
} from "react-icons/fa";
import dataone from "./dataone";
import datatwo from "./datatwo";
import ArticleOne from "./ArticleOne";
import ArticleTwo from "./ArticleTwo";

function App() {
  const [datasetone, setDatasetOne] = useState(dataone);
  const [datasettwo, setDatasetTwo] = useState(datatwo);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="main">
      <div className="overlay-bg "></div>
      <div className={`${toggle ? "container dark" : "container"}`}>
        <div className="navbar">
          <div className="nav-one">
            <h2 className={`${toggle ? "nav-heading white" : "nav-heading "}`}>
              social media dashboard
            </h2>
            <span className="sub-heading">total followers:23,004</span>
          </div>
          <div className="nav-two">
            <span className={`${toggle ? "dark-mode white" : "dark-mode"}`}>
              dark mode
            </span>
            <span
              onClick={() => {
                setToggle(!toggle);
              }}
              className={`${toggle ? "inline-circle toggle" : "inline-circle"}`}
            >
              <span className="circle"></span>
            </span>
          </div>
        </div>
        <section className="section-one">
          {datasetone.map((elem, index) => {
            const { icon, userid, number, followers, today, border } = elem;
            console.log(elem.icon);
            return (
              <ArticleOne
                toggle={toggle}
                border={border}
                icon={icon}
                user={userid}
                number={number}
                followers={followers}
                today={today}
              />
            );
          })}
        </section>
        <h2 className="heading-two">overview - today</h2>

        <section className="section-two">
          {datasettwo.map((data, index) => {
            const { views, color, count, icon, today, direction } = data;
            return (
              <ArticleTwo
                toggle={toggle}
                color={color}
                views={views}
                count={count}
                icon={icon}
                today={today}
                direction={direction}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
