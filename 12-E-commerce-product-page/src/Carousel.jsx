import { useState } from "react";
import raw from "./data";

const Carousel = () => {
  const [data, Setdata] = useState(raw);
  const [index, setIndex] = useState(0);

  return (
    <div className="carousel">
      <article className="big-image">
        <img src={data[index].img} alt="" className="big-img" />
      </article>
      <article className="showcase">
        {data.map((item, index) => {
          const { img, id } = item;
          return (
            <span
              onClick={(e) => {
                const elem = e.currentTarget;
                const curIdx = elem.dataset.id;
                setIndex(curIdx - 1);
              }}
              key={index}
              data-id={id}
              className="boxes"
            >
              <img src={img} alt="" className="showcase-img" />
            </span>
          );
        })}
      </article>
    </div>
  );
};

export default Carousel;
