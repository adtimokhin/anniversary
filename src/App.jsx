import { useState } from "react";
import GlowLine from "./components/GlowLine/GlowLine";
import Timeline from "./components/Timeline/Timeline";
import TimelineLabel from "./components/TimelineLabel/TimelineLabel";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import TimelinePage from "./pages/TimelinePage";
function App() {
  const [currentScreen, setCurrentScreen] = useState(
    <LoadingScreen
      atEnd={() => {
        setCurrentScreen(
          <TimelinePage
            events={[{
                topText: "свадьба",
                bottomText: "2003 АПР",
                year: 2003,
                month: 4,
                settings: {
                  textColor: "#319e4c",
                  hoverTextColor: "#22d44e",
                  bgColor: "#032103",
                  hoverBgColor: "#211a1c",
                },
              },
              {
                topText: "Event 1",
                bottomText: "2010",
                year: 2010,
                month: 3,
                settings: {
                  textColor: "#131f54",
                  hoverTextColor: "#0c2594",
                  bgColor: "",
                  hoverBgColor: "",
                },
              },
              {
                topText: "Event 1",
                bottomText: "2010",
                year: 2010,
                month: 4,
                settings: {
                  textColor: "#41420f",
                  hoverTextColor: "#d5db18",
                  bgColor: "",
                  hoverBgColor: "#111a17",
                },
              },
              {
                topText: "Event 2",
                bottomText: "2012",
                year: 2012,
                month: 5,
              },
              {
                topText: "Event 3",
                bottomText: "2015",
                year: 2015,
                month: 3,
              },
              {
                topText: "Event 3",
                bottomText: "2015",
                year: 2030,
                month: 3,
              },
            ]}
          />
        );
      }}
    />
  );

  return (
    <div className="App h-screen bg-[#080808]" style={{ width: "20000px" }}>
      {/* TODO: Replace with {currentPage} when finished testing */}
      <TimelinePage
        events={[
          {
            topText: "свадьба",
            bottomText: "2003 АПР",
            year: 2003,
            month: 4,
            settings: {
              textColor: "#319e4c",
              hoverTextColor: "#22d44e",
              bgColor: "#032103",
              hoverBgColor: "#211a1c",
            },
          },
          {
            topText: "Event 1",
            bottomText: "2010",
            year: 2010,
            month: 3,
            settings: {
              textColor: "#131f54",
              hoverTextColor: "#0c2594",
              bgColor: "",
              hoverBgColor: "",
            },
          },
          {
            topText: "Event 1",
            bottomText: "2010",
            year: 2010,
            month: 4,
            settings: {
              textColor: "#41420f",
              hoverTextColor: "#d5db18",
              bgColor: "",
              hoverBgColor: "#111a17",
            },
          },
          {
            topText: "Event 2",
            bottomText: "2012",
            year: 2012,
            month: 5,
          },
          {
            topText: "Event 3",
            bottomText: "2015",
            year: 2015,
            month: 3,
          },
          {
            topText: "Event 3",
            bottomText: "2015",
            year: 2030,
            month: 3,
          },
        ]}
      />
    </div>
  );
}

export default App;
