import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  let toggle = true;
  const [idx, setIdx] = useState(0);
  const [yearly, setYearly] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    price: "",
    yearly,
    services: {
      ["online-services"]: !toggle,
      ["larger-storage"]: !toggle,
      ["customizable-profile"]: !toggle,
    },
  });

  const nextStep = () => {
    setIdx((old) => {
      return old + 1;
    });
  };

  const goBack = () => {
    setIdx((old) => {
      return old - 1;
    });
  };

  const inputCheck = (e) => {
    const value = e.target.value;
    const input = e.target;
    const elem = e.target.parentElement;
    const err = elem.querySelector(".error");
    if (!value) {
      err.classList.add("show-err");
      input.classList.add("input-err");
    } else {
      err.classList.remove("show-err");
      input.classList.remove("input-err");
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const setPlans = (e) => {
    const currentTarget = e.currentTarget;
    const elements = currentTarget.parentElement;
    const allElems = elements.querySelectorAll(".plan");
    setData({
      ...data,
      plan: e.target.id,
      price: e.currentTarget.dataset.price,
    });
    allElems.forEach((item) => {
      item.classList.remove("set-plan");
    });
    currentTarget.classList.add("set-plan");
  };

  const addOns = (e) => {
    const target = e.currentTarget;

    const input = target.querySelector("input");
    if (input.checked == true) {
      input.checked = false;
    } else {
      input.checked = true;
    }
    setData({
      ...data,
      services: { ...data.services, [e.currentTarget.id]: input.checked },
    });
  };

  return (
    <AppContext.Provider
      value={{
        idx,
        setIdx,
        nextStep,
        goBack,
        addOns,
        yearly,
        setYearly,
        setPlans,
        inputCheck,
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppContext, AppProvider };
