import { useGlobalContext } from "./Context";

const Rock = () => {
  const { pickItem } = useGlobalContext();

  return (
    <button
      onClick={(e) => {
        pickItem(e);
      }}
      data-choice="rock"
      data-item="2"
      className="btn rock"
    >
      <span className="choice rock">
        <img
          src="https://res.cloudinary.com/dzci9azc2/image/upload/v1691684641/rock%20paper%20scissor/icon-rock_o2x0n7.svg"
          alt=""
          className="choice-img"
        />
      </span>
    </button>
  );
};

export default Rock;
