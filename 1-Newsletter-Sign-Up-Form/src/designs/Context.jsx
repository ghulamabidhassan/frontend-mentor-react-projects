import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [confirm, setConfirm] = useState(false);
  const [mailId, setMailId] = useState("");

  return (
    <AppContext.Provider value={{ confirm, setConfirm, mailId, setMailId }}>
      {children}
    </AppContext.Provider>
  );
};

const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, UseGlobalContext };
