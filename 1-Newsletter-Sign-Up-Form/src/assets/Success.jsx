import ImgSuccess from "./../../public/icon-success.svg";
import { UseGlobalContext } from "../designs/Context";

const Success = () => {
  const { confirm, setConfirm, mailId, setMailId } = UseGlobalContext();

  return (
    <div className="main-success">
      <img src={ImgSuccess} className="icon-tick-success" alt="" />
      <h2 className="title">thanks for subscribing!</h2>
      <p className="desc">
        A confirmation email has been sent to <b>{mailId}</b>. Please open it
        and click the button inside to confirm our subscription
      </p>
      <button
        onClick={() => {
          setConfirm(!confirm);
          setMailId("");
        }}
        className="btn-success"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default Success;
