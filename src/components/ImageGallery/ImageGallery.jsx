import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ imageUrls }) => {
  return (
    <div className="image-gallery">
      {imageUrls.map((url, index) => (
        <div key={index} className="image-container z-50">
          <img
            src={url}
            alt={`Gallery image ${index}`}
            className="gallery-image z-20"
            style={
              {
                //   height: '20rem',
                //   width: 'auto',
              }
            }
          />

          <div className="z-30 absolute top-0 left-0 h-full w-full foreshadow"></div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
