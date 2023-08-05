import "./App.css";
import dotenv from "dotenv";
import mobile from "../public/pattern-bg-mobile.png";
import desktop from "../public/pattern-bg-desktop.png";
import { FaAngleRight } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

function App() {
  const [position, setPosition] = useState();
  const [url, setUrl] = useState(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${
      import.meta.env.VITE_API
    }&ipAddress=`
  );
  const [data, setData] = useState();
  const [input, setInput] = useState();

  // console.log(import.meta.env.VITE_API);
  // console.log(url);

  const fetchUrl = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
    setPosition([data.location.lat, data.location.lng]);
  };

  // console.log(data);

  const inputSearch = (e) => {
    let value = e.currentTarget.value;
    setInput(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_API
      }&ipAddress=${value}`
    );
  };

  const sendReq = () => {
    if (!input) {
      return;
    } else {
      setUrl(input);
    }
  };

  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  return (
    <div className="main">
      <div className="container">
        <div className="top">
          <img src={mobile} alt="" className="bg-mobile" />
          <img src={desktop} alt="" className="bg-desktop" />
          <div className="content">
            <h2 className="title">IP Address Tracker</h2>
            <div className="input-box">
              <input
                onChange={inputSearch}
                placeholder="Search for any IP address or domain"
                type="text"
                className="input"
              />
              <span onClick={sendReq} className="icons">
                <FaAngleRight className="icon" />
              </span>
            </div>
          </div>
          <div className="detail-cont">
            <div className="box">
              <h4 className="box-title">ip address</h4>
              <p className="details">{data ? data.ip : "-"}</p>
            </div>
            <div className="box">
              <h4 className="box-title">location</h4>
              <p className="details">
                {data ? data.location.city + ", " + data.location.country : "-"}
              </p>
            </div>
            <div className="box">
              <h4 className="box-title">timezone</h4>
              <p className="details">{data ? data.location.timezone : "-"}</p>
            </div>
            <div className="box">
              <h4 className="box-title">isp</h4>
              <p className="details">{data ? data.as.name : "-"}</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="map" id="map">
            {data ? (
              <MapContainer center={position} zoom={2} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    Current Location of IP <b>{data && data.query}</b>{" "}
                  </Popup>
                </Marker>
              </MapContainer>
            ) : (
              <h2 className="loading">
                Hold on a moment while we fetch your data...
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
