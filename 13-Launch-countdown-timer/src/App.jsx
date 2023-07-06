import "./App.css";
import { FaFacebookSquare, FaPinterest, FaInstagram } from "react-icons/fa";
import Timer from "./Timer";
import { useEffect, useState } from "react";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let countDown = new Date("July 6, 2023 24:00:00").getTime();
  let now = new Date().getTime();
  let diff = countDown - now;

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //     let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  //     let secs = Math.floor((diff % (1000 * 60)) / 1000);
  //     setDays(days);
  //     setHours(hours);
  //     setMinutes(mins);
  //     setSeconds(secs);
  //   }, 1000);

  //   return;
  // }, []);

  console.log(days, hours, minutes, seconds);

  return (
    <div className="main">
      <div className="container">
        <div className="cont-items">
          <h2 className="heading">we're launching soon</h2>
          <Timer values={{ days, hours, minutes, seconds }} />
        </div>
      </div>
      <footer>
        <FaFacebookSquare className="social" />
        <FaPinterest className="social" />
        <FaInstagram className="social" />
      </footer>

      <img
        src="../src/images/bg-stars.svg"
        alt=""
        className="stars overlay-img"
      />
      <img
        src="../src/images/pattern-hills.svg"
        alt=""
        className="hills overlay-img"
      />
    </div>
  );
}

export default App;
