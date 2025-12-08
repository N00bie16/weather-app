import React from "react";

import {
  TiWeatherSunny,
  TiWeatherPartlySunny,
  TiWeatherCloudy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherStormy,
  TiWeatherSnow,
  TiWeatherWindy,
} from "react-icons/ti";

export function getWeatherIcon(code: number) {
  // Clear sky
  if (code === 0) {
    return {
      icon: React.createElement(TiWeatherSunny, { size: 30 }),
      label: "Sunny",
      image: "public/sunny.jpg",
    };
  }

  // Cloudy
  if ([1, 2, 3].includes(code)) {
    return {
      icon: React.createElement(TiWeatherPartlySunny, { size: 30 }),
      label: "Cloudy",
      image: "public/cloudy.jpg"
    };
  }

  // Fog / Mist
  if ([45, 48].includes(code)) {
    return {
      icon: React.createElement(TiWeatherCloudy, { size: 30 }),
      label: "Fog",
      image: "public/foggy.jpg"
    };
  }

  // Drizzle
  if ([51, 53, 55].includes(code)) {
    return {
      icon: React.createElement(TiWeatherShower, { size: 30 }),
      label: "Drizzle",
      image: "public/drizzle.jpg"
    };
  }

  // Rain
  if ([61, 63, 65].includes(code)) {
    return {
      icon: React.createElement(TiWeatherShower, { size: 30 }),
      label: "Rain",
      image: "public/rainy.jpg",
    };
  }

  // Heavy rain showers
  if ([80, 81, 82].includes(code)) {
    return {
      icon: React.createElement(TiWeatherDownpour, { size: 30 }),
      label: "Heavy Rain",
      image: "public/heavyRain.jpg"
    };
  }

  // Snow
  if ([71, 73, 75].includes(code)) {
    return {
      icon: React.createElement(TiWeatherSnow, { size: 30 }),
      label: "Snow",
      image: "public/snowy.jpg"
    };
  }

  // Thunderstorm
  if ([95, 96, 99].includes(code)) {
    return {
      icon: React.createElement(TiWeatherStormy, { size: 30 }),
      label: "Thunderstorm",
      image: "public/thunderstorm.jpg",
    };
  }

  // Fallback
  return {
    icon: React.createElement(TiWeatherWindy, { size: 30 }),
    label: "Windy",
    image: "public/windy.jpg",
  };
}
