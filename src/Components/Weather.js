import { motion } from "framer-motion";
import { WeatherIcons } from "./weatherComponents/icons";
import { convertFToC } from "../utils/ConvertFToC";
import { CurrentWeather } from "./weatherComponents/CurrentWeather";
import { Header } from "./weatherComponents/Header";
import { AriCondition } from "./weatherComponents/AriCondition";
import { HourlyCart } from "./weatherComponents/HourlyCart";

const Weather = ({ weather }) => {
  const addrarry = weather.resolvedAddress.split(",");
  const weatherHour = weather?.currentConditions.datetime.split(":");
  const addr = addrarry[0] + "," + addrarry[1];
  const weatherH = weatherHour[0] + ":" + weatherHour[1];
  const weatherHourly=weather?.days[0].hours
  const now=weatherHour[0]
  console.log("weatherHourly",weatherHourly)
  const parser=(time)=>{
const x=time.split(":")
return x[0]
  }
  // weatherHourly.map(dh=>(
  //   if()
  // ))
  // const weatherSunrise=weather?.currentConditions?.sunrise.split(":")
  // const weatherSunset=weather?.currentConditions?.sunset.split(":")
  // const isDay = (weatherH[0]>weatherSunrise[0] && weatherH[0]<weatherSunset[0])?true:false
   const weatherVariants = {
    hidden: {
      x: "1000vh",
    },
    visible: {
      x: 0,
      transition: { duration: 1.5, type: "spring" },
    },
  };
  var hourlyCart=[
    {id:1,title:"",value:"", icon:""}
  ]
  var currentWeather = [
      {id:1 , title:addr,value:weatherH},
      {id:2 , title:convertFToC(weather?.currentConditions?.temp) + "°C",value:weather?.currentConditions?.conditions},
      {id:3 , icon:WeatherIcons[weather.currentConditions.icon]},
  ];
  var ariCondition = [
      {id:1 , title:"Real Feel",value:convertFToC(weather.currentConditions?.feelslike) + "°C"},
      {id:2 , title:"Wind",value:weather.currentConditions?.windspeed+" m/s"},
      {id:4 , title:"Humidity",value:weather.currentConditions?.humidity+" %" },
      {id:3 , title:"Clouds",value:weather.currentConditions?.cloudcover+" %" },
  ];

  //! media query
  return (
    <motion.div
      className="weather-content me-lg-1 mb-sm-1 col-12  col-lg-6 d-flex flex-column 
      justify-content-center text-center p-3 g-3"
      variants={weatherVariants}
      initial="hidden"
      animate="visible"
    >
      <Header title="CURRENT WEATHER">
        {currentWeather.map(cw=>{
          return <CurrentWeather input1={cw?.title} input2={cw?.value} icon={cw?.icon} key={cw.index+cw.id+cw?.title} />
        })}
          </Header>
      <Header title="AIR CONDITIONS">
        {ariCondition.map(ac=>{
          return <AriCondition title={ac.title} value={ac.value} key={ac.title+ac.id} />
        }) }
      </Header>
      <Header title="TODAY'S FORECAST" subtitle="3 available forecasts">
     <HourlyCart input1="title" input2="value" icon="" />
    
      </Header>
    </motion.div>
  );
};
export default Weather;
