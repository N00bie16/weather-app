import { useEffect, useState } from 'react';
import { getWeather } from './api/weather';
import type { WeatherResponse } from './types/weather.d.ts';
import { geoCoding } from './api/geoCoding.ts';

import Conditions from './components/Conditions';
import ImageCondition from './components/ImageCondition';
import NextWeather from './components/NextWeather';
import Modal from './components/Modal.tsx';


function App() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coordinate, setCoordinate] = useState({lat: -6.34, lon: 106.74})
  const [location, setLocation] = useState({city: "Pamulang", country_code: "ID"})

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather(coordinate.lat, coordinate.lon);
      setWeather(data);
    };

    fetchData();
  }, [coordinate]);

  if (!weather) {
    return <p className="text-white">Loading weather...</p>;
  }
  
  const handleSearch = async (inputValue: string) => {
    try {
    const geo = await geoCoding(inputValue);

    if (!geo?.results || geo.results.length === 0) {
      console.log("Kota tidak ditemukan");
      return;
    }

    const result = geo.results[0];

    setCoordinate({
      lat: result.latitude,
      lon: result.longitude,
    });

    setLocation({
      city: result.name,
      country_code: result.country_code,
    });

    setIsModalOpen(false);

  } catch (err) {
    console.log("Gagal mencari kota", err);
  }
  }
  
  const handleClick = () => {
    setIsModalOpen(true);
  }

  const handleClose = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="h-screen w-screen bg-zinc-800 flex flex-col md:flex-row justify-center items-center overflow-hidden">

      <div className="h-70 w-[90%] z-10 relative -top-5 shadow-2xl/20 rounded-4xl md:w-90 md:h-105 md:left-8">
        <ImageCondition 
          day={new Date().toLocaleDateString("en-US", {weekday: "long"})} 
          temp={Math.floor(weather.current.temperature_2m)} 
          time={new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })} 
          weatherCode={weather.current.weather_code}
          city={location.city}
          country_code={location.country_code}
          />
      </div>

      <div className="bg-zinc-700 w-[95%] h-100 flex flex-col justify-center items-center gap-10 rounded-2xl relative bottom-10 inset-shadow-2xl/20 md:w-100 md:bottom-5">
        <Conditions 
          precipitation={weather.current.precipitation}
          humidity={weather.current.relative_humidity_2m} 
          windSpeed={weather.current.wind_speed_10m} />

        <div className="grid grid-cols-4 gap-8">
          {weather.daily.time.slice(1, 5).map((day, i) => (
          <NextWeather
            key={i}
            day={new Date(day).toLocaleDateString("en-US", { weekday: "short" })}
            temp={Math.floor(weather.daily.temperature_2m_max[i])}
            weatherCode={weather.daily.weather_code[i]} />
            ))}
        </div>

        <button onClick={handleClick} className="w-70 h-10 bg-blue-600 rounded-4xl text-white cursor-pointer hover:bg-blue-800 transition">
          Search Location
        </button>
        
      </div>
        {isModalOpen && <Modal onSearch={handleSearch} onClose={handleClose}/>}
    </div>
  )
}

export default App
