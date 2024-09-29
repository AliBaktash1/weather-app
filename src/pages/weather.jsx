import React from 'react'
import Header from '../components/Header'
import WeatherDetails from '../components/WeatherDetails'
import FutureForecast from '../components/FutureForecast'
import Footer from '../components/Footer'

const Weather = () => {
  return (
    <div>
      <Header/>
     <main className='flex justify-center items-center'>
        <div className="flex flex-col w-[630px] gap-2 ">
            <WeatherDetails/>
            <h1>روزهای آینده تهران</h1>
            <FutureForecast/>
        </div>
     </main>
       <Footer/>
    </div>
  )
}

export default Weather
