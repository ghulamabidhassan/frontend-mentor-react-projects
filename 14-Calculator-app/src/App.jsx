import { useState } from "react";
import "./App.css";
import raw from "./data";
import stylesRaw from "./styles";

function App() {
  const [styles, setStyles] = useState(stylesRaw);
  const [data, setData] = useState(raw);
  const [theme, setTheme] = useState(0);
  const [value, setValue] = useState([]);

  const themeIndex = (e) => {
    const dataId = e.currentTarget.dataset.value;
    setTheme(dataId);
  };

  const clickBtn = (e) => {
    const elem = e.currentTarget.dataset.value;
    if (elem === "reset" || elem === "DEL") {
      setValue([]);
    } else if (elem === "equal") {
      setValue((oldValue) => {
        return eval(oldValue.join(""));
      });
    } else {
      setValue((oldValue) => {
        return [...oldValue, elem];
      });
    }
  };

  // console.log(value);
  // console.log(total);

  return (
    <div className={`${styles[0].main.styles[theme]}`}>
      <div className="container">
        <section className="section-one">
          <div>
            <h2 className={`${styles[0].calc.styles[theme]}`}>calc</h2>
          </div>
          <div className="flex">
            <h3 className={`${styles[0].theme.styles[theme]}`}>theme</h3>
            <div className="span-div">
              <div className="spans">
                <span
                  onClick={themeIndex}
                  data-value="0"
                  className={`${styles[0].span.styles[theme]}`}
                >
                  1
                </span>
                <span
                  onClick={themeIndex}
                  data-value="1"
                  className={`${styles[0].span.styles[theme]}`}
                >
                  2
                </span>
                <span
                  onClick={themeIndex}
                  data-value="2"
                  className={`${styles[0].span.styles[theme]}`}
                >
                  3
                </span>
              </div>
              <div className={`${styles[0].toggle.styles[theme]}`}>
                <span className={`${styles[0].toggleBtn.styles[theme]}`}></span>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles[0].sectionTwo.styles[theme]}`}>
          <div className={`${styles[0].screen.styles[theme]}`}>{value}</div>
        </section>
        <section className={`${styles[0].sectionThree.styles[theme]}`}>
          <article className="article-three">
            {data.map((item, index) => {
              const { id, num } = item;

              return (
                <span
                  data-value={num}
                  onClick={clickBtn}
                  className={`${styles[0].numbers.styles[theme]}`}
                  key={id}
                >
                  {num}
                </span>
              );
            })}
          </article>
          <article className="article-four">
            <span
              data-value="reset"
              onClick={clickBtn}
              className="numbers reset"
            >
              reset
            </span>
            <span
              data-value="equal"
              onClick={clickBtn}
              className="numbers equal"
            >
              =
            </span>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
