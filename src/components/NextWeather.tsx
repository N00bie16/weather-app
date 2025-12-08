import React from "react";

import { getWeatherIcon } from "../utils/weatherIcon";

interface NextWeatherProps {
  day: string;
  temp: number;
  weatherCode: number;
}

const NextWeather: React.FC<NextWeatherProps> = ({ day, temp, weatherCode }) => {

  const { icon }= getWeatherIcon(weatherCode);

  return (
    <div className="flex flex-col items-center text-center text-white gap-2">
      <div>{icon}</div>
      <div>{day}</div>
      <div>{temp}°C</div>
    </div>
  );
};

export default NextWeather;
