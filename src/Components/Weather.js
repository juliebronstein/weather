import { motion } from "framer-motion";
// import images
import { WeatherIcons } from "./icons";
import {ariConditionIcons} from './icons'
import { convertFToC } from "../utils/ConvertFToC";
import { CurrentWeather } from "./weatherComponents/CurrentWeather";
import { Header } from "./weatherComponents/Header";

const Weather = ({ weather }) => {
  const addrarry=weather.resolvedAddress.split(",")
const weatherHarry=weather?.currentConditions.datetime.split(":")
const temp=convertFToC(weather.currentConditions.temp)+"°C"
const realFeel=convertFToC(weather.currentConditions.feelslike)
const arr=addrarry[0]+","+addrarry[1]
const weatherH=weatherHarry[0]+":"+weatherHarry[1]
// const weatherSunrise=weather?.currentConditions?.sunrise.split(":")
// const weatherSunset=weather?.currentConditions?.sunset.split(":")
// const isDay = (weatherH[0]>weatherSunrise[0] && weatherH[0]<weatherSunset[0])?true:false

const icon=WeatherIcons[weather.currentConditions.icon]
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


  weather && console.log(weather);
  //! media query
  return (
    <motion.div
      className="weather-content me-lg-1 mb-sm-1 col-12  col-lg-6 d-flex flex-column  justify-content-center text-center p-3 g-3"
      variants={weatherVariants}
      initial="hidden"
      animate="visible"
    >
    
      
  <Header title="CURRENT WEATHER">

         <CurrentWeather input1={arr} input2={weatherH}/>
         <CurrentWeather input1={temp} input2={weather.currentConditions.conditions}/>
         <CurrentWeather icon={icon} />
</Header>
<Header title="AIR CONDITIONS">
<CurrentWeather input1={arr} input2={weatherH}/>
</Header>
      <div className="d-flex flex-column mb-3 mt-3 align-items-center justify-content-center ">
        <div className="header">AIR CONDITIONS</div>
        <div className="d-flex flex-column flex-md-row  justify-content-around col-12 title mb-4 mt-2 ">

        <div className="d-flex flex-row flex-lg-column  justify-content-center  col-lg-3 align-items-center justify-content-center">
            <div className="me-2 me-lg-0 header ">
              <span className=""><img  className='col-2' src={ariConditionIcons["realfeel"]} alt="Internet connection is poor" /> 
                </span>Real Feel</div>
            <div className="title">{realFeel}</div>
          </div>
       

          <div className="d-flex flex-row flex-lg-column justify-content-center  col-lg-3 align-items-center justify-content-center">
            <div className="me-2 me-lg-0 header">1dfgdfg</div>
            <div className="title">1fgdf</div>
          </div>
       

          <div className="d-flex flex-row flex-lg-column justify-content-center  col-lg-3 align-items-center justify-content-center">
            <div className="me-2 me-lg-0 header">1dfgdfg</div>
            <div className="title">1fgdf</div>
          </div>
          <div className="d-flex flex-row flex-lg-column justify-content-center  col-lg-3 align-items-center justify-content-center">
            <div className="me-2 me-lg-0 header">1dfgdfg</div>
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
