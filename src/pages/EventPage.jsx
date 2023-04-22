import EventLargeImage from "../components/EventLargeImage/EventLargeImage";
import EventQuote from "../components/EventQuote/EventQuote";
import EventTitle from "../components/EventTitle/EventTItle";
import ImageDescription from "../components/ImageDescription/ImageDescription";
import ImageQuoteLayout from "../components/layout/ImageQuoteLayout/ImageQuoteLayout";
import QuoteLayout from "../components/layout/QuoteLayout/QuoteLayout";
import SeparationLine from "../components/layout/SeparationLine/SeparationLine";


function EventPage(){

    return <div className="bg-[#080808] min-h-screen w-screen">
        <EventTitle text={"Свадьба"}/>
        <div className="w-[40vw] image-wrapper">
            <EventLargeImage imageUrl={"pexels-phil-desforges-15185102.jpg"}/>
            <ImageDescription topText={"Text description"} bottomText={"Meh"}/>
        </div>

        <SeparationLine/>

        <QuoteLayout quote="Quote"/>

        <ImageQuoteLayout imageUrl={"pexels-phil-desforges-15185102.jpg"} topText="fkfk" bottomText="kkk"quoteText="Loska" imageRight={true}/>

    </div>

}

export default EventPage;