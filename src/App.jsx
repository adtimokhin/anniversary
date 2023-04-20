import { useState } from "react";
import GlowLine from "./components/GlowLine/GlowLine";
import Timeline from "./components/Timeline/Timeline";
import TimelineLabel from "./components/TimelineLabel/TimelineLabel";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
function App() {
  const events = [
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
  ];

  const [currentScreen, setCurrentScreen] = useState(
    <LoadingScreen
      atEnd={() => {
        setCurrentScreen(
          <div
            style={{
              width: "20000px",
              // height: "  ",
              top: "50%",
              marginLeft: "50vw",
              transform: "translateY(-50%)",
            }}
            className="absolute"
          >
            <Timeline
              events={events}
              startYear={2003}
              startMonth={5}
              endYear={2030}
              endMonth={3}
            />
            <div style={{ width: "100%" }} className="mt-14">
              <GlowLine
                settings={{
                  glowRadius: 1.3,
                  mainColor: "#1A1A1A",
                  highlightColor: "#5b5f5f",
                  lineThickness: 10,
                }}
              />
            </div>
          </div>
        );
      }}
    />
  );

  return (
    <div className="App h-screen bg-[#080808]" style={{ width: "20000px" }}>
      {currentScreen}
    </div>
  );
}

export default App;
