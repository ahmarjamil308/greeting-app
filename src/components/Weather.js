import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [temperature, setTemperature] = useState('Loading...');
  const [location, setLocation] = useState('Lahore');
  const [error, setError] = useState(null);

  const API_KEY = '88c747fc6fb748f0ec58944a0f390223'; // ✅ use this as a string

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();

        if (res.ok) {
          setTemperature(`${data.main.temp}°C`);
        } else {
          setError(data.message || 'Failed to fetch weather.');
        }
      } catch (err) {
        setError('Failed to load weather.');
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">🌤 Weather</h2>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <p>{location}: {temperature}</p>
      )}
    </div>
  );
};

export default Weather;
