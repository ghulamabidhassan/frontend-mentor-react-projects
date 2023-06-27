import "./App.css";
import logo from "./images/logo.svg";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaBars,
  FaTimes,
  FaPinterestSquare,
  FaInstagram,
  FaInstagramSquare,
} from "react-icons/fa";
import introMob from "./images/image-intro-mobile.jpg";

function App() {
  return (
    <div className="main">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-mobile">
            <div>
              <div className="logo-section">
                <img src={logo} alt="" className="logo" />
              </div>
              <div className="icons">
                <FaTimes className="icon bar" />
              </div>
            </div>
            <div className="navbar-mobile-menus">
              <ul className="menus">
                <li className="menu">how we work</li>
                <li className="menu">blog</li>
                <li className="menu">account</li>z
                <button className="btn nav-btn">view plans</button>
              </ul>
            </div>
          </div>
          <div className="logo-section">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="icons">
            <FaBars className="icon bar" />
          </div>
          <ul className="menus">
            <li className="menu">how we work</li>
            <li className="menu">blog</li>
            <li className="menu">account</li>
            <button className="btn nav-btn">view plans</button>
          </ul>
        </nav>
        <div className="header">
          <section className="header-sec-one">
            <img src={introMob} alt="" className="intro-mobile" />
          </section>
          <section className="header-sec-two">
            <h2 className="heading">humanizing your insurance.</h2>
            <p className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              asperiores facere consequatur in quidem quas.
            </p>
            <button className="btn header-btn">view plans</button>
          </section>
        </div>
        <div className="middle-section">
          <div className="line"></div>
          <h2 className="diff">we're different</h2>
          <section className="mid-sec">
            <article>
              <img src="../src/images/icon-snappy-process.svg" alt="" />
              <h4 className="process">snappy process</h4>
              <p className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                recusandae vero quibusdam sapiente commodi voluptatum?
              </p>
            </article>
            <article>
              <img src="../src/images/icon-affordable-prices.svg" alt="" />
              <h4 className="process">affordable prices</h4>
              <p className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                recusandae vero quibusdam sapiente commodi voluptatum?
              </p>
            </article>
            <article>
              <img src="../src/images/icon-people-first.svg" alt="" />
              <h4 className="process">people first</h4>
              <p className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                recusandae vero quibusdam sapiente commodi voluptatum?
              </p>
            </article>
          </section>
        </div>
        <div className="findout">
          <h2> find our more about how we work</h2>
          <button className="btn header-btn">how we work</button>
        </div>
        <footer>
          <div className="footer-one">
            <div>
              <img src={logo} alt="" className="logo" />
            </div>
            <span className="socials">
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaPinterestSquare />
              <FaInstagramSquare />
            </span>
          </div>
          <div className="footer-menu-section">
            <ul className="footer-menus">
              <h2 className="foot-heading">our company</h2>
              <li className="menu">how we work</li>
              <li className="menu">why insecure?</li>
              <li className="menu">check price</li>
              <li className="menu">reviews</li>
            </ul>
            <ul className="footer-menus">
              <h2 className="foot-heading">help me</h2>
              <li className="menu">faq</li>
              <li className="menu">terms of use</li>
              <li className="menu">privacy policy</li>
              <li className="menu">cookies</li>
            </ul>
            <ul className="footer-menus">
              <h2 className="foot-heading">contact</h2>
              <li className="menu">sales</li>
              <li className="menu">support</li>
              <li className="menu">live chat</li>
            </ul>
            <ul className="footer-menus">
              <h2 className="foot-heading">others</h2>
              <li className="menu">careers</li>
              <li className="menu">press</li>
              <li className="menu">licenses</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
