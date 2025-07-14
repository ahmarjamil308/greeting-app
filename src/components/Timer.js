// src/components/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((sec) => sec - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setSeconds(1500);
    setIsActive(false);
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-red-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">🕑 Timer</h2>
      <p className="text-3xl font-mono">{formatTime(seconds)}</p>
      <div className="mt-3 space-x-2">
        <button onClick={toggle} className="bg-red-500 text-white px-3 py-1 rounded">
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset} className="bg-gray-500 text-white px-3 py-1 rounded">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
