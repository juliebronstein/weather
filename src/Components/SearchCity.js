import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import nameApp from "../utils/img/name.png";
import logo from "../utils/img/github.png";
import Weather from "./Weather";
import Forecast from "./Forecast";
import NotFound from "./NotFound";
import Loader from "./Loader";
import { FixDate } from "./weatherComponents/Date";
import { api, apiKey, type, unitGroup } from "./service/weather";

const SearchCity = () => {
   const [weather, setWeather] = useState(null);
  const [notFound, setNotFound] = useState(0);
  const [loading, setLoading] = useState("starter");
  const [city, setCity] = useState("");
  var dateTime=FixDate()
  
  const getWeather = useCallback(async () => {
   
    try {
      const res = await axios.get(`${api}${city}${unitGroup}${apiKey}${type}`);
      setWeather(res.data);
    } catch (err) {
      setWeather("")
      setNotFound(1);
    }
    setLoading("starter")
  }, [city]);

  const submit = (e) => {
    setWeather("")
    setLoading("loading")
    e.preventDefault();
    getWeather();
  };
  useEffect(() => {
    setCity("")
    setWeather(null);
    setNotFound(0);
  }, []);
  return (
    <>
      <div className="fs-4 navbar-brand d-flex flex-row justify-space-between align-baseline">
        <div className="app-name col-sm-3 col-md-1">
          {" "}
          <img src={nameApp} alt="Internet connection is poor" />{" "}
        </div>
        <div className="date header app-header text-wrap col-6">{dateTime}</div>
        <div className="col-sm-2 col-md-1 ">
          <a href="https://github.com/samanta580/weather">
            {" "}
            <img
              className="col-6"
              src={logo}
              alt="Internet connection is poor"
            />{" "}
          </a>{" "}
        </div>
      </div>
      <form onSubmit={submit}>
        <InputGroup className="mt-4 mb-2">
          <Form.Control
            placeholder="City"
            aria-label="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="my-btn"> Search</button>
        </InputGroup>
      </form>
      {weather ? (<>
        <div className="d-flex justify-content-center flex-column flex-lg-row ">
          <Weather weather={weather} />
          <Forecast days={weather?.days} />
        </div>
          </>
      ) : notFound ? (
        <NotFound />
      ) : (
        <Loader type={loading}/>
      )}
    </>
  );
};
export default SearchCity;
