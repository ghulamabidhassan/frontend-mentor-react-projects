import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaPinterestSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <section className="footer-one">
          <div>
            <img src="../src/images/logo.svg" alt="" className="footer-logo" />
          </div>
          <div>
            <ul className="menus">
              <li className="menu">about</li>
              <li className="menu">careers</li>
              <li className="menu">events</li>
              <li className="menu">products</li>
              <li className="menu">support</li>
            </ul>
          </div>
        </section>
        <section className="footer-two">
          <div className="socials">
            <FaFacebookSquare className="icon-social" />
            <FaTwitterSquare className="icon-social" />
            <FaInstagram className="icon-social" />
            <FaPinterestSquare className="icon-social" />
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} loopstudios. all rights reserved.
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
