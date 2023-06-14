import { FaWindowClose, FaCircle } from "react-icons/fa";
import Modal from "./Modal";

const BackProject = () => {
  const showContainer = (e) => {
    const elem =
      e.currentTarget.parentElement.parentElement.parentElement.parentElement
        .parentElement;

    const container = elem.querySelector(".second-container");
    container.classList.toggle("show");
  };

  const showThank = (e) => {
    const elem =
      e.currentTarget.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement;
    const modal = elem.querySelector(".modal-thank-you");
    const container = elem.querySelector(".second-container");
    container.classList.toggle("show");
    modal.showModal();
  };

  return (
    <dialog className="backproject">
      <Modal className="modal-box" />
      <div className="back-project-box">
        <FaWindowClose
          onClick={(e) => {
            const elem = e.currentTarget.parentElement.parentElement;
            elem.close();
          }}
          className="icon-close"
        />
        <h4 className="backproject-title">Back this project</h4>
        <p className="backproject-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="reward project-reward project-reward-default">
          <div className="circle-box">
            <FaCircle className="icon-circle" />
          </div>
          <div>
            <h2 className="project-title pledging">Pledge with no reward</h2>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              similique pariatur vitae? Quos, nobis minus.
            </p>
          </div>
        </div>
        <div className="reward project-reward">
          <div className="reward-first-container">
            <div className="circle-box">
              <FaCircle className="icon-circle" />
            </div>
            <div>
              <span className="flex">
                <div>
                  <h2 className="project-title heading">Bamboo Stand</h2>
                  <h2
                    onClick={showContainer}
                    className="project-title left-padding pledging"
                  >
                    Pledge $25 or more
                  </h2>
                </div>
                <div className="flex-right">
                  <span className="project-num">101</span>
                  <span className="project-balance">left</span>
                </div>
              </span>
              <p className="project-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                similique pariatur vitae? Quos, nobis minus.
              </p>
            </div>
          </div>
          <div className="second-container">
            <div className="second-cont-two">
              <div>
                <div className="enter-pledge">Enter your pledge</div>
              </div>
              <div>
                <input type="number" placeholder="$" />
                <button onClick={showThank} className="continue btn">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="reward project-reward">
          <div className="reward-first-container">
            <div className="circle-box">
              <FaCircle className="icon-circle" />
            </div>
            <div>
              <span className="flex">
                <div>
                  <h2 className="project-title heading">Black Edition Stand</h2>
                  <h2
                    onClick={showContainer}
                    className="project-title left-padding pledging"
                  >
                    Pledge $75 or more
                  </h2>
                </div>
                <div className="flex-right">
                  <span className="project-num">64</span>
                  <span className="project-balance">left</span>
                </div>
              </span>
              <p className="project-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                similique pariatur vitae? Quos, nobis minus.
              </p>
            </div>
          </div>
          <div className="second-container">
            <div className="second-cont-two">
              <div>
                <div className="enter-pledge">Enter your pledge</div>
              </div>
              <div>
                <input type="number" placeholder="$" />
                <button onClick={showThank} className="continue btn">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="reward project-reward mahogany project-reward-default">
          <div className="circle-box">
            <FaCircle className="icon-circle" />
          </div>
          <div>
            <span className="flex">
              <div>
                <h2 className="project-title heading">
                  mahogany speacial edition
                </h2>
                <h2 className="project-title pledging left-padding">
                  Pledge $200 or more
                </h2>
              </div>
              <div className="flex-right">
                <span className="project-num">0</span>
                <span className="project-balance">left</span>
              </div>
            </span>
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              similique pariatur vitae? Quos, nobis minus.
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default BackProject;
