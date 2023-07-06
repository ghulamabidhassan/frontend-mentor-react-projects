const Timer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="timer">
      <div className="box">
        <div className="box-cont">
          <h2 className="num days">{days}</h2>
          <span className="overlay-box left"></span>
          <span className="overlay-box right"></span>
          <span className="overlay-box line"></span>
        </div>
        <h2 className="box-heading">days</h2>
      </div>
      <div className="box">
        <div className="box-cont">
          <h2 className="num days">{hours}</h2>
          <span className="overlay-box left"></span>
          <span className="overlay-box right"></span>
          <span className="overlay-box line"></span>
        </div>
        <h2 className="box-heading">hours</h2>
      </div>
      <div className="box">
        <div className="box-cont">
          <h2 className="num days">{minutes}</h2>
          <span className="overlay-box left"></span>
          <span className="overlay-box right"></span>
          <span className="overlay-box line"></span>
        </div>
        <h2 className="box-heading">minutes</h2>
      </div>
      <div className="box">
        <div className="box-cont">
          <h2 className="num days">{seconds}</h2>
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
