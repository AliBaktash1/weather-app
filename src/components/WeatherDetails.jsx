import React from 'react';
import image from '../assets/image.png';

const WeatherDetails = () => {
  return (
    <>
    <img src={image} className='w-24 h-24 mx-auto' alt="" />
            <h1 className='text-[80px] font-bold text-center'>27°</h1>
            <small className='text-center'>تهران 23 شهریور</small>
            <div className="flex flex-col border rounded-lg p-6 gap-7">
                <div className="flex justify-between">
                    <p className="">رطوبت</p>
                    <p dir='ltr' className="">44 %</p>
                </div>
                <div className="flex justify-between">
                    <p className="">باد</p>
                    <p dir='ltr'  className="">10 km/h</p>
                </div>
            </div>
    </>
  );
};

export default WeatherDetails;
