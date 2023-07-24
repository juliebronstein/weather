import { convertFToC } from "../../utils/ConvertFToC";

export const AriconditionsArry=(weather)=>{
    return [
        {
          id: 1,
          title: "Real Feel",
          value: convertFToC(weather?.feelslike) ,
        },
        {
          id: 2,
          title: "Wind",
          value: weather?.windspeed + " m/s",
        },
        {
          id: 4,
          title: "Humidity",
          value: weather?.humidity + " %",
        },
        {
          id: 3,
          title: "Clouds",
          value: weather?.cloudcover + " %",
        },
      ];
      
}