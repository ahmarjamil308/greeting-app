// src/components/Quote.js
import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);

 useEffect(() => {
  fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'))
    .then((res) => res.json())
    .then((data) => {
      const parsed = JSON.parse(data.contents); // <- parse the inner JSON string
      setQuote(parsed[0]);
    })
    .catch((err) => console.error('Error fetching quote:', err));
}, []);


  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">💡 Daily Quote</h2>
      {quote ? (
        <>
          <p className="italic">"{quote.q}"</p>
          <p className="text-right font-semibold mt-2">— {quote.a}</p>
        </>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
};

export default Quote;
