
import image from '../assets/Image.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import persianDate from 'persian-date';
const WeatherDetails = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const currentDate = new persianDate().format('YYYY/MM/DD');
  const currentDay = new persianDate().format('DD MMMM');
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = '3eff71563e3734cceb572bf28d6c605b';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data); 
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);
  if (!weatherData) {
    return <p>در حال بارگذاری اطلاعات...</p>; 
  }
  const { main, wind, weather } = weatherData;
  return (
    <>
    <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} className='w-24 h-24 mx-auto' alt="" />
            <h1 className='text-[70px] font-bold text-center'>{main.temp}°</h1>
            <small dir='rtl' className='text-center'>{`${currentDay}`} {`${city}`} </small>
            <div className="flex flex-col border rounded-lg p-6 gap-7">
                <div className="flex justify-between">
                    <p className="">رطوبت</p>
                    <p dir='ltr' className="">{main.humidity} %</p>
                </div>
                <div className="flex justify-between">
                    <p className="">باد</p>
                    <p dir='ltr'  className="">{wind.speed} km/h</p>
                </div>
            </div>
    </>
  );
};

export default WeatherDetails;
