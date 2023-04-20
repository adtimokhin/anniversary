import React, { useEffect, useRef } from "react";
import "./GlowLine.css";

const GlowLine = (props) => {
  const settings = props.settings ? props.settings : {};

  const mainColor = settings.mainColor ? settings.mainColor : "rgb(0,0,0)";
  const highlightColor = settings.highlightColor
    ? settings.highlightColor
    : "rgb(255,255,255)";
  const glowRadius = settings.glowRadius ? settings.glowRadius : 1; // In percentage
  const lineThickness = settings.lineThickness ? settings.lineThickness : 4; // In px

  const containerRef = useRef(null);
  const lineRef = useRef(null);

  const setSolidRedBackground = () => {
    if (!lineRef.current) return;
    lineRef.current.style.background = mainColor;
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current || !lineRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseXPercentage =
      (e.clientX - containerRect.left) / containerRect.width;

    const leftGradientPercentageStart =
      Math.max(0, mouseXPercentage - 0.01 * glowRadius) * 100;
    const leftGradientPercentageEnd =
      Math.max(0, mouseXPercentage - 0.002 * glowRadius) * 100;
    const rightGradientPercentageStart =
      Math.max(0, mouseXPercentage + 0.002 * glowRadius) * 100;
    const rightGradientPercentageEnd =
      Math.max(0, mouseXPercentage + 0.01 * glowRadius) * 100;

    lineRef.current.style.background = `linear-gradient(to right, ${mainColor} 0%, ${mainColor} ${leftGradientPercentageStart}%, ${highlightColor} ${leftGradientPercentageEnd}%, ${highlightColor} ${rightGradientPercentageStart}%, ${mainColor} ${rightGradientPercentageEnd}%, ${mainColor} 100%)`;
  };

  const handleMouseLeave = () => {
    setSolidRedBackground();
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    setSolidRedBackground();
  }, []);

  return (
    <div className="glow-line-container" ref={containerRef}>
      <div className="glow-line" ref={lineRef} style={{height: `${lineThickness}px`}}></div>
    </div>
  );
};

export default GlowLine;
