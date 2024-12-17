import React, {useState} from 'react';
import axios from 'axios';
import WeatherForm from "./components/WeatherForm.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import WeatherDisplay from "./components/WeatherDisplay.jsx";

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fetchWeather = async () => {
    if (city.trim() === '') return;

    setLoading(true);
    setError('');

    try {
      const response = await axios.get(import.meta.env.VITE_API_BASE_URL, {
        params: {
          q: city,
          units: 'metric',
          appid: import.meta.env.VITE_API_KEY,
        },
      });
      setWeatherData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.status === 404) {
        setError(err.response.data.message ?? err.message);
      } else if (err.message !== "") {
        setError(err.message);
      } else {
        setError('Could not fetch weather data. Please try again.');
      }
    }
  };


  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>

        <WeatherForm city={city} setCity={setCity} fetchWeather={fetchWeather} loading={loading}/>

        {loading && <LoadingSpinner/>}
        {error && <ErrorMessage message={error}/>}

        <WeatherDisplay weatherData={weatherData}/>
      </div>
    </>
  )
}

export default App
