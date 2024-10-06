
import image from '../assets/Image.png';
import image2 from '../assets/Image-2.png';
import image3 from '../assets/sunny.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const FutureForecast = ({city}) => {
    const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const apiKey = '3eff71563e3734cceb572bf28d6c605b'; 
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const dailyForecast = response.data.list.filter((forecast) => forecast.dt_txt.includes('12:00:00'));
        setForecastData(dailyForecast);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchForecast();
  }, [city]); 

  if (!forecastData.length) {
    return <p>در حال بارگذاری پیش بینی هوا...</p>;
  }
  return (
    <div className="flex justify-between text-center">
            {forecastData.map((forecast, index) => (

               <div key={index} className="flex flex-col gap-1 border rounded-lg px-6 py-8 bg-gray-50">
                    <img  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
            alt="Weather icon" className='w-12 h-12 mx-auto' />
                     <p>{Math.round(forecast.main.temp)}°</p>
                     <p>{new Date(forecast.dt_txt).toLocaleDateString('fa-IR', { weekday: 'long' })}</p>
                </div>
                
            ))}
            </div>
  );
};

export default FutureForecast;
