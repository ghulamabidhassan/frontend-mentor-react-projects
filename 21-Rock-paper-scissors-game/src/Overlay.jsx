import { useGlobalContext } from "./Context";

const Overlay = () => {
  const { open, setOpen } = useGlobalContext();

  return (
    <div className={`${open ? "overlay" : "overlay close"}`}>
      <div className="overlay-cont">
        <div>
          <h2 className="title">rules</h2>
          <span
            onClick={() => {
              setOpen(!open);
            }}
            className="close-icon"
          >
            <img
              src="https://res.cloudinary.com/dzci9azc2/image/upload/v1691684641/rock%20paper%20scissor/icon-close_cyojzw.svg"
              alt=""
            />
          </span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dzci9azc2/image/upload/v1691684641/rock%20paper%20scissor/image-rules_vim13s.svg"
            alt=""
            className="img-rules"
          />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
