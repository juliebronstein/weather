import { motion } from "framer-motion";
import Loader from "./Loader";
import NotFound from "./NotFound";
// import images
import sunset from "../icons/temp.svg";
import humidity from "../icons/humidity.svg";
import wind from "../icons/wind.svg";
import pressure from "../icons/pressure.svg";
import sunny from "../icons/sunny.svg";
import night from "../icons/night.svg";
import day from "../icons/day.svg";
import cloudyNight from "../icons/cloudy-night.svg";
import cloudy from "../icons/cloudy.svg";
import perfectDay from "../icons/perfect-day.svg";
import rain from "../icons/rain.svg";
import rainNight from "../icons/rain-night.svg";
import storm from "../icons/storm.svg";
import smoke from "../icons/smoke.svg";
import mist from "../icons/mist.svg";

const Forecast = ({ weather, notFound }) => {
  // const isDay = "isDay"

  // const getTime = (time) => {
  //     return `${new Date(time * 1000).getHours()} : ${new Date(time * 1000).getMinutes()}`;
  // }
  const weatherVariants = {
    hidden: {
      x: "1000vh",
    },
    visible: {
      x: 0,
      transition: { duration: 1.5, type: "spring" },
    },
  };
  // var weatherInfo = [
  //     {id:1 , name:(isDay)?'sunset':'sunrise' , val:sunset , num:`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`},
  //     {id:2 , name:'humidity' , val:humidity , num:weather?.main.humidity},
  //     {id:3 , name:'wind' , val:wind , num:weather?.wind.speed},
  //     {id:4 , name:'pressure' , val:pressure , num:weather?.main.pressure }
  // ];
  const WeatherIcons = {
    "01d": sunny,
    "01n": night,
    "02d": day,
    "02n": cloudyNight,
    "03d": cloudy,
    "03n": cloudy,
    "04d": perfectDay,
    "04n": cloudyNight,
    "09d": rain,
    "09n": rainNight,
    "10d": rain,
    "10n": rainNight,
    "11d": storm,
    "11n": storm,
    "50d": smoke,
    "50n": mist,
  };

  weather && console.log(weather);
  //! media query
  return (
    <motion.div
      className="weather-content col-12 mb-sm-1 col-lg-6 d-flex flex-column justify-content-center text-center p-3 g-3"
      variants={weatherVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="header">WEEKLY FORECAST</div>

      <div className="d-flex flex-column flex-lg-row justify-content-center forecast-days  col-12">
        <div className="d-flex flex-column col-12 col-lg-4 week-days">
          <div className="title col-12 col-sm-12 ">week days</div>
          <div className="subtitle col-12 col-sm-12"> weather</div>
        </div>
        <div className="d-flex flex-row flex-wrap  col-12 col-md-8 ">
          <div className="d-flex col-6">111111?##</div>
          <div className="d-flex col-6">222222?##</div>
          <div className="d-flex col-6">333333?##</div>
          <div className="d-flex col-6">444444?##</div>
        </div>
      </div>
    </motion.div>
  );
};
export default Forecast;
