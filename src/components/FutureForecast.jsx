import React from 'react';
import image from '../assets/image.png';
import image2 from '../assets/image-2.png';
import image3 from '../assets/sunny.png';

const FutureForecast = () => {
  return (
    <div className="flex justify-between text-center">
                <div className="flex flex-col gap-1 border rounded-lg px-6 py-8 bg-gray-50">
                    <img src={image3} alt="" className='w-12 h-12 mx-auto' />
                    <p className="">27°</p>
                    <p className="">شنبه</p>
                </div>
                <div className="flex flex-col gap-1 border rounded-lg px-6 py-8 bg-gray-50">
                    <img src={image2} alt="" className='w-12 h-12 mx-auto'/>
                    <p className="">27°</p>
                    <p className="">یکشنبه</p>
                </div>
                <div className="flex flex-col gap-1 border rounded-lg px-6 py-8 bg-gray-50">
                    <img src={image} alt="" className='w-12 h-12 mx-auto'/>
                    <p className="">27°</p>
                    <p className="">دوشنبه</p>
                </div>
                <div className="flex flex-col gap-1 border rounded-lg px-6 py-8 bg-gray-50">
                <img src={image2} alt="" className='w-12 h-12 mx-auto'/>
                    <p className="">27°</p>
                    <p className="">سه شنبه</p>
                </div>
                <div className="flex flex-col gap-1 border rounded-lg px-6 py-8 bg-gray-50">
                <img src={image3} alt="" className='w-12 h-12 mx-auto'/>
                    <p className="">27°</p>
                    <p className="">چهارشنبه</p>
                </div>
               
            </div>
  );
};

export default FutureForecast;
