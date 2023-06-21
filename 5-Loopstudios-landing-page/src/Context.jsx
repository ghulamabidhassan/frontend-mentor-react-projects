import { createContext, useContext, children, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <AppContext.Provider value={{ open, setOpen }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
