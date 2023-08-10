import "./App.css";
import { useGlobalContext } from "./Context";
import Overlay from "./Overlay";
import data from "./data";

function App() {
  const { open, setOpen, score, index } = useGlobalContext();

  return (
    <div className="main">
      <div className="container">
        <header className="header">
          <div>
            <img
              src="https://res.cloudinary.com/dzci9azc2/image/upload/v1691684641/rock%20paper%20scissor/logo_qes1hs.svg"
              alt=""
              className="logo"
            />
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
