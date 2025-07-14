import React, { useState } from 'react';
import Weather from '../components/Weather';
import TodoList from '../components/TodoList';
import Clock from '../components/Clock';
import Timer from '../components/Timer';
import Quote from '../components/Quote';
import DarkModeToggle from '../components/DarkModeToggle';
import TimezoneConverter from '../components/TimezoneConverter';
import StickyNotes from '../components/StickyNotes';

const Home = () => {
  const [tab, setTab] = useState('weather');

  const renderTab = () => {
    switch (tab) {
      case 'weather':
        return <Weather />;
      case 'todo':
        return <TodoList />;
      case 'clock':
        return <Clock />;
      case 'timer':
        return <Timer />;
      case 'quote':
        return <Quote />;
      case 'timezone':
        return <TimezoneConverter />;
      case 'notes':
        return <StickyNotes />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center w-full">🌟 Personal Dashboard</h1>
        <DarkModeToggle />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {[
          { label: 'Weather', key: 'weather' },
          { label: 'To-Do', key: 'todo' },
          { label: 'Clock', key: 'clock' },
          { label: 'Timer', key: 'timer' },
          { label: 'Quote', key: 'quote' },
          { label: 'Notes', key: 'notes' }, // ✅ <-- comma added here
          { label: 'Timezone', key: 'timezone' }
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setTab(item.key)}
            className={`px-4 py-2 rounded ${
              tab === item.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="max-w-xl mx-auto">{renderTab()}</div>
    </div>
  );
};

export default Home;
