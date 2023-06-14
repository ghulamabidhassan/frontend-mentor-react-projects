const Numberbox = () => {
  return (
    <div className="number-box secondary">
      <section className="num-section">
        <article className="num-article">
          <span className="num">$89,914</span>
          <span className="num-text">of $100,000 backed</span>
        </article>
        <article className="num-article">
          <span className="num">5,007</span>
          <span className="num-text">total backers</span>
        </article>
        <article className="num-article">
          <span className="num">56</span>
          <span className="num-text">days left</span>
        </article>
      </section>
      <section className="progess-line">
        <div className="progess-outer">
          <div className="progess-inner"></div>
        </div>
      </section>
    </div>
  );
};

export default Numberbox;
