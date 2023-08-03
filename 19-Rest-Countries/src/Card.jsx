import { useGlobalContext } from "./Context";

const Card = (item) => {
  const {
    name: { common },
    population,
    flags: { png },
    region,
    capital,
  } = item;

  const { dark } = useGlobalContext();

  return (
    <div className={`${dark ? "card card-dark" : "card"}`}>
      <div className="card-img">
        <img src={png} alt="" className="img" />
      </div>
      <div className="card-content">
        <h2 className="country">{common}</h2>
        <span>
          <h3 className="card-title">population: </h3>
          <span
            className={`${dark ? "population card-items-dark" : "population "}`}
          >
            {population.toLocaleString()}
          </span>
        </span>
        <span>
          <h3 className="card-title">Region:</h3>
          <span className={`${dark ? "region  card-items-dark " : "region "}`}>
            {region}
          </span>
        </span>
        <span>
          <h3 className="card-title">Capital:</h3>
          <span className={`${dark ? "capital  card-items-dark" : "capital"}`}>
            {capital}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
