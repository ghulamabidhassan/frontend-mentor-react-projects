import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [win, setWin] = useState();
  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState();
  const [score, setScore] = useState(0);
  const [items, setItems] = useState(["rock", "paper", "scissor"]);

  const housePick = () => {
    let randomNumber = Math.floor(Math.random() * items.length);
    setComputer(items[randomNumber]);
  };

  const pickItem = (e) => {
    const choice = e.currentTarget.dataset.choice;
    setPlayer(choice);
  };

  useEffect(() => {
    housePick();
  }, [false]);

  console.log(player, computer);

  useEffect(() => {
    result();
  }, [player]);

  const result = () => {
    if (
      (player == "paper" && computer == "rock") ||
      (player == "rock" && computer == "scissor") ||
      (player == "scissor" && computer == "paper")
    ) {
      console.log("won");
      setScore((old) => {
        return old + 1;
      });
      setIndex(1);
      setWin(1);
    }
  };

  const playAgain = () => {
    window.location.reload();
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
