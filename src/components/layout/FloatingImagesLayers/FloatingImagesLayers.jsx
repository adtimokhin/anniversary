import FloatingImages from "../../FloatingImages/FloatingImages";

function FloatingImagesLayers({ imageUrls }) {
  return (
    <div className="w-screen h-screen">
      <FloatingImages
        imageUrls={imageUrls}
      />
    </div>
  );
}

export default FloatingImagesLayers;
