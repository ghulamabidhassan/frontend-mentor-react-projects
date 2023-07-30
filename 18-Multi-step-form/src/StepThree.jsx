import { useGlobalContext } from "./Context";

const StepThree = () => {
  const { nextStep, goBack, addOns, yearly } = useGlobalContext();

  return (
    <div className="step-three">
      <h2 className="personal-info">Pick add-ons</h2>
      <p className="details">Add-ons help enhance your gaming experience.</p>
      <div className="add-ons">
        <div id="online-services" onClick={addOns} className="add-on">
          <input className="checkbox" type="checkbox" name="" id="" />
          <article>
            <h4 className="services-title">online services</h4>
            <p className="details price">Acsess to multiplayer games </p>
          </article>
          <h5 className="price-blue">{yearly ? "+$10/yr" : "+$1/mo"}</h5>
        </div>
        <div id="larger-storage" onClick={addOns} className="add-on">
          <input className="checkbox" type="checkbox" name="" id="" />
          <article>
            <h4 className="services-title">larger storage</h4>
            <p className="details price">Extra 1TB of cloud save </p>
          </article>
          <h5 className="price-blue">{yearly ? "+$20/yr" : "+$2/mo"}</h5>
        </div>
        <div id="customizable-profile" onClick={addOns} className="add-on">
          <input className="checkbox" type="checkbox" name="" id="" />
          <article>
            <h4 className="services-title">Customizable Profile</h4>
            <p className="details price">Custom theme on your profile </p>
          </article>
          <h5 className="price-blue">{yearly ? "+$20/yr" : "+$2/mo"}</h5>
        </div>
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

export default StepThree;
