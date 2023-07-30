import "./App.css";
import raw from "./data";
import numData from "./numbers";
import Number from "./Number";
import { useState } from "react";
import { useGlobalContext } from "./Context";

function App() {
  const [data, setData] = useState(raw);

  const { idx } = useGlobalContext();

  return (
    <div className="over-all">
      <div className="screen-msg">
        <h2>
          Screen size should be more than <span>1366 x 625px</span> for optimal
          performance
        </h2>
      </div>
      <div className="main">
        <div className="container">
          <div className="left">
            {/* <img
              src="../src/assets/images/bg-sidebar-desktop.svg"
              alt=""
              className="background desktop"
            /> */}
            <div className="overlay">
              {numData.map((item, index) => {
                return <Number key={index} {...item} index={idx} />;
              })}
            </div>
          </div>
          <div className="right">{data[idx].tag}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
