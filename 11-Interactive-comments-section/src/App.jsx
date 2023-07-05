import "./App.css";
import { FaReply, FaPlus, FaMinus, FaTrash, FaPencil } from "react-icons/fa6";
import Modal from "./Modal";
import Reviews from "./UserReviews";

function App() {
  return (
    <div className="main">
      <Modal />
      <div className="container">
        <div className="cards">
          <div className="card-container">
            <div className="card-section">
              <article className="card">
                <div className="card-div-one">
                  <FaPlus className="icons plus" />
                  <h4 className="number">12</h4>
                  <FaMinus className="icons minus" />
                </div>
                <div className="card-div-two">
                  <div className="card-div-two-one">
                    <span className="flex">
                      <img
                        src="../src/images/avatars/image-amyrobson.png"
                        alt=""
                        className="avatar"
                      />
                      <h4 className="name">amyrobson</h4>
                      <h4 className="month">1 month ago</h4>
                    </span>
                    <span
                      className="flex reply-box"
                      onClick={(e) => {
                        const elem =
                          e.currentTarget.parentElement.parentElement
                            .parentElement.parentElement;
                        console.log(elem);
                        const section = elem.querySelector(".insert-reviews");
                        section.innerHTML = <Reviews />;
                        console.log(section);
                      }}
                    >
                      <FaReply className="icons reply-icon" />
                      <h4 className="reply">reply</h4>
                    </span>
                  </div>
                  <div className="card-div-two-two">
                    <p className="content">
                      Impressive! Though it seems the drag feature could be
                      improved. But overall it looks incredible. You've nailed
                      the design and the responsiveness at various breakpoints
                      works really well.
                    </p>
                  </div>
                </div>
              </article>
              <article className="insert-reviews"></article>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="card-div-one">
                <FaPlus className="icons plus" />
                <h4 className="number">5</h4>
                <FaMinus className="icons minus" />
              </div>
              <div className="card-div-two">
                <div className="card-div-two-one">
                  <span className="flex">
                    <img
                      src="../src/images/avatars/image-maxblagun.webp"
                      alt=""
                      className="avatar"
                    />
                    <h4 className="name">maxblagun</h4>
                    <h4 className="month">2 weeks ago</h4>
                  </span>
                  <span className="flex reply-box">
                    <FaReply className="icons reply-icon" />
                    <h4 className="reply">reply</h4>
                  </span>
                </div>
                <div className="card-div-two-two">
                  <p className="content">
                    Woah, your project looks awesome! How long have you been
                    coding for? I'm still new, but think I want to dive into
                    React as well soon. Perhaps you can give me an insight on
                    where I can learn React? Thanks!
                  </p>
                </div>
              </div>
            </div>
            <section className="replies">
              <div>
                <div>
                  <div className="card">
                    <div className="card-div-one">
                      <FaPlus className="icons plus" />
                      <h4 className="number">4</h4>
                      <FaMinus className="icons minus" />
                    </div>
                    <div className="card-div-two">
                      <div className="card-div-two-one">
                        <span className="flex">
                          <img
                            src="../src/images/avatars/image-ramsesmiron.webp"
                            alt=""
                            className="avatar"
                          />
                          <h4 className="name">ramsesmiron</h4>
                          <h4 className="month">1 week ago</h4>
                        </span>
                        <span className="flex reply-box">
                          <FaReply className="icons reply-icon" />
                          <h4 className="reply">reply</h4>
                        </span>
                      </div>
                      <div className="card-div-two-two">
                        <p className="content">
                          <b>@maxblagun</b> If you're still new, I'd recommend
                          focusing on the fundamentals of HTML, CSS, and JS
                          before considering React. It's very tempting to jump
                          ahead but lay a solid foundation first.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-div-one">
                      <FaPlus className="icons plus" />
                      <h4 className="number">2</h4>
                      <FaMinus className="icons minus" />
                    </div>
                    <div className="card-div-two">
                      <div className="card-div-two-one">
                        <span className="flex">
                          <img
                            src="../src/images/avatars/image-juliusomo.webp"
                            alt=""
                            className="avatar"
                          />
                          <h4 className="name">juliusomo</h4>
                          <span className="you">you</span>
                          <h4 className="month">2 days ago</h4>
                        </span>
                        <span className="flex reply-box">
                          <FaTrash className="icons delete-icon " />
                          <h4 className="delete">delete</h4>
                          <FaPencil className="icons edit-icon " />
                          <h4 className="edit">edit</h4>
                        </span>
                      </div>
                      <div className="card-div-two-two">
                        <p className="content">
                          <b>@ramsesmiron</b> I couldn't agree more with this.
                          Everything moves so fast and it always seems like
                          everyone knows the newest library/framework. But the
                          fundamentals are what stay constant.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Reviews />
      </div>
    </div>
  );
}

export default App;
