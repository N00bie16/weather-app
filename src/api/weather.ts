import axios from "axios";

export const getWeather = async (lat: number, lon: number) => {
  const url = "https://api.open-meteo.com/v1/forecast";

  const res = await axios.get(url, {
    params: {
      latitude: lat,
      longitude: lon,
      daily: "weather_code,temperature_2m_max,temperature_2m_min",
      current:
        "temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code",
      timezone: "auto",
    },
  });

  return res.data;
};
