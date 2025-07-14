import React, { useState, useEffect } from 'react';

const GreetingForm = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState(() => {
    return localStorage.getItem('greeting') || '';
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError('Name cannot be empty.');
      return;
    }

    setError('');
    setSubmittedName(name);

    // Simulate backend POST
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  useEffect(() => {
    if (submittedName) {
      localStorage.setItem('greeting', submittedName);
    }
  }, [submittedName]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Welcome!</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Greet Me
        </button>
      </form>
      {submittedName && (
        <p className="mt-4 text-center text-lg text-green-600">
          Hello, <strong>{submittedName}</strong>!
        </p>
      )}
    </div>
  );
};

export default GreetingForm;
