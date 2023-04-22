import { useEffect, useState } from "react";
import EventTitle from "../components/EventTitle/EventTItle";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import ReturnToTimelineButton from "../components/ReturnToTimelineButton/ReturnToTimelineButton";
import EmptySpace from "../components/layout/EmptySpace/EmptySpace";
import FloatingImagesLayers from "../components/layout/FloatingImagesLayers/FloatingImagesLayers";
import ImageQuoteLayout from "../components/layout/ImageQuoteLayout/ImageQuoteLayout";
import QuoteLayout from "../components/layout/QuoteLayout/QuoteLayout";
import SeparationLine from "../components/layout/SeparationLine/SeparationLine";
import { useParams } from "react-router";
import { getJsonData } from "../utils/jsonParser";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

function constructPageContent(pageData) {
  let page = [];
  let elementIndex = 12;
  pageData["content"].forEach((element) => {
    const elType = element[0]; // This is the type of element. Should be a string
    const data = element[1]; // that is all of the remaining data
    switch (elType) {
      case "emptySpace":
        page.push(<EmptySpace key={elementIndex} />);
        break;
      case "floatingImages":
        page.push(<FloatingImagesLayers imageUrls={data} key={elementIndex} />);
        break;
      case "imageQuote":
        page.push(
          <ImageQuoteLayout
            imageUrl={data[0]}
            topText={data[1]}
            bottomText={data[2]}
            quoteText={data[3]}
            imageRight={data[4]}
            key={elementIndex}
          />
        );
        break;
      case "quote":
        page.push(<QuoteLayout quote={data[0]} key={elementIndex} />);
        break;
      case "line":
        page.push(<SeparationLine key={elementIndex} />);
        break;
      case "imageGallery":
        console.log(data);
        page.push(<ImageGallery imageUrls={data} key={elementIndex} />);
        break;
      case "eventTitle":
        page.push(<EventTitle text={data[0]} key={elementIndex} />);
        break;
      default:
        break;
    }
    elementIndex++;
  });

  return page;
}

function EventPage() {
  const { index, backTo } = useParams();
  const [pageContent, setPageContent] = useState(<LoadingSpinner/>);
  // backTo <- id of the section in the timeline to return back to

  useEffect(() => {
    // Step One: load json with data
    getJsonData(`${index}.json`).then((data) => {
      // Step Two: Use the data to make the page
      setPageContent(constructPageContent(data));
    });
  }, []);

  return (
    <div className="bg-[#080808] min-h-screen w-screen">
      {pageContent}
      <ReturnToTimelineButton timelineId={backTo} />
    </div>
  );
}

export default EventPage;
