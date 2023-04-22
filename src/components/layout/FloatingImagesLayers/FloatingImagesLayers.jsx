import FloatingImages from "../../FloatingImages/FloatingImages";

function FloatingImagesLayers({ imageUrls }) {
  return (
    <div className="w-screen h-[300vh] mb-52">
      <div className="absolut w-full h-full">
        <FloatingImages imageUrls={imageUrls} size={10} />
        <FloatingImages imageUrls={imageUrls} size={20} />
        <FloatingImages imageUrls={imageUrls} size={30} />
      </div>
    </div>
  );
}

export default FloatingImagesLayers;
