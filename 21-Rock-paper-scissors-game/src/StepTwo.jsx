import { useGlobalContext } from "./Context";

const StepTwo = () => {
  const { playAgain, win, score } = useGlobalContext();
  return (
    <div className="step-two">
      <div>
        <span>
          <h2 className="pick">you picked</h2>
        </span>
        <button className="btn scissor">
          <span className="choice scissor">
            <img
              src="../public/images/icon-scissors.svg"
              alt=""
              className="choice-img"
            />
          </span>
        </button>
      </div>
      {win ? (
        <div className="step-two-middle ">
          <h2 className="win">
            {win == 0
              ? "Draw"
              : win == 1
              ? "you won"
              : win < 0
              ? "you lose"
              : ""}
          </h2>
          <button onClick={playAgain} className="play">
            play again
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="center">
        <span>
          <h2 className="pick">the house picked</h2>
        </span>
        <div>
          <div className="black  "></div>
          <button className="btn scissor  close ">
            <span className="choice scissor">
              <img
                src="../public/images/icon-scissors.svg"
                alt=""
                className="choice-img"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
