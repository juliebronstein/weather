import axios from "axios";
import { useCallback } from "react";
const apiKey="fe4feefa8543e06d4f3c66d92c61b69c"
export const getWeather=async(city)=>{
    const rest=""
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`).then(res=>{
         console.log(res.status)
    })
    return  rest;
}

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