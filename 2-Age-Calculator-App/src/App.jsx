import React from "react";
import "./App.css";
import Arrow from "../public/icon-arrow.svg";
import { useState } from "react";
import moment from "moment/moment";

const App = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [isTrue, setIsTrue] = useState(false);
  const [finalDay, setFinalDay] = useState();

  const curTime = moment().format("DD-MM-YYYY").split("-");
  // const daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const perfectDay = () => {
    const daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const parseMonth = daysArr[parseInt(month) - 1];
    const final = parseMonth - curTime[0];
    setFinalDay(final);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="section-one">
          <div
            onClick={() => {
              setIsTrue(!isTrue);
              perfectDay();
            }}
            className="arrow-box"
          >
            <img src={Arrow} alt="" className="arrow" />
          </div>
          <article>
            <h4>day</h4>
            <input
              placeholder="DD"
              value={day}
              onChange={(e) => {
                setDay(e.target.value);
              }}
              type="number"
              name=""
              id=""
            />
          </article>
          <article>
            <h4>month</h4>
            <input
              placeholder="MM"
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              type="number"
              name=""
              id=""
            />
          </article>
          <article>
            <h4>year</h4>
            <input
              placeholder="YYYY"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              type="number"
              name=""
              id=""
            />
          </article>
        </div>
        <div className="section-two">
          <article>
            <span className="year no">
              {isTrue ? Math.abs(curTime[2] - year) : "- -"}
            </span>
            <span className="year-text text">years</span>
          </article>
          <article>
            <span className="month no">
              {isTrue ? (month < 0 ? null : curTime[1] - month) : "- -"}
            </span>
            <span className="month-text text">months</span>
          </article>
          <article>
            <span className="day no">{isTrue ? finalDay : "- -"}</span>
            <span className="day-text text">days</span>
          </article>
        </div>
      </div>
    </div>
  );
};

export default App;
