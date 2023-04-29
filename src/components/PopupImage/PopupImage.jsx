import React from "react";

function PopupImage({expandedImage, onClose}) {
  return (
    <div
      className="h-full w-full popup-image fixed inset-0 flex justify-center items-center bg-[#0b0b0e] bg-opacity-80 z-50"
      onClick={onClose}
    >
      <div className="z-100 p-6">
      <img
            src={expandedImage}
            alt="expanded"
            style={{
              maxWidth: '100vw',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
            draggable={false}
          />

      </div>
    </div>
  );
}

export default PopupImage;