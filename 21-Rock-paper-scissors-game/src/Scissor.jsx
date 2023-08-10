import { useGlobalContext } from "./Context";

const Scissor = () => {
  const { pickItem } = useGlobalContext();

  return (
    <button
      onClick={(e) => {
        pickItem(e);
      }}
      data-choice="scissor"
      data-item="1"
      className="btn scissor"
    >
      <span className="choice scissor">
        <img
          src="https://res.cloudinary.com/dzci9azc2/image/upload/v1691684641/rock%20paper%20scissor/icon-scissors_sdzvvq.svg"
          alt=""
          className="choice-img"
        />
      </span>
    </button>
  );
};

export default Scissor;
