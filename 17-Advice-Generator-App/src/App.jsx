import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://api.adviceslip.com/advice";

  const fetchUrl = async (url) => {
    const data = await fetch(url);
    const result = await data.json();
    setLoading(false);
    setData(result);
  };

  useEffect(() => {
    fetchUrl(url);
  }, []);

  return (
    <div className="main">
      <div className="container">
        {loading ? (
          <h2 className="loading">loading....</h2>
        ) : (
          <>
            <h3 className="advice">advice # {data.slip.id}</h3>
            <div className="content">{data.slip.advice}</div>
            <img
              src="../src/assets/images/pattern-divider-mobile.svg"
              alt=""
              className="img-line"
            />
            <div
              className="dice"
              onClick={() => {
                window.location.reload();
              }}
            >
              <div>
                <img
                  src="../src/assets/images/icon-dice.svg"
                  alt=""
                  className="dice-img"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
