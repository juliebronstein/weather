import axios from "axios";
const apiKey="fe4feefa8543e06d4f3c66d92c61b69c"
export const getWeather=async(city)=>{
    const rest=""
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`).then(res=>{
         console.log(res.status)
    })
    return  rest;
}