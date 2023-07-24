export const apiKey = "&key=N9LUTKS5U4DFC6MCLWYAW9SF2";
export const api =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
export const unitGroup = "?unitGroup=us";
export const type = "&contentType=json";
 // const apiKey="fe4feefa8543e06d4f3c66d92c61b69c"
  // const api ="https://api.openweathermap.org/data/2.5/weather?q="

// export const getWeather = useCallback(async(city,setWeather,setNotFound)=> {
//     try {
//           const res =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
//           setWeather(res.data);
//           console.log(res);
//         }
//     catch (err) {
//           console.log(err);
//           setNotFound(1);
//       }
//     },[city])