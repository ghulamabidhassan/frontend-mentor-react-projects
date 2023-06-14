import { useState } from "react";
import Modal from "./Modal";
import BackProject from "./BackProject";

const About = () => {
  return (
    <div className="about-project">
      <h2 className="about-title">About this project</h2>
      <p className="about-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
        itaque obcaecati totam voluptatum quis commodi natus possimus vitae.
        Accusamus recusandae tempore nihil ipsum error blanditiis reprehenderit.
        Ab et adipisci in?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima
        exercitationem ullam aut ab sint laudantium esse, debitis repellendus
        obcaecati!
      </p>
      <div className="rewards">
        <BackProject />
        {/* <Modal className="modal-box" /> */}
        <div className="reward">
          <div>
            <h2 className="reward-title">bamboo stand</h2>
            <p className="pledge">Pledge $25 or more</p>
          </div>
          <p className="reward-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo
            pariatur fuga, sed minus minima ab itaque excepturi asperiores
            assumenda.
          </p>
          <div>
            <div>
              <span className="bold">101</span>
              <span className="secondary">left</span>
            </div>
            <button className="btn">Select reward</button>
          </div>
        </div>
        <div className="reward">
          <div>
            <h2 className="reward-title">black edition standard</h2>
            <p className="pledge">Pledge $75 or more</p>
          </div>
          <p className="reward-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo
            pariatur fuga, sed minus minima ab itaque excepturi asperiores
            assumenda.
          </p>
          <div>
            <div>
              <span className="bold">64</span>
              <span className="secondary">left</span>
            </div>
            <button className="btn">Select reward</button>
          </div>
        </div>
        <div className="reward out-of-stock">
          <div>
            <h2 className="reward-title">mahogany speacial edition</h2>
            <p className="pledge">Pledge $200 or more</p>
          </div>
          <p className="reward-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo
            pariatur fuga, sed minus minima ab itaque excepturi asperiores
            assumenda.
          </p>
          <div>
            <div>
              <span className="bold">0</span>
              <span className="secondary">left</span>
            </div>
            <button
              onClick={() => {
                alert("Out of stock");
              }}
              className="btn out"
            >
              Out of stock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
