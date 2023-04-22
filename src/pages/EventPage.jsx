import EventTitle from "../components/EventTitle/EventTItle";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import EmptySpace from "../components/layout/EmptySpace/EmptySpace";
import FloatingImagesLayers from "../components/layout/FloatingImagesLayers/FloatingImagesLayers";
import ImageQuoteLayout from "../components/layout/ImageQuoteLayout/ImageQuoteLayout";
import QuoteLayout from "../components/layout/QuoteLayout/QuoteLayout";
import SeparationLine from "../components/layout/SeparationLine/SeparationLine";
import { useParams } from "react-router";

function EventPage() {
    const {index} = useParams();
    
  return (
    <div className="bg-[#080808] min-h-screen w-screen">
      <EventTitle text={index} />

      <EmptySpace/>
      <QuoteLayout quote="Quote" />
      <FloatingImagesLayers
        imageUrls={[
          "../pexels-phil-desforges-15185102.jpg",
          "../pexels-feyza-yıldırım-16407235.jpg",
          "../pexels-polina-kovaleva-5546810.jpg",
          "../pexels-satumbo-16462830.jpg",
          "../pexels-jhonny-salas-brochero-16041156.jpg",
          "../pexels-elif-kaya-13536123.jpg",
          "../pexels-polina-tankilevitch-6988658.jpg",
          "../pexels-ds-stories-6005016.jpg",
          "../pexels-jaime-reimer-15953915.jpg",
          "../pexels-sevil-yeva-15895540.jpg",
        ]}
      />

      <ImageQuoteLayout
        imageUrl={"../pexels-phil-desforges-15185102.jpg"}
        topText="Кот в мешке"
        bottomText="хахаха смешно"
        quoteText=""
        imageRight={false}
      />

      <SeparationLine />

      <QuoteLayout quote="Quote" />

      <SeparationLine />

      <ImageQuoteLayout
        imageUrl={"../pexels-phil-desforges-15185102.jpg"}
        topText="Кот в мешке"
        bottomText="хахаха смешно"
        quoteText="Больно, друзья!"
        imageRight={true}
      />

      <SeparationLine />

      <ImageGallery
        imageUrls={[
          "../pexels-phil-desforges-15185102.jpg",
          "../pexels-feyza-yıldırım-16407235.jpg",
          "../pexels-polina-kovaleva-5546810.jpg",
          "../pexels-satumbo-16462830.jpg",
          "../pexels-jhonny-salas-brochero-16041156.jpg",
          "../pexels-elif-kaya-13536123.jpg",
          "../pexels-polina-tankilevitch-6988658.jpg",
          "../pexels-ds-stories-6005016.jpg",
          "../pexels-jaime-reimer-15953915.jpg",
          "../pexels-sevil-yeva-15895540.jpg",
          "../pexels-phil-desforges-15185102.jpg",
          "../pexels-feyza-yıldırım-16407235.jpg",
          "../pexels-polina-kovaleva-5546810.jpg",
          "../pexels-satumbo-16462830.jpg",
          "../pexels-jhonny-salas-brochero-16041156.jpg",
          "../pexels-elif-kaya-13536123.jpg",
          "../pexels-polina-tankilevitch-6988658.jpg",
          "../pexels-ds-stories-6005016.jpg",
          "../pexels-jaime-reimer-15953915.jpg",
          "../pexels-sevil-yeva-15895540.jpg",
          "../pexels-phil-desforges-15185102.jpg",
          "../pexels-feyza-yıldırım-16407235.jpg",
          "../pexels-polina-kovaleva-5546810.jpg",
          "../pexels-satumbo-16462830.jpg",
          "../pexels-jhonny-salas-brochero-16041156.jpg",
          "../pexels-elif-kaya-13536123.jpg",
          "../pexels-polina-tankilevitch-6988658.jpg",
          "../pexels-ds-stories-6005016.jpg",
          "../pexels-jaime-reimer-15953915.jpg",
          "../pexels-sevil-yeva-15895540.jpg",
        ]}
      />
    </div>
  );
}

export default EventPage;
