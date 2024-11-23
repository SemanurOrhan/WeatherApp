import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherFooter from "./WeatherFooter";
import WeatherBody from "./WeatherBody";
import WeatherHeader from "./WeatherHeader";
import "../styles/Weather.css";
import axios from "axios";


const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("London");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_APP_ID;
      const response = await axios.get(
       `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
      const data = response.data;
      console.log(data);
      setWeatherData({
        humidity: data.current.humidity,
        temp: Math.floor(data.current.temp_c),
        wind: Math.floor( data.current.wind_kph),
        city: data.location.name,
        day: data.current.is_day,
        time: data.current.last_updated.split(" ")[1],
        icon: data.current.condition.icon,
        text: data.current.condition.text,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherData(searchTerm);
  }, [searchTerm]);

  return (
    <div className="weather">
      <h2>Weather</h2>

      <div>
        <SearchBar placeholder={"London"} onSearch={setSearchTerm}  />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && !error && (
        <div className="weather-card">
          <WeatherHeader 
          city={weatherData.city}
          day={weatherData.day}
          time={weatherData.time}
          />
          <WeatherBody 
          icon={weatherData.icon}
          temp={weatherData.temp}
          text={weatherData.text}
          />
          <WeatherFooter
          wind={weatherData.wind}
          humidity={weatherData.humidity}
          />
        </div>
      )}
    </div>
  );
};

export default Weather;
