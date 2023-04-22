import React, { useEffect, useRef } from 'react';
import './FloatingImages.css';

const FloatingImages = ({ imageUrls }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const floatImages = () => {
        if (containerRef.current) {
          containerRef.current.childNodes.forEach((img) => {
            const rect = img.getBoundingClientRect();
            if (rect.left > window.innerWidth) {
              img.style.left = `${-img.clientWidth}px`;
            }
            img.style.left = `${parseInt(img.style.left) + 1}px`;
          });
      
          requestAnimationFrame(floatImages);
        }
      };
      

    requestAnimationFrame(floatImages);
  }, []);

  return (
    <div className="floating-images-container" ref={containerRef}>
      {imageUrls.map((url, index) => {
        const randomHeight = Math.random() * 10 + 10; // Random height between 10% and 20%
        return (
          <img
            key={index}
            src={url}
            alt={`Floating image ${index}`}
            className="floating-image"
            style={{
              left: `${Math.random() * window.innerWidth}px`,
              top: `${Math.random() * 80}vh`,
              height: `${randomHeight}%`,
              width: 'auto',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingImages;
