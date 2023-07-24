import { motion } from "framer-motion";
import { WeatherIcons } from "./weatherComponents/icons";
import { convertFToC } from "../utils/ConvertFToC";
import { CurrentWeather } from "./weatherComponents/CurrentWeather";
import { Header } from "./weatherComponents/Header";
import { AriCondition } from "./weatherComponents/AriCondition";
import { HourlyCart } from "./weatherComponents/HourlyCart";

const Weather = ({ weather }) => {
  const parser = (time, count) => {
    const x = time.slice(0, count);
    return x;
  };
  const hourlyCart=[]
  const addr = weather.resolvedAddress.split(",").slice(0, 2).join(",");
  const weatherTime = parser(weather?.currentConditions.datetime, 2);
  const weatherH = parser(weather?.currentConditions.datetime, 5);
  const weatherHourly = weather?.days[0].hours;
 
  weatherHourly.map((dh,index) => {
     var dhT;
    dhT = parser(dh.datetime, 2);
    if (weatherTime < dhT) {
      hourlyCart.push({
        id:index,
        title:parser(dh.datetime, 5),
        icon:WeatherIcons[dh.icon],
        value:convertFToC(dh.temp)
      })
    }
  });
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




  var currentWeather = [
    { id: 1, title: addr, value: weatherH },
    {
      id: 2,
      title: convertFToC(weather?.currentConditions?.temp) ,
      value: weather?.currentConditions?.conditions,
    },
    { id: 3, icon: WeatherIcons[weather.currentConditions.icon] },
  ];
  var ariCondition = [
    {
      id: 1,
      title: "Real Feel",
      value: convertFToC(weather.currentConditions?.feelslike) ,
    },
    {
      id: 2,
      title: "Wind",
      value: weather.currentConditions?.windspeed + " m/s",
    },
    {
      id: 4,
      title: "Humidity",
      value: weather.currentConditions?.humidity + " %",
    },
    {
      id: 3,
      title: "Clouds",
      value: weather.currentConditions?.cloudcover + " %",
    },
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
        {currentWeather.map((cw) => {
          return (
            <CurrentWeather
              input1={cw?.title}
              input2={cw?.value}
              icon={cw?.icon}
              key={cw.index + cw.id + cw?.title}
            />
          );
        })}
      </Header>
      <Header title="AIR CONDITIONS">
        {ariCondition.map((ac) => {
          return (
            <AriCondition
              title={ac.title}
              value={ac.value}
              key={ac.title + ac.id}
            />
          );
        })}
      </Header>
      <Header title="TODAY'S FORECAST" subtitle={`${hourlyCart.length} available forecasts`} className="justify-content-center">
      {hourlyCart.length>0&& 
      hourlyCart?.map(i=>{
        return(
          
          <HourlyCart title={i.title} value={i.value} icon={i.icon}  key={i.id+"_index"}/>
        )
      })}
      </Header>
    </motion.div>
  );
};
export default Weather;
