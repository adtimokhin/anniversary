import React from "react";
import "./EventTitle.css";
import GlowLine from "../GlowLine/GlowLine";

const EventTitle = ({ text }) => {
  return (
    <div className="event-title-container">
      <div className="glow-line-container">
        <GlowLine
          settings={{
            lineThickness: 5,
            glowRadius: 43,
            mainColor:"#9da3a3",
            highlightColor:"#cfd6d6"
          }}
        />
      </div>
      <div className="event-title-text">{text}</div>
      <div className="glow-line-container">
      <GlowLine
          settings={{
            lineThickness: 5,
            glowRadius: 43,
            mainColor:"#9da3a3",
            highlightColor:"#cfd6d6"
          }}
        />
      </div>
    </div>
  );
};

export default EventTitle;
