import { useState } from "react";
import logodesktop from "../public/logo.svg";
import { FaBookmark } from "react-icons/fa";
import BackProject from "./BackProject";

const Header = () => {
  const [bookmark, setBookmark] = useState(false);
  const [showProject, setShowProject] = useState(false);

  return (
    <>
      <div className="header">
        <BackProject />
        <div className="navbar">
          <div className="logo">
            <img src={logodesktop} alt="" className="logo-img logo-desktop" />
          </div>
          <div className="menus">
            <ul>
              <li className="menu">about</li>
              <li className="menu">discover</li>
              <li className="menu">get started</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overlay-box">
        <img
          className="master-logo"
          src="../public/logo-mastercraft.svg"
          alt=""
        />
        <h4 className="heading">mastercraft bamboo monitor riser</h4>
        <p className="desc secondary">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="overlay-btns">
          <button
            onClick={(e) => {
              const elem =
                e.currentTarget.parentElement.parentElement.parentElement;
              const dialog = document.querySelector(".backproject");
              dialog.showModal();
            }}
            className="btn"
          >
            Back this project
          </button>
          <button
            onClick={() => {
              setBookmark(!bookmark);
            }}
            className={`${
              bookmark ? "btn bookmark bookmark-btn-true" : "btn bookmark "
            }`}
          >
            <span
              className={`${bookmark ? "span-block span-true" : "span-block "}`}
            >
              <FaBookmark className="icon-bookmark" />
            </span>
            <span
              className={`${
                bookmark ? "bookmark-text bookmark-true" : "bookmark-text "
              }`}
            >
              {bookmark ? "Bookmarked" : "Bookmark"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
