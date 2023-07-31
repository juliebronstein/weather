import { container, item } from "../utils/Animate";
import { motion } from "framer-motion";
import { WeatherIcons } from "./weatherComponents/icons";
import { AriconditionsArry } from "./weatherComponents/AriconditionsArry";
import { AriCondition } from "./weatherComponents/AriCondition";
import { useEffect } from "react";
import DailyForecast from "./weatherComponents/DailyForecast";
const Forecast = ({ days }) => {
  const weeklyDays = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date(date);
    const currentDayOfWeek = currentDate.getDay();
    return daysOfWeek[currentDayOfWeek];
  };

  const data = [...days];
  const allDays = data.slice(1, 7);

  const forecastDays = [];
  allDays.map((i) =>
    forecastDays.push({
      id: i.datetime,
      datetime: weeklyDays(i.datetime),
      weekdays: i.conditions,
      icon: WeatherIcons[i.icon],
      data: AriconditionsArry(i),
    })
  );

  //! media query
  return (
    <motion.div
      className="weather-content col-12 mb-sm-1 col-lg-6 d-flex flex-column justify-content-center flex-start text-center p-3 g-3"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="header mb-2">WEEKLY FORECAST</div>
      {forecastDays.map((fd) => {
        return (
          <>
            <DailyForecast daily={fd} key={fd.conditions+"_"+fd.id+"_+"}>
              <div className="d-flex flex-row flex-wrap ">
                {" "}
                {fd.data.map((i,index) => {
                  return (
                    <AriCondition
                      icon={i.icon}
                      title={i.value}
                      className="col-6 col-lg-6 font-size-12 mb-2 mt-2 title"
                      key={i.id+"_index"+i.value+index }
                    > </AriCondition>
                  );
                })}
              </div>
            </DailyForecast>
          </>
        );
      })}
    </motion.div>
  );
};
export default Forecast;
