import EventLargeImage from "../components/EventLargeImage/EventLargeImage";
import EventQuote from "../components/EventQuote/EventQuote";
import EventTitle from "../components/EventTitle/EventTItle";
import ImageDescription from "../components/ImageDescription/ImageDescription";

function EventPage(){

    return <div className="bg-[#080808] min-h-screen w-screen">
        <EventTitle text={"Свадьба"}/>
        <div className="w-[40vw] image-wrapper">
            <EventLargeImage imageUrl={"pexels-phil-desforges-15185102.jpg"}/>
            <ImageDescription topText={"Text description"} bottomText={"Meh"}/>
        </div>
        <div>
            <EventQuote quoteText={"- Костей потом не соберем!"}/>
        </div>

        <div className="image-quote inline-flex">
        <div className="w-[40vw] image-wrapper inline-block">
            <EventLargeImage imageUrl={"pexels-phil-desforges-15185102.jpg"}/>
            <ImageDescription topText={"Text description"} bottomText={"Meh"}/>
        </div>
        <div className="flex justify-center items-center m-5">
            <EventQuote quoteText={"- Костей потом не соберем!"}/>
        </div>
        </div>
    </div>

}

export default EventPage;