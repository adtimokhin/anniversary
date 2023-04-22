import EventLargeImage from "../../EventLargeImage/EventLargeImage";
import EventQuote from "../../EventQuote/EventQuote";
import ImageDescription from "../../ImageDescription/ImageDescription";

function ImageQuoteLayout({
  imageUrl,
  topText,
  bottomText,
  quoteText,
  imageRight,
}) {
  return (
    <div className="image-quote inline-flex">
      {imageRight ? (
        ""
      ) : (
        <div className="w-[40vw] image-wrapper inline-block">
          <EventLargeImage imageUrl={imageUrl} />
          {topText ? (
            <ImageDescription topText={topText} bottomText={bottomText} />
          ) : (
            ""
          )}
        </div>
      )}

      <div className="flex justify-center items-center w-[60vw]">
        {quoteText ? <EventQuote quoteText={quoteText} /> : ""}
      </div>
      {imageRight ? (
        <div className="w-[40vw] image-wrapper inline-block">
          <EventLargeImage imageUrl={imageUrl} />
          {topText ? (
            <ImageDescription topText={topText} bottomText={bottomText} />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ImageQuoteLayout;
