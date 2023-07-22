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

const SearchCity = () => {
    const history=useNavigate();
    const [weather,setWeather]= useState(null);
    const [notFound,setNotFound]= useState(0);
  const [city,setCity] = useState(null);
    const getWeather = useCallback(async()=> {
        try {
              const res =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`);
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
           <div className='date'>dat5465465454654654654654564e</div>
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
            <Weather weather={weather} notFound={notFound}/>
        </>

)}
export default SearchCity;