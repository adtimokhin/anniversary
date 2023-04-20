import React, { useEffect, useRef } from 'react';
import './TimelineLabel.css';

const TimelineLabel = ({ topText, bottomText }) => {
  const labelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (labelRef.current) {
      observer.observe(labelRef.current);
    }

    return () => {
      if (labelRef.current) {
        observer.unobserve(labelRef.current);
      }
    };
  }, []);

  const handleClick = () => {

    console.log('Clicked');
  };

  return (
    <div className="timeline-label text-3xl" ref={labelRef} onClick={handleClick}>
      <div className="timeline-label-top">{topText.toUpperCase()}</div>
      <div className="timeline-label-bottom">{bottomText.toUpperCase()}</div>
    </div>
  );
};

export default TimelineLabel;
