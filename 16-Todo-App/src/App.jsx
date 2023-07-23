import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [moon, setMoon] = useState(false);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [final, setFinal] = useState(data);

  useEffect(() => {
    setFinal(data);
  }, [data]);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const setList = () => {
    let data = {
      active: true,
      desc: name,
      id: Date.now(),
    };

    setData((oldData) => {
      return [...oldData, data];
    });

    setName("");
  };

  const setComplete = (id) => {
    const filter = data.map((item) => {
      if (item.id === id) {
        item.active = !true;
        return item;
      }
    });
    setData((old) => {
      return [...old];
    });
  };

  const deleteItem = (id) => {
    const filterItems = data.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setData(filterItems);
  };

  const itemsLeft = () => {
    const balance = final.filter((item) => {
      return item.active === true;
    });
    return balance.length;
  };

  const showAll = () => {
    let all = data.filter((item) => {
      return item;
    });

    setFinal(all);
  };

  const showActive = () => {
    let active = data.filter((item) => {
      return item.active === true;
    });

    setFinal(active);
  };

  const showComplete = () => {
    let complete = data.filter((item) => {
      return item.active === false;
    });
    if (complete.length > 0) {
      setFinal(complete);
    } else {
      setFinal((old) => {
        return [...old];
      });
    }
  };

  const clearComplete = () => {
    let clear = data.filter((item) => {
      return item.active === true;
    });

    setData(clear);
  };

  return (
    <div className={`${!moon ? "main" : "main dark"}`}>
      {moon ? (
        <>
          <img
            src="https://res.cloudinary.com/dzci9azc2/image/upload/v1690132074/todo%20app/bg-desktop-dark_qvdbth.jpg"
            alt=""
            className="bg-desktop-dark bg-desktop"
          />
          <img
            src="https://res.cloudinary.com/dzci9azc2/image/upload/v1690132074/todo%20app/bg-mobile-dark_huuk2u.jpg"
            alt=""
            className="bg-mobile-dark bg-mobile"
          />
        </>
      ) : (
        <>
          <img
            src="https://res.cloudinary.com/dzci9azc2/image/upload/v1690132074/todo%20app/bg-desktop-light_rp2uym.jpg"
            alt=""
            className="bg-desktop-light bg-desktop"
          />
          <img
            src="https://res.cloudinary.com/dzci9azc2/image/upload/v1690132073/todo%20app/bg-mobile-light_axniqv.jpg"
            alt=""
            className="bg-mobile-light bg-mobile"
          />
        </>
      )}

      <div className="container">
        <article className="article-one">
          <h2 className="logo-title">todo</h2>
          {moon ? (
            <img
              onClick={() => {
                setMoon(!moon);
              }}
              src="https://res.cloudinary.com/dzci9azc2/image/upload/v1690132073/todo%20app/icon-moon_kx7ktv.svg"
              alt=""
              className="moon"
            />
          ) : (
            <img
              onClick={() => {
                setMoon(!moon);
              }}
              src="https://res.cloudinary.com/dzci9azc2/image/upload/v1690132073/todo%20app/icon-sun_tr3x1r.svg"
              alt=""
              className="sun"
            />
          )}
        </article>
        <article className={`${!moon ? "article-two" : "article-two dark"}`}>
          <div className=" circle "></div>
          <input
            value={name}
            onChange={updateName}
            type="text"
            className={`${!moon ? "input" : "input dark"}`}
            placeholder="Create a new todo..."
          />
          <button
            onClick={setList}
            className={`${!name ? "btn-add events-none" : "btn-add"}`}
          >
            submit
          </button>
        </article>
        <section>
          <article
            className={`${
              !moon ? "article-three lists" : "article-three lists dark"
            }`}
          >
            {final.map((item, index) => {
              return (
                <div key={index} className="list">
                  <span
                    className="span "
                    onClick={() => {
                      setComplete(item.id);
                    }}
                  >
                    <div
                      className={`${
                        item.active ? "circle " : "circle circle-bg"
                      }`}
                    >
                      <div className="circle-box ">
                        <img
                          src="https://res.cloudinary.com/dzci9azc2/image/upload/v1690132073/todo%20app/icon-check_b764or.svg"
                          alt=""
                          className="check"
                        />
                      </div>
                    </div>
                    <p
                      className={`${
                        item.active ? "desc" : "desc line-through"
                      } `}
                    >
                      {item.desc}
                    </p>
                  </span>
                  <img
                    onClick={() => {
                      deleteItem(item.id);
                    }}
                    src="https://res.cloudinary.com/dzci9azc2/image/upload/v1690132073/todo%20app/icon-cross_hd2low.svg"
                    alt=""
                    className="clear"
                  />
                </div>
              );
            })}
            {data.length > 0 && (
              <footer>
                <div className="items-left">{itemsLeft()} items left</div>
                <div className="flex">
                  <span onClick={showAll}>all</span>
                  <span onClick={showActive}>active</span>
                  <span onClick={showComplete}>completed</span>
                </div>
                <div className="clear-completed" onClick={clearComplete}>
                  {" "}
                  clear completed
                </div>
              </footer>
            )}
          </article>
          {data.length > 0 && (
            <article
              className={`${
                !moon
                  ? "article-four mobile-footer"
                  : "article-four mobile-footer dark"
              }`}
            >
              <div className="flex">
                <span onClick={showAll}>all</span>
                <span onClick={showActive}>active</span>
                <span onClick={showComplete}>completed</span>
              </div>
            </article>
          )}
        </section>
        {data.length > 1 && (
          <article className="drag"> Drag and drop to reorder list</article>
        )}
      </div>
    </div>
  );
}

export default App;
