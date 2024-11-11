import React, { useState, useEffect } from 'react';

const QuoteSlideshow = () => {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Change your thoughts and you change your world.",
    "With the new day comes new strength and new thoughts.",
    "The past cannot be changed. The future is yet in your power."
  ];

  // Start at a random index
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random index different from the current one
      setCurrentQuoteIndex(prevIndex => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * quotes.length);
        } while (newIndex === prevIndex);
        return newIndex;
      });
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [quotes.length]); // Only run this effect on initial mount

  return (
    <div className="quote-slideshow">
      <p>{quotes[currentQuoteIndex]}</p>
    </div>
  );
};

export default QuoteSlideshow;
