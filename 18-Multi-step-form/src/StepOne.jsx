import { useGlobalContext } from "./Context";

const stepOne = () => {
  const { nextStep, inputCheck, data } = useGlobalContext();

  return (
    <div className="step-one">
      <h2 className="personal-info">Personal Info</h2>
      <p className="details">
        Please provide your name, email address and phone number .
      </p>
      <form action="#">
        <span>
          <div className="label-flex">
            <label htmlFor="">name</label>
            <p className="error">this field is required</p>
          </div>
          <input
            name="name"
            onChange={inputCheck}
            type="text"
            className="name"
          />
        </span>
        <span>
          <div className="label-flex">
            <label htmlFor="">
              email <address></address>
            </label>
            <p className="error">this field is required</p>
          </div>
          <input
            name="email"
            onChange={inputCheck}
            type="text"
            className="email "
          />
        </span>
        <span>
          <div className="label-flex">
            <label htmlFor="">phone number</label>
            <p className="error">this field is required</p>
          </div>
          <input
            name="phone"
            onChange={inputCheck}
            type="text"
            className="phone"
          />
        </span>
      </form>
      <div className="next-step">
        <button onClick={nextStep} className="next-btn ">
          next step
        </button>
      </div>
    </div>
  );
};

export default stepOne;
