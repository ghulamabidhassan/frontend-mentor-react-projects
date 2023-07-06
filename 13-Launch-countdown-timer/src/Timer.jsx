const Timer = ({ time }) => {
  const { days, hours, minutes, seconds } = time;

  return (
    <div className="timer">
      <div className="box">
        <div className="box-cont">
          <h2 className="num days">
            {days < 9 ? `0${days}` : days ? days : "00"}
          </h2>
          <span className="overlay-box left"></span>
          <span className="overlay-box right"></span>
          <span className="overlay-box line"></span>
        </div>
        <h2 className="box-heading">days</h2>
      </div>
      <div className="box">
        <div className="box-cont">
          <h2 className="num days">
            {hours < 9 ? `0${hours}` : hours ? hours : "00"}
          </h2>
          <span className="overlay-box left"></span>
          <span className="overlay-box right"></span>
          <span className="overlay-box line"></span>
        </div>
        <h2 className="box-heading">hours</h2>
      </div>
      <div className="box">
        <div className="box-cont">
          <h2 className="num days">
            {minutes < 9 ? `0${minutes}` : minutes ? minutes : "00"}
          </h2>
          <span className="overlay-box left"></span>
          <span className="overlay-box right"></span>
          <span className="overlay-box line"></span>
        </div>
        <h2 className="box-heading">minutes</h2>
      </div>
      <div className="box">
        <div className="box-cont">
          <h2 className="num days">
            {seconds < 9 ? `0${seconds}` : seconds ? seconds : "00"}
          </h2>
          <span className="overlay-box left"></span>
          <span className="overlay-box right"></span>
          <span className="overlay-box line"></span>
        </div>
        <h2 className="box-heading">seconds</h2>
      </div>
    </div>
  );
};

export default Timer;
