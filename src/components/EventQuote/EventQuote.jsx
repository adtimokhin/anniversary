import React from 'react';
import './EventQuote.css';

const EventQuote = ({ quoteText }) => {
  return (
    <div className="event-quote-container">
      <span className="quote-symbol quote-start">“</span>
      <span className="quote-text">{quoteText}</span>
      <span className="quote-symbol quote-end">”</span>
    </div>
  );
};

export default EventQuote;
