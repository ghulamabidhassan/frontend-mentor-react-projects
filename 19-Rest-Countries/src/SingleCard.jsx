import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import { useParams, Link } from "react-router-dom";

const SingleCard = () => {
  const { dark, loading, setLoading } = useGlobalContext();
  const { id } = useParams();
  const [single, setSingle] = useState();

  const fetchSingle = async () => {
    setLoading(true);
    let url = await `https://restcountries.com/v3.1/name/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setSingle(data[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchSingle();
  }, []);

  if (!single) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="single-card">
      <div className={`${dark ? "back-cont back-cont-dark" : "back-cont "}`}>
        <Link className="link back-link" to="/">
          <FaArrowLeft className="arrow-back" />
          <button className="back">back</button>
        </Link>
      </div>
      <div className="single-card-cont">
        <article className="card-left">
          <img src={single.flags.png} alt="" className="single-img" />
        </article>
        <article className="card-right">
          <h2 className="title">{single.name.common}</h2>
          <div className="card-right-one">
            <div>
              <span>
                <h3 className="native">Native Name:</h3>{" "}
                <h3 className="name-two">{single.name.common}</h3>
              </span>
              <span>
                <h3 className="native">Population:</h3>{" "}
                <h3 className="name-two">
                  {single.population.toLocaleString()}
                </h3>
              </span>
              <span>
                <h3 className="native">Region:</h3>{" "}
                <h3 className="name-two">{single.region}</h3>
              </span>
              <span>
                <h3 className="native">Sub Region:</h3>{" "}
                <h3 className="name-two">{single.subregion}</h3>
              </span>
              <span>
                <h3 className="native">Capital:</h3>{" "}
                <h3 className="name-two">{single.capital}</h3>
              </span>
            </div>
            <div>
              <span>
                <h3 className="native">Top Level Domain:</h3>{" "}
                <h3 className="name-two">{single.tld}</h3>
              </span>
              <span>
                <h3 className="native">Currencies:</h3>{" "}
                <h3 className="name-two">
                  {single && Object.values(single.currencies)[0].symbol}
                </h3>
              </span>
              <span>
                <h3 className="native">Languages:</h3>
                <h3 className="name-two">
                  {single &&
                    Object.values(single.languages).map((item, index) => {
                      return (
                        <span className="languages" key={index}>
                          {item}
                        </span>
                      );
                    })}
                </h3>
              </span>
            </div>
          </div>
          <div className="card-right-two">
            <div>
              <h2 className="border-title">Border Countries:</h2>
            </div>
            <div>
              {single.borders &&
                single.borders.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={`${dark ? "border border-dark" : "border "}`}
                    >
                      {item}
                    </span>
                  );
                })}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SingleCard;
