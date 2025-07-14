// src/components/Clock.js
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId); // cleanup
  }, []);

  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold">Current Time</h2>
      <p className="text-lg">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
