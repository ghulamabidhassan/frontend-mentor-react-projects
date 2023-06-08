import "./App.css";
import imgDesktop from "../public/illustration-sign-up-desktop.svg";
import iconTick from "../public/icon-list.svg";
import Success from "./assets/Success";
import { UseGlobalContext } from "./designs/Context";
import ImgMobile from "../public/illustration-sign-up-mobile.svg";

const App = () => {
  const { mailId, confirm, setConfirm, setMailId } = UseGlobalContext();

  return (
    <div className="main">
      <div className={`${confirm ? "hide" : "container"}`}>
        <section className="section-one">
          <h2 className="title">stay updated!</h2>
          <p className="desc">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <div className="accordions">
            <div className="accordion">
              <span className="icon">
                <img src={iconTick} className="icon-tick" alt="" />
              </span>
              <span className="accor-desc">
                Product discovery and building what matters
              </span>
            </div>
            <div className="accordion">
              <span className="icon">
                <img src={iconTick} className="icon-tick" alt="" />
              </span>
              <span className="accor-desc">
                Measuring to ensure updates are a success
              </span>
            </div>
            <div className="accordion">
              <span className="icon">
                <img src={iconTick} className="icon-tick" alt="" />
              </span>
              <span className="accor-desc">And much more!</span>
            </div>
          </div>
          <div className="mail-container">
            <div className="mail-container-one">
              <span>email address</span>
              <span className="error">valid email required</span>
            </div>
            <div className="mail-container-two">
              <input
                value={mailId}
                onChange={(e) => {
                  setMailId(e.target.value);
                }}
                pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9-]+\.[a-z]{2,12}"
                type="email"
                name=""
                id=""
                className="input-mail"
              />
              <button
                onClick={() => {
                  setConfirm(!confirm);
                }}
                className="btn"
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
        </section>
        <section className="section-two">
          <img src={imgDesktop} alt="" className="img-desktop" />
          <img src={ImgMobile} alt="" className="img-mob" />
        </section>
      </div>
      {confirm ? <Success /> : ""}
    </div>
  );
};

export default App;
