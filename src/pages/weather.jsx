
import Header from '../components/Header'
import WeatherDetails from '../components/WeatherDetails'
import FutureForecast from '../components/FutureForecast'
import Footer from '../components/Footer'
import { useState } from "react";
const Weather = () => {
  const [selectedCity, setSelectedCity] = useState('tehran');


  const handleCityChange = (city) => {
    setSelectedCity(city);

  };
  return (
    <div>
      <Header onCityChange={handleCityChange} />
     <main className='flex justify-center items-center'>
        <div className="flex flex-col w-[630px] gap-[8.4px] ">
            <WeatherDetails city={selectedCity}/>
            <h1>روزهای آینده {selectedCity}</h1>
            <FutureForecast city={selectedCity}/>
        </div>
     </main>
       <Footer/>
    </div>
  )
}

export default Weather
