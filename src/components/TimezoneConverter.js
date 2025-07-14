import React, { useEffect, useState } from 'react';

const timezones = [
  'UTC',
  'Asia/Karachi',
  'America/New_York',
  'Europe/London',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Europe/Paris',
  'Asia/Dubai',
  'America/Los_Angeles',
  'Asia/Kolkata',
];

const TimezoneConverter = () => {
  const [fromZone, setFromZone] = useState('UTC');
  const [toZone, setToZone] = useState('Asia/Karachi');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date, zone) =>
    new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: zone,
      hour12: false,
    }).format(date);

  return (
    <div className="bg-indigo-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-3">🌍 Timezone Converter</h2>

      <div className="mb-4 space-y-2">
        <div>
          <label className="block text-sm font-semibold">From Timezone:</label>
          <select
            value={fromZone}
            onChange={(e) => setFromZone(e.target.value)}
            className="w-full p-2 rounded border"
          >
            {timezones.map((tz) => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold">To Timezone:</label>
          <select
            value={toZone}
            onChange={(e) => setToZone(e.target.value)}
            className="w-full p-2 rounded border"
          >
            {timezones.map((tz) => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <p><strong>{fromZone}</strong>: {formatTime(currentTime, fromZone)}</p>
        <p><strong>{toZone}</strong>: {formatTime(currentTime, toZone)}</p>
      </div>
    </div>
  );
};

export default TimezoneConverter;
