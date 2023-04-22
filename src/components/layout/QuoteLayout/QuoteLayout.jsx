import EventQuote from "../../EventQuote/EventQuote";

function QuoteLayout({ quote }) {
  return (
    <div className="min-h-[30vh] flex justify-center items-center w-screen my-10">
      {quote ? <EventQuote quoteText={quote} /> : ""}
    </div>
  );
}

export default QuoteLayout;
