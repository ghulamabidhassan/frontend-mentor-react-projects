import { useContext, createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [qty, setQty] = useState(0);
  const [addToCart, SetAddToCart] = useState(false);
  const [show, SetShow] = useState(false);

  const increment = () => {
    setQty((Qty) => {
      return Qty + 1;
    });
  };

  const decrement = () => {
    setQty((Qty) => {
      if (Qty < 1) {
        alert("Cannot choose less than 0");
        return 0;
      } else {
        return Qty - 1;
      }
    });
  };
  return (
    <AppContext.Provider
      value={{
        increment,
        decrement,
        qty,
        setQty,
        addToCart,
        SetAddToCart,
        show,
        SetShow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { UseGlobalContext, AppContext, AppProvider };
