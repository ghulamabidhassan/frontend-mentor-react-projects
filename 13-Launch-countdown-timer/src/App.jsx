import "./App.css";
import { FaFacebookSquare, FaPinterest, FaInstagram } from "react-icons/fa";
import Timer from "./Timer";

function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="cont-items">
          <h2 className="heading">we're launching soon</h2>
          <Timer />
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
