import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [win, setWin] = useState();
  const [player, setPlayer] = useState();
  const [computer, setComputer] = useState();
  const [score, setScore] = useState(0);
  const [items, setItems] = useState(["rock", "paper", "scissor"]);

  const pickItem = (e) => {
    const choice = e.currentTarget.dataset.choice;
    setPlayer(choice);
    setIndex(1);
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * items.length);
      setComputer(items[randomNumber]);
    }, 2000);
  };

  const playAgain = () => {
    setComputer();
    setIndex(0);
  };

  useEffect(() => {
    result();
    return;
  }, [computer]);

  const result = () => {
    if (
      (player === "paper" && computer === "rock") ||
      (player === "rock" && computer === "scissor") ||
      (player === "scissor" && computer === "paper")
    ) {
      setWin("won");
      setScore((old) => {
        return old + 1;
      });
    } else if (player === computer) {
      setWin("draw");
    } else {
      setWin("lost");
      setScore((old) => {
        return old - 1;
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        open,
        setOpen,
        player,
        setPlayer,
        pickItem,
        computer,
        setComputer,
        score,
        setScore,
        index,
        setIndex,
        playAgain,
        win,
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
