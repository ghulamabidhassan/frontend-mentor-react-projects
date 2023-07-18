import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./App.css";
import raw from "../data.json";
import bgMobile from "./images/bg-header-mobile.svg";
import bgDesktop from "./images/bg-header-desktop.svg";

function App() {
  const [data, setData] = useState(raw);
  const [catagories, setCatagories] = useState([]);

  const updateCatagories = (e) => {
    const currentCat = e.currentTarget.dataset.id;
    if (catagories.includes(currentCat)) {
      return;
    } else {
      setCatagories((oldcat) => {
        return [...oldcat, currentCat];
      });
    }
  };

  const removeCatagories = (e) => {
    const elem = e.currentTarget.parentElement.parentElement;
    const btn = elem.querySelector("button");
    const id = btn.dataset.id;
    const filterCatagories = catagories.filter((item) => {
      return item !== id;
    });

    setCatagories(filterCatagories);
  };

  return (
    <div className="main">
      <div className="container">
        <header className="header">
          <img src={bgMobile} alt="" className="bg-mobile" />
          <img src={bgDesktop} alt="" className="bg-desktop" />
          <div
            className={`${
              catagories.length > 0 ? "filter-box  " : "filter-box hide "
            }`}
          >
            <div className="filters">
              {catagories.map((item, index) => {
                return (
                  <div key={index} className="filter-btn-box">
                    <button data-id={item} className="filter-btn">
                      {item}
                    </button>
                    <span className="remove">
                      <FaTimes
                        onClick={removeCatagories}
                        className="remove-icon"
                      />
                    </span>
                  </div>
                );
              })}
            </div>
            <span className="clear">
              <button
                onClick={() => {
                  setCatagories([]);
                }}
                className="clear-btn"
              >
                clear
              </button>
            </span>
          </div>
        </header>
        <section className="job-listings">
          {data.map((item, index) => {
            const {
              id,
              company,
              logo,
              new: newest,
              featured,
              position,
              role,
              level,
              postedAt,
              contract,
              location,
              languages,
              tools,
            } = item;

            const allCatagories = [role, level, languages, tools].flat();

            return (
              <article key={id} className="job">
                <div className="job-one">
                  <img src={logo} alt="" className="avatar" />
                  <div className="job-one-outer">
                    <div>
                      <span className="company">{company}</span>
                      {newest && <span className="new">new!</span>}
                      {featured && <span className="featured">featured</span>}
                    </div>
                    <p className="position">{position}</p>
                    <div className="geo">
                      <span className="day">{postedAt}</span>
                      <span className="full-time">{contract}</span>
                      <span className="location">{location}</span>
                    </div>
                  </div>
                </div>
                <div className="job-two">
                  {allCatagories.map((item, index) => {
                    return (
                      <button
                        key={index}
                        onClick={updateCatagories}
                        data-id={item}
                        className="filter-btn"
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
