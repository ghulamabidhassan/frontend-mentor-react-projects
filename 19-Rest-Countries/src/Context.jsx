import { createContext, useState, useContext, useEffect } from "react";
// import raw from "../data.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState();
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);
  const [finalData, setFinalData] = useState([]);
  const [data, setData] = useState([]);
  const [link, setLink] = useState(`https://restcountries.com/v3.1/all`);

  const fetchResults = async () => {
    const response = await fetch(link);
    const data = await response.json();
    // setFinalData(data.slice(0, 100));
    setData(data.slice(0, 100));
    setLoading(false);
  };

  const inputSearch = (e) => {
    let value = e.currentTarget.value;
    if (value === "") {
      setLink(`https://restcountries.com/v3.1/all`);
    } else {
      setLink(`https://restcountries.com/v3.1/name/${value}
    `);
    }
  };

  const selectRegion = (e) => {
    const value = e.target.value;

    if (value === "all") {
      setLink(`https://restcountries.com/v3.1/all`);
    } else {
      setLink(`https://restcountries.com/v3.1/region/${value}`);
    }
  };

  useEffect(() => {
    fetchResults(link);
  }, [link, input]);

  return (
    <AppContext.Provider
      value={{
        dark,
        setDark,
        data,
        setData,
        setFinalData,
        finalData,
        loading,
        setLoading,
        input,
        setInput,
        inputSearch,
        selectRegion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
