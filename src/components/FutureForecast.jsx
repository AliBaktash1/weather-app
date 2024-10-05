
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
        const apiKey = 'f0f549c5beda7f8c58510f44fe5aef7c'; // Replace with your OpenWeather API key
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        // Extract data for the upcoming days (filtering for one forecast per day)
        const dailyForecast = response.data.list.filter((forecast) => forecast.dt_txt.includes('12:00:00'));
        setForecastData(dailyForecast); // Set the filtered forecast data
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchForecast();
  }, [city]); // Fetch data whenever the city changes

  if (!forecastData.length) {
    return <p>در حال بارگذاری پیش بینی هوا...</p>; // Show loading state
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
