import { FaSearch } from "react-icons/fa";
import Card from "./Card";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { dark, data, loading, input, inputSearch, selectRegion } =
    useGlobalContext();

  return (
    <div className={`${dark ? "main main-dark" : "main"}`}>
      <section className="search-section">
        <div
          className={`${dark ? "search-box search-box-dark" : "search-box"}`}
        >
          <FaSearch className="search" />
          <input
            onChange={inputSearch}
            value={input}
            className={`${dark ? "input-dark" : ""}`}
            placeholder="Search for a country...."
            type="text"
          />
        </div>
        <div className="filter-box ">
          <select
            onChange={selectRegion}
            className={`${dark ? "filter-box-dark" : ""}`}
            name="filter"
            id=""
          >
            <option value="all">Filter By Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
      <section className="cards">
        {loading ? (
          <h2 className="loading">Loading....</h2>
        ) : (
          data.map((item, index) => {
            const {
              name: { common },
            } = item;

            return (
              <Link key={index} className="link" to={`single/${common}`}>
                <Card {...item}></Card>
              </Link>
            );
          })
        )}
      </section>
    </div>
  );
};

export default HomePage;
