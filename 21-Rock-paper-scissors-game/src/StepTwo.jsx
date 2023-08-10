import { useGlobalContext } from "./Context";
import Items from "./Items";

const StepTwo = () => {
  const { playAgain, win, player, computer } = useGlobalContext();
  return (
    <div className="step-two">
      <div>
        <span>
          <h2 className="pick">you picked</h2>
        </span>
        {player &&
          Items.map((item) => {
            if (item.id == player) {
              return item.comp;
            }
          })}
      </div>

      {computer && (
        <div className="step-two-middle ">
          <h2 className="win">
            {win == "won" && "You won"}
            {win == "draw" && "draw"}
            {win == "lost" && "You lose"}
          </h2>
          <button onClick={playAgain} className="play">
            play again
          </button>
        </div>
      )}

      <div className="center">
        <span>
          <h2 className="pick">the house picked</h2>
        </span>
        <div>
          <div className={`${computer ? "black close" : "black"}`}></div>
          {computer &&
            Items.map((item) => {
              if (item.id == computer) {
                return item.comp;
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
