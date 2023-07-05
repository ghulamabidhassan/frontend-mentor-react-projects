import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { UseGlobalContext } from "./Context";

const Navbar = () => {
  const { qty, addToCart, show, SetShow, setQty, SetAddToCart } =
    UseGlobalContext();
  return (
    <div className="navbar">
      <div className="nav-div-one">
        <img
          src="https://raw.githubusercontent.com/ghulamabidhassan/frontend-mentor-react-projects/f58ce910ecea5b4a88e5d70c4b1622deeb85d583/12-E-commerce-product-page/src/images/logo.svg"
          alt=""
          className="logo"
        />
        <ul className="menus">
          <li className="menu">collections</li>
          <li className="menu">men</li>
          <li className="menu">women</li>
          <li className="menu">about</li>
          <li className="menu">contact</li>
        </ul>
      </div>
      <div className="nav-div-two">
        <div className="cart-flex">
          <FaShoppingCart
            onClick={() => {
              SetShow(!show);
            }}
            className="icons cart"
          />
          <div className={addToCart && qty ? "count true" : "count "}>
            {qty}
          </div>
          <div className={show ? "cart-box true" : "cart-box "}>
            <div className="cart-title">cart</div>
            <div className="cart-box-items">
              {qty && addToCart ? (
                <div className="cart-box-one">
                  <span>
                    <img
                      src="https://github.com/ghulamabidhassan/frontend-mentor-react-projects/blob/master/12-E-commerce-product-page/src/images/image-product-1.jpg?raw=true"
                      alt=""
                      className="cart-item-logo"
                    />
                  </span>
                  <span className="middle">
                    <span className="cart-name">
                      fall limited edition sneakers
                    </span>
                    <span className="cart-values">
                      $125 x {qty} <b>{`$${qty * 125}.00 `}</b>
                    </span>
                  </span>
                  <span>
                    <FaTrash
                      onClick={() => {
                        setQty(0);
                        SetAddToCart(false);
                      }}
                      className="icons trash"
                    />
                  </span>
                </div>
              ) : (
                <h2 className="no-items">no items in cart</h2>
              )}
              <div className="cart-box-btn">
                <button
                  className={qty && addToCart ? "btn" : "btn cursor-none"}
                >
                  checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://github.com/ghulamabidhassan/frontend-mentor-react-projects/blob/master/12-E-commerce-product-page/src/images/image-avatar.png?raw=true"
          alt=""
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
