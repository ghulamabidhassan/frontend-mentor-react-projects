import "./App.css";
import { FaFacebookSquare, FaPinterest, FaInstagram } from "react-icons/fa";
import Timer from "./Timer";
import { useEffect, useState } from "react";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      let countDown = new Date("DEC 31, 2023 24:00:00").getTime();
      let now = new Date().getTime();
      let diff = countDown - now;

      // let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      // let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      // let secs = Math.floor((diff % (1000 * 60)) / 1000);
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
    }, 1000);
    return;
  }, []);

  // console.log(days);

  return (
    <div className="main">
      <div className="container">
        <div className="cont-items">
          <h2 className="heading">NEW YEAR COUNTDOWN -- 2024 -- </h2>
          <Timer time={{ days, hours, minutes, seconds }} />
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
