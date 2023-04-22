import React, { useEffect, useRef, useState } from "react";
import "./TimelineLabel.css";
import { useNavigate } from "react-router-dom";

const TimelineLabel = ({ topText, bottomText, settings, labelId, eventLink }) => {
  const navigate = useNavigate();
  const labelRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // all of the customizable properties
  const size = settings?.size || 200;
  const textColor = settings?.textColor || '#9da3a3';
  const hoverTextColor = settings?.hoverTextColor || '#cfd6d6';
  const bgColor = settings?.bgColor || 'transparent';
  const hoverBgColor = settings?.hoverBgColor || '#1A1A1A';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
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
    navigate(`/event/${eventLink}/${labelId}`);
  };

  const labelStyles = {
    width:`${size}px`,
    height:`${size}px`,
    color:  isHovered ?  hoverTextColor : textColor,
    backgroundColor:  isHovered ? hoverBgColor: bgColor,
    boxShadow: isHovered? "-1px 0 10px#e5e9e9" : 'none',
    border: isHovered? "none" :`2px solid ${hoverBgColor}`
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="timeline-label text-3xl"
      ref={labelRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={labelStyles}
    >
      <div className="timeline-label-top">{topText.toUpperCase()}</div>
      <div className="timeline-label-bottom">{bottomText.toUpperCase()}</div>
    </div>
  );
};

export default TimelineLabel;
