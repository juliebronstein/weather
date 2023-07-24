import { convertFToC } from "../../utils/ConvertFToC";

export const AriconditionsArry=(weather)=>{
  console.log("weather?.feelslike",weather?.feelslike)
    return [
        {
          id: 1,
          title: "Real Feel",
          value: convertFToC(weather?.feelslike) ,
          icon:"Real Feel",
        },
        {
          id: 2,
          title: "Wind",
          value: weather?.windspeed + " m/s",
          icon: "Wind"
        },
        {
          id: 4,
          title: "Humidity",
          value: weather?.humidity + " %",
          icon:"Humidity"
        },
        {
          id: 3,
          title: "Clouds",
          value: weather?.cloudcover + " %",
          icon: "Clouds"
        },
      ];
      
}