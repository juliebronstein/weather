
import { container,item } from "../utils/Animate";
import { motion } from "framer-motion";
import { WeatherIcons } from "./weatherComponents/icons";
import { AriconditionsArry } from "./weatherComponents/AriconditionsArry";
import { AriCondition } from "./weatherComponents/AriCondition";
const Forecast = ({ days }) => {

 const data=[...days]
  const allDays=data.slice(1,7)

  const forecastDays=[]
  allDays.map(i=>
    (forecastDays.push({
      id:i.datetime,
      datetime:i.datetime,
      weekdays:i.conditions,
      icon:WeatherIcons[i.icon] ,
      data:AriconditionsArry(i)
    }))
    )
console.log("forecastDays",forecastDays)
  //! media query
  return (
    <motion.div
      className="weather-content col-12 mb-sm-1 col-lg-6 d-flex flex-column justify-content-center flex-start text-center p-3 g-3"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="header mb-2">WEEKLY FORECAST</div>
      {forecastDays.map(fd=>{
        return(<>
         <div className="d-flex flex-column flex-lg-row justify-content-center forecast-days mb-2 col-12">
        <div className="d-flex flex-column col-12 col-lg-4 week-days p-1 ">
          
          <div className="title col-12 col-sm-12 mt-3 ">{fd.datetime}</div>
          <div className="subtitle col-12 col-sm-12">
          <span className=""><img  className='col-2 me-0 me-md-1' src={fd.icon} alt="Internet connection is poor" /> 
        </span>
            {fd.weekdays} </div>
        </div>
     
       <div className="d-flex flex-row flex-wrap "> {
        fd.data.map(i=>{
          return  <AriCondition icon={i.icon} title={i.value} className="col-6 col-lg-6 font-size-12 mb-2 mt-2 title" key={i.id+"_index"}></AriCondition>
        })
      }      
        </div>

      </div>
        </>)
      })
      }
     
    </motion.div>
  );
};
export default Forecast;
