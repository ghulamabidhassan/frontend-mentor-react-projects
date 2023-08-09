import { useGlobalContext } from "../Context";

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
            <img src="../../public/images/icon-close.svg" alt="" />
          </span>
        </div>
        <div>
          <img
            src="../../public/images/image-rules.svg"
            alt=""
            className="img-rules"
          />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
