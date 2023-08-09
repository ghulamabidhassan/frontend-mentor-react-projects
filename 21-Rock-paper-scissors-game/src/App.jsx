import "./App.css";
import { useGlobalContext } from "./Context";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Overlay from "./assets/Overlay";
import data from "./data";

function App() {
  const { open, setOpen, score, index } = useGlobalContext();

  return (
    <div className="main">
      <div className="container">
        <header className="header">
          <div>
            <img src="../public/images/logo.svg" alt="" className="logo" />
          </div>
          <div className="div-two">
            <h4 className="score">score</h4>
            <h2 className="number">{score}</h2>
          </div>
        </header>

        {data[index].step}

        <footer
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div>
            <h4 className="rules">rules</h4>
          </div>
        </footer>
      </div>
      <Overlay />
    </div>
  );
}

export default App;
