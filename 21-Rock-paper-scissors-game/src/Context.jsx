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
    setPlayer();
    setIndex(0);
  };

  useEffect(() => {
    result();
  }, [computer]);

  const result = () => {
    if (player == computer) {
      setWin("draw");
      return;
    } else if (player === "paper" && computer === "rock") {
      setWin("won");
      setScore((old) => {
        return old + 1;
      });
    } else if (player === "rock" && computer === "scissor") {
      setWin("won");
      setScore((old) => {
        return old + 1;
      });
    } else if (player === "scissor" && computer === "paper") {
      setWin("won");
      setScore((old) => {
        return old + 1;
      });
    } else {
      setWin("lost");
      setScore((old) => {
        if (old == 0) {
          return 0;
        } else {
          return old - 1;
        }
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
