import { useState } from "react";
import { useGlobalContext } from "./Context";

const StepFour = () => {
  const { goBack, idx, setIdx, yearly, data } = useGlobalContext();
  const [servies, setServices] = useState(Object.entries(data.services));

  return (
    <div className="step-four">
      <h2 className="personal-info">Fininshing up</h2>
      <p className="details">
        Double check everything looks OK before confirming.
      </p>
      <article className="four-box">
        <div className="flex">
          <div>
            <h5 className="services-title">
              {data.plan} ({yearly ? "Yearly" : "Monthly"})
            </h5>
            <h6
              onClick={() => {
                setIdx(1);
              }}
              className="change"
            >
              Change
            </h6>
          </div>
          <div className="four-price">
            ${yearly ? data.price * 10 : data.price}/{yearly ? "yr" : "mo"}
          </div>
        </div>
        <div>
          {servies.map((item, index) => {
            return (
              <article key={index} className="step-four-flex">
                <h5>{item[0].toLocaleUpperCase().replace("-", " ")}</h5>
                <h5 className="price">
                  +${item[1] == true ? 9 : 0}/{yearly ? "yr" : "mo"}
                </h5>
              </article>
            );
          })}
        </div>
      </article>
      <div className="total-price">
        <span className="title">Total (per {yearly ? "Year" : "Month"})</span>
        <span className="price">
          +${yearly ? data.price * 10 : data.price}/{yearly ? "yr" : "mo"}
        </span>
      </div>
      <div className="next-step step-two-btm step-four-btm">
        <button onClick={goBack} className="back-btn">
          go back
        </button>
        <button className="next-btn confirm-btn ">Confirm</button>
      </div>
    </div>
  );
};

export default StepFour;
