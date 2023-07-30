const Numbers = ({ number, step, info, index, idx }) => {
  return (
    <article className="overlay-article">
      <div
        className={`${
          index === idx ? "number-container number-bg" : "number-container"
        }`}
      >
        <div className="number">{number}</div>
      </div>
      <div className="info">
        <h5 className="steps">step {step}</h5>
        <h5 className="desc">{info}</h5>
      </div>
    </article>
  );
};

export default Numbers;
