import React from 'react';

const About = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">📘 About This Dashboard</h2>

      <section className="mb-6">
        <p className="text-lg">
          This personal dashboard app is designed to help you stay organized, productive, and informed—all in one place.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🚀 Features</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>🌤 Real-time Weather (OpenWeatherMap)</li>
          <li>📝 To-Do List with Local Storage</li>
          <li>⏰ Live Clock</li>
          <li>🕑 Pomodoro-style Timer</li>
          <li>💡 Daily Motivational Quote</li>
          <li>🌙 Dark Mode Toggle</li>
          <li>🌍 Timezone Converter</li>
          <li>🗒️ Sticky Notes</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🛠️ Tech Stack</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>React (Functional Components + Hooks)</li>
          <li>TailwindCSS</li>
          <li>React Router</li>
          <li>APIs: OpenWeatherMap, Quotable.io</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">💡 Motivation</h3>
        <p>
          This project was built for learning and improving productivity tools in a single clean, mobile-friendly app.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">📌 Future Plans</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>User authentication & profiles</li>
          <li>Persistent cloud storage (Firebase)</li>
          <li>Theme customization (light/dark/auto)</li>
          <li>Calendar + Reminders</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">📫 Contact</h3>
        <p>
          Built with ❤️ by [Ahmar]. <br />
        </p>
      </section>
    </div>
  );
};

export default About;
