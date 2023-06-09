import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { UseGlobalContext } from "./Context";

const Navbar = () => {
  const { qty, addToCart, show, SetShow, setQty, SetAddToCart } =
    UseGlobalContext();
  return (
    <div className="navbar">
      <div className="nav-div-one">
        <img
          src="https://res.cloudinary.com/dzci9azc2/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688655495/ecommerce%20product%20page/logo_oq7fd8.jpg?_s=public-apps"
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
                      src="https://res.cloudinary.com/dzci9azc2/image/upload/v1688655494/ecommerce%20product%20page/image-product-1_zzwn9q.jpg"
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
          src="https://res.cloudinary.com/dzci9azc2/image/upload/v1688655493/ecommerce%20product%20page/image-avatar_xzxf12.png"
          alt=""
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
