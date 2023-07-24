import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refersh, setRefresh] = useState(false);
  const url = "https://api.adviceslip.com/advice";

  const fetchUrl = async (url) => {
    const data = await fetch(url);
    const result = await data.json();
    setLoading(false);
    setData(result);
  };

  useEffect(() => {
    fetchUrl(url);
  }, [refersh]);

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
              src="https://res.cloudinary.com/dzci9azc2/image/upload/v1690136696/advice%20generator/pattern-divider-desktop_zs40pd.svg"
              alt=""
              className="img-line"
            />
            <div
              className="dice"
              onClick={() => {
                setRefresh(!refersh);
              }}
            >
              <div>
                <img
                  src="https://res.cloudinary.com/dzci9azc2/image/upload/v1690136695/advice%20generator/icon-dice_s4va8f.svg"
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
