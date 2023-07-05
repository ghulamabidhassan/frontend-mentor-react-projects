import { FaPlus, FaShoppingCart, FaMinus, FaTrash } from "react-icons/fa";
import Carousel from "./Carousel";
import { UseGlobalContext } from "./Context";

const Sections = () => {
  const { increment, decrement, qty, SetAddToCart } = UseGlobalContext();
  return (
    <div className="sections">
      <div className="left">
        <Carousel />
      </div>
      <div className="right">
        <h2 className="sneakers">sneaker company</h2>
        <h2 className="heading">fall limited edition sneakers</h2>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus at
          a repellat totam animi, autem labore adipisci recusandae dolorum
          veniam!
        </p>
        <div className="value-box">
          <div className="value-box-one">
            <span className="price">$125.00</span>
            <span className="discount">50%</span>
          </div>
          <div className="value-box-two">
            <span className="old-price">$250.00</span>
          </div>
        </div>
        <div className="foot">
          <div className="foot-one">
            <FaMinus onClick={decrement} className="icons minus" />
            <h2 className="qty">{qty}</h2>
            <FaPlus onClick={increment} className="icons plus" />
          </div>
          <div className="foot-two">
            <button
              onClick={() => {
                SetAddToCart(true);
              }}
              className={qty ? "btn" : "btn cursor-none"}
            >
              <FaShoppingCart className="icons cart-btn" /> add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
