
import { container,item } from "../utils/Animate";
import { motion } from "framer-motion";
const Forecast = ({ days }) => {
 
  const allDays=[...days]
  const forecastDays=allDays.slice(1,7)
  console.log(forecastDays)
  forecastDays.map(i=>{
    weekdays:i.conditions,

  })

  //! media query
  return (
    <motion.div
      className="weather-content col-12 mb-sm-1 col-lg-6 d-flex flex-column justify-content-center text-center p-3 g-3"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="header">WEEKLY FORECAST</div>

      <div className="d-flex flex-column flex-lg-row justify-content-center forecast-days  col-12">
        <div className="d-flex flex-column col-12 col-lg-4 week-days">
          
          <div className="title col-12 col-sm-12 ">week days</div>
          <div className="subtitle col-12 col-sm-12"> weather</div>
        </div>
        <div className="d-flex flex-row flex-wrap  col-12 col-lg-8 ">
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
