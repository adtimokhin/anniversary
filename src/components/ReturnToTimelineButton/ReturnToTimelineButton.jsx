import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReturnToTimelineButton.css';

const ReturnToTimelineButton = ({ timelineId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/anniversary/#${timelineId}`);
  };

  return (
    <div className="return-to-timeline-container">
      <button className="return-to-timeline-button" onClick={handleClick}>
        Return to Timeline
      </button>
    </div>
  );
};

export default ReturnToTimelineButton;
