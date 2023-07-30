import arcade from "../src/assets/images/icon-arcade.svg";
import advanced from "../src/assets/images/icon-advanced.svg";
import pro from "../src/assets/images/icon-pro.svg";
import { useGlobalContext } from "./Context";

const StepTwo = () => {
  const { nextStep, goBack, setYearly, yearly, setPlans, data, setData } =
    useGlobalContext();

  return (
    <div className="step-two">
      <h2 className="select-plan personal-info">Select your plan</h2>
      <p className="details">
        You have the option of monthly or yearly billing.
      </p>
      <div className="plans">
        <div id="arcade" data-price="9" onClick={setPlans} className="plan ">
          <img src={arcade} alt="" className="icon" />
          <h4 className="title">arcade</h4>
          <h4 className="price">{yearly ? "$90/yr" : "$9/mo"}</h4>
          {yearly && <h5 className="yearly-free">2 months free</h5>}
        </div>
        <div id="advanced" data-price="12" onClick={setPlans} className="plan">
          <img src={advanced} alt="" className="icon" />
          <h4 className="title">advanced</h4>
          <h4 className="price">{yearly ? "$120/yr" : "$12/mo"}</h4>
          {yearly && <h5 className="yearly-free">2 months free</h5>}
        </div>
        <div id="pro" data-price="15" onClick={setPlans} className="plan">
          <img src={pro} alt="" className="icon" />
          <h4 className="title">pro</h4>
          <h4 className="price">{yearly ? "$150/yr" : "$15/mo"}</h4>
          {yearly && <h5 className="yearly-free">2 months free</h5>}
        </div>
      </div>
      <div className="month-year">
        <h4 className="month">monthly</h4>
        <div
          onClick={() => {
            setYearly(!yearly);
            setData({ ...data, yearly: !yearly });
          }}
          className={`${yearly ? " toggle-end" : "toggle "}`}
        >
          <span className="toggle-span"></span>
        </div>
        <h4 className="year">yearly</h4>
      </div>
      <div className="next-step step-two-btm">
        <button onClick={goBack} className="back-btn">
          go back
        </button>
        <button onClick={nextStep} className="next-btn ">
          next step
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
