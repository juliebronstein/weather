import perfectDay from '../icons/perfect-day.svg';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import axios from 'axios';
import nameApp from '../utils/img/name.png'
import logo from '../utils/img/github.png'
import Weather from './Weather';
import Forecast from './Forecast';
import NotFound from './NotFound';
import Loader from './Loader';

const SearchCity = () => {
    // const apiKey="fe4feefa8543e06d4f3c66d92c61b69c"
     // const api ="https://api.openweathermap.org/data/2.5/weather?q="
    const apiKey="&key=N9LUTKS5U4DFC6MCLWYAW9SF2"
    const api ="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
    const unitGroup="?unitGroup=us"
    const type="&contentType=json"
    const history=useNavigate();
    const [weather,setWeather]= useState(null);
    const [notFound,setNotFound]= useState(0);
    const [city,setCity] = useState(null);
    const time = new Date().toDateString()
// const isDayTime = hours > 6 && hours < 20
    // useEffect(() => {
    //     foreCasting()
    // }, [city])
    
    // const foreCasting=()=>{
    //     const rest=axios.get(`${api}${city}${unitGroup}${apiKey}${type}`).then(res=>
    //     console.log("restiiiiii:",res))
    // }
    const getWeather = useCallback(async()=> {
        try {
              const res =await axios.get(`${api}${city}${unitGroup}${apiKey}${type}`);
              setWeather(res.data);
              console.log(res);
            }
        catch (err) {
              console.log(err);
              setNotFound(1);
          }
        },[city])
    const submit = (e)=> {
        e.preventDefault();
        getWeather();
        history("/weather");
    }
    useEffect(()=> {
        setWeather(null);
        setNotFound(0);
    },[]);
    return (
        <>
         <div className='fs-4 navbar-brand'>
           <div className='app-name'> <img src={nameApp} alt="Internet connection is poor"/> </div>
           <div className='date'>{time}</div>
           <div className='app-logo'><a href='/#'> <img className='logo' src={logo} alt="Internet connection is poor"/> </a> </div>
            </div>
            <form onSubmit={submit}>
                <InputGroup className="mt-4 mb-2">
                    <Form.Control
                    placeholder="City"
                    aria-label="City"
                    onChange={(e)=> setCity(e.target.value)}
                    />
                    <button className='my-btn'> Search</button>
                </InputGroup>
            </form>
            {weather?   <div className='d-flex flex-row'>
                <div className='col-sm-12'>
            <Weather weather={weather} notFound={notFound}/></div>
            <div className='col-sm-12'>
            <Forecast weather={weather} notFound={notFound}/></div>
            </div>:  (
            notFound ? <NotFound/>:<Loader/>
        ) }
         
        </>

)}
export default SearchCity;