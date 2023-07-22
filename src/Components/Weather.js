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

const Weather = ({ weather }) => {
  const addr=weather.resolvedAddress.split(",")
const weatherH=weather?.currentConditions.datetime.split(":")
const weatherSunrise=weather?.currentConditions?.sunrise.split(":")
const weatherSunset=weather?.currentConditions?.sunset.split(":")
const icon=weather.currentConditions.icon
const temp=((weather.currentConditions.temp-32)*5/9).toPrecision(4) 
const isDay = (weatherH[0]>weatherSunrise[0] && weatherH[0]<weatherSunset[0])?"isDay":"isNight"
console.log("icon",icon)

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
    "partly-cloudy-day": rain,
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
      className="weather-content me-lg-1 mb-sm-1 col-12  col-lg-6 d-flex flex-column  justify-content-center text-center p-3 g-3"
      variants={weatherVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="d-flex flex-column justify-content-center ">
        <div className="header">CURRENT WEATHER</div>
        <div className="d-flex flex-column flex-md-row  justify-content-around col-12 title mb-4 mt-2  ">


          <div className="d-flex flex-row flex-lg-column  justify-content-center  col-lg-4">
            <div className="title header-font">{addr[0]},{addr[1]}</div>
            <div className="header title-font">{weatherH[0]}:{weatherH[1]}</div>
          </div>
       

          <div className="d-flex flex-row flex-lg-column justify-content-center  col-lg-4">
            <div className="title">{temp}°C</div>
            <div className="header">{weather.currentConditions.conditions}</div>
          </div>
       

          <div className="d-flex flex-row flex-lg-column justify-content-center  col-lg-4">
          <img className='weather-img' src={WeatherIcons[weather.currentConditions.icon]} alt="" />
          {console.log(WeatherIcons[weather.currentConditions.icon])}
           
          </div>
       


        </div>
      </div>
      <div className="d-flex flex-column justify-content-center mb-3 mt-3  ">
        <div className="header">AIR CONDITIONS</div>
        <div className="d-flex flex-column flex-md-row  justify-content-around col-12 title mb-4 mt-2 ">
        <div className="d-flex flex-row flex-lg-column  justify-content-center  col-lg-3">
            <div className="header">1dfgdfg</div>
            <div className="title">1fgdf</div>
          </div>
       

          <div className="d-flex flex-row flex-lg-column justify-content-center  col-lg-3">
            <div className="header">1dfgdfg</div>
            <div className="title">1fgdf</div>
          </div>
       

          <div className="d-flex flex-row flex-lg-column justify-content-center  col-lg-3">
            <div className="header">1dfgdfg</div>
            <div className="title">1fgdf</div>
          </div>
          <div className="d-flex flex-row flex-lg-column justify-content-center  col-lg-3">
            <div className="header">1dfgdfg</div>
            <div className="title">1fgdf</div>
          </div>
       
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center mb-3 mt-2  ">
        <div className="header">TODAY'S FORECAST</div>
        <div className="subheader">3 available forecasts</div>
        <div className="d-flex flex-row justify-content-center title">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>

      {/* <h3 className='fs-4 fw-bold'>React Weather App</h3>
            <div className="temp d-flex justify-content-between align-items-center my-4">
                <div className='fs-5'> <span className='fs-2'>{`${Math.floor(weather?.currentConditions?.temp - 273)}°C`}</span>|{weather.currentConditions.conditions}</div>
                <img className='weather-img' src={WeatherIcons[weather.currentConditions.icon]} alt="" />
            </div>
            <span className="city-info fs-2 fw-bold my-2">{weather.resolvedAddress}</span>
            <span className="text-start my-2">Weather info</span>
            <div className="weather-info d-flex flex-wrap w-100 text-center"> */}
      {/* {weatherInfo.map(ele=> (
                    <div className='d-flex justify-content-center align-items-center p-2 w-50' key={ele.id}>
                        <img className=' img-fluid me-3' src={ele.val} alt="" />
                        <div className="d-flex flex-column justify-content-center align-items-center g-2">
                            <span>{ele.num}</span>
                            <span>{ele.name}</span>
                        </div>
                    </div>
                ))}
            </div> */}
    </motion.div>
  );
};
export default Weather;
