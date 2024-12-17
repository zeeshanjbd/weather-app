import React from 'react';

const WeatherForm = ({city, setCity, fetchWeather, loading}) => {
  return (
    <div className="flex flex-col gap-4 items-end sm:items-center sm:space-x-4 sm:gap-0 sm:flex-row">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={fetchWeather}
        disabled={loading}
      >
        Search
      </button>
    </div>
  );
};

export default WeatherForm;
