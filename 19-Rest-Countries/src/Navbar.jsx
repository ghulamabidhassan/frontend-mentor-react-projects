import { FaMoon } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { dark, setDark } = useGlobalContext();

  return (
    <div className={`${dark ? "navbar navbar-dark" : "navbar "}`}>
      <div className="left">
        <Link className="link-logo" to="/">
          <h2 className="title">Where in the world?</h2>
        </Link>
      </div>
      <div className="right">
        <FaMoon
          onClick={() => {
            setDark(!dark);
          }}
          className="moon"
        />
        <h4
          onClick={() => {
            setDark(!dark);
          }}
          className="dark-mode"
        >
          Dark Mode
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
