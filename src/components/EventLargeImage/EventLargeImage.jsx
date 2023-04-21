import React from 'react';
import './EventLargeImage.css';

const EventLargeImage = ({ imageUrl }) => {
  return (
    <div className="outer-frame">
      <div className="middle-frame">
        <div className="inner-frame">
          <img className="event-image" src={imageUrl} alt="Event" />
        </div>
      </div>
    </div>
  );
};

export default EventLargeImage;
