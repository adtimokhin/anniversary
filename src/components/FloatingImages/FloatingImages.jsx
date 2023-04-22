import React, { useEffect, useRef, useState } from "react";
import "./FloatingImages.css";

const FloatingImages = ({ imageUrls, size }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const floatImages = () => {
    if (containerRef.current && isVisible) {
      containerRef.current.childNodes.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.left > window.innerWidth) {
          img.style.left = `${-img.clientWidth}px`;
        }
        img.style.left = `${parseInt(img.style.left) + 2}px`;
      });

      setTimeout(() => {
        requestAnimationFrame(floatImages);
      }, 5);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    requestAnimationFrame(floatImages);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="floating-images-container" ref={containerRef}>
      {imageUrls.map((url, index) => {
        const randomHeight = Math.random() * 10 + size; // Random height between 5% and 15%
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
              width: "auto",
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingImages;
