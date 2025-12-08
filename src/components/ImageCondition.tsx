import type React from "react";

import { getWeatherIcon } from "../utils/weatherIcon";

interface ImageConditionProps {
  day: string;
  time: string;
  temp: number;
  weatherCode: number;
  city: string;
  country_code: string;
}

const ImageCondition: React.FC<ImageConditionProps> = ({
    day, time, temp, weatherCode, city, country_code
}) => {

    const { icon, label, image } = getWeatherIcon(weatherCode);
    
    return (
      <>
        <img className="w-full h-full rounded-4xl brightness-50" src={image} alt={label} />

        <div className="flex flex-col justify-center items-end gap-2 text-white absolute top-10 right-5">
            <div className="text-2xl font-bold">{day}</div>
            <div>{time}</div>
            <div>{city}, {country_code}</div>
        </div>
        
        <div className="flex flex-col justify-start items-start gap-2 text-white absolute bottom-5 left-5">
            <div className="relative left-5 bottom-5 scale-200">{icon}</div>
            <div className="text-5xl font-bold">{temp}°C</div>
            <div>{label}</div>
        </div>
      </>
    );
};

export default ImageCondition;