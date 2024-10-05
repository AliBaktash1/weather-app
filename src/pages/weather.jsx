
import Header from '../components/Header'
import WeatherDetails from '../components/WeatherDetails'
import FutureForecast from '../components/FutureForecast'
import Footer from '../components/Footer'
import { useState } from "react";
const Weather = () => {
  const [selectedCity, setSelectedCity] = useState('tehran');

  // Function to handle city changes from the Header
  const handleCityChange = (city) => {
    setSelectedCity(city);
    // You might want to call the API here to fetch new weather data based on the selected city
  };
  return (
    <div>
      <Header onCityChange={handleCityChange} />
     <main className='flex justify-center items-center'>
        <div className="flex flex-col w-[630px] gap-2 ">
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
