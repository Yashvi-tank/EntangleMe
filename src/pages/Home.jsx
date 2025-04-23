import React, { useState } from 'react';

const quotes = [
  'The universe is under no obligation to make sense to you. – N. deGrasse Tyson',
  'Time is an illusion. Lunchtime doubly so. – D. Adams',
  'We are stardust brought to life. – C. Sagan',
  'Reality is merely an illusion, albeit a very persistent one. – A. Einstein'
];

function Home() {
  const [quote, setQuote] = useState(quotes[0]);
  const newQuote = () =>
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  return (
    <div className="text-center">
      <h2 className="mb-4">✨ Your Cosmic Insight ✨</h2>
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>“{quote}”</p>
          </blockquote>
        </div>
      </div>
      <button className="btn btn-primary px-4" onClick={newQuote}>
        🔄 New Quote
      </button>
    </div>
  );
}

export default Home;
