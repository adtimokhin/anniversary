import React, { useEffect, useRef, useState } from 'react';
import './ImageGallery.css';

const ImageGalleryItem = ({ imageUrl }) => {
  const imgRef = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imgRef.current.src = imageUrl;
            imgRef.current.onload = () => {
              setLoaded(true);
            };
            observer.unobserve(imgRef.current);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [imageUrl]);

  return (
    <img
      ref={imgRef}
      className={`gallery-image ${loaded ? 'loaded' : 'placeholder'}`}
    />
  );
};

const ImageGallery = ({ imageUrls }) => {
  return (
    <div className="image-gallery m-14">
      {imageUrls.map((url, index) => (
        <div key={index} className="image-container">
          <ImageGalleryItem imageUrl={url} />
          <div className="z-30 absolute top-0 left-0 h-full w-full foreshadow"></div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;


// <div className="z-30 absolute top-0 left-0 h-full w-full foreshadow"></div>