import React from 'react';
const WeatherDisplay = ({weatherData}) => {
  if (!weatherData) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Condition: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
