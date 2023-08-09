import { useGlobalContext } from "./Context";

const StepOne = () => {
  const { playGame, setIndex, pickItem } = useGlobalContext();
  return (
    <div className="middle game">
      <button
        onClick={(e) => {
          pickItem(e);
        }}
        data-choice="paper"
        className="btn paper"
      >
        <span className="choice paper">
          <img
            src="../public/images/icon-paper.svg"
            alt=""
            className="choice-img"
          />
        </span>
      </button>
      <button
        onClick={(e) => {
          pickItem(e);
        }}
        data-choice="scissor"
        className="btn scissor"
      >
        <span className="choice scissor">
          <img
            src="../public/images/icon-scissors.svg"
            alt=""
            className="choice-img"
          />
        </span>
      </button>

      <button
        onClick={(e) => {
          pickItem(e);
        }}
        data-choice="rock"
        className="btn rock"
      >
        <span className="choice rock">
          <img
            src="../public/images/icon-rock.svg"
            alt=""
            className="choice-img"
          />
        </span>
      </button>
    </div>
  );
};

export default StepOne;
