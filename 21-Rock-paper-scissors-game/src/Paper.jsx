import { useGlobalContext } from "./Context";

const Paper = () => {
  const { pickItem } = useGlobalContext();

  return (
    <button
      onClick={(e) => {
        pickItem(e);
      }}
      data-choice="paper"
      data-item="0"
      className="btn paper"
    >
      <span className="choice paper">
        <img
          src="https://res.cloudinary.com/dzci9azc2/image/upload/v1691684641/rock%20paper%20scissor/icon-paper_qgb4t7.svg"
          alt=""
          className="choice-img"
        />
      </span>
    </button>
  );
};

export default Paper;
