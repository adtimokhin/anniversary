import React from 'react';
import './ImageDescription.css';

const ImageDescription = ({ topText, bottomText }) => {
  return (
    <div className="image-description-container">
      <div className="image-description-top">{topText}</div>
      <div className="image-description-bottom">{bottomText}</div>
    </div>
  );
};

export default ImageDescription;
