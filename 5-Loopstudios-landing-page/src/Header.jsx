import { FaBars, FaWindowClose } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Header = () => {
  const { open, setOpen } = useGlobalContext();
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo-section">
          <img src="../public/logo.svg" alt="" className="logo" />
        </div>
        <div className="menu-div">
          <div className="bars">
            <FaBars
              onClick={() => {
                setOpen(!open);
              }}
              className="icon-bars"
            />
          </div>
          <ul className="menus">
            <li className="menu">about</li>
            <li className="menu">careers</li>
            <li className="menu">events</li>
            <li className="menu">products</li>
            <li className="menu">support</li>
          </ul>
        </div>
      </nav>
      <div className="header-content">
        <span>Immersive </span>
        <span>experiences </span>
        <span>that deliver</span>
      </div>
      <div className={`${open ? "overlay-menus" : "close"}`}>
        <section className="section-one">
          <img src="../public/logo.svg" alt="" className="logo-overlay" />
          <FaWindowClose
            onClick={() => {
              setOpen(!open);
            }}
            className="icon-close"
          />
        </section>
        <section className="section-two">
          <ul className="menus">
            <li className="menu">about</li>
            <li className="menu">careers</li>
            <li className="menu">events</li>
            <li className="menu">products</li>
            <li className="menu">support</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Header;
