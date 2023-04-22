import { useState } from "react";
import GlowLine from "./components/GlowLine/GlowLine";
import Timeline from "./components/Timeline/Timeline";
import TimelineLabel from "./components/TimelineLabel/TimelineLabel";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import TimelinePage from "./pages/TimelinePage";
import EventPage from "./pages/EventPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [currentScreen, setCurrentScreen] = useState(
    <LoadingScreen
      atEnd={() => {
        setCurrentScreen(
          <TimelinePage
            events={[
              {
                topText: "свадьба",
                bottomText: "2003 АПР",
                eventLink:"test",
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
                eventLink:"Rotk",
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
                eventLink:"Nugar",
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
                eventLink:"Losksh",
                year: 2012,
                month: 5,
              },
              {
                topText: "Event 3",
                bottomText: "2015",
                eventLink:"uyughf",
                year: 2015,
                month: 3,
              },
              {
                topText: "Event 3",
                bottomText: "2015",
                eventLink:"Losksrrrrrh",
                year: 2030,
                month: 3,
              },
            ]}
          />
        );
      }}
    />
  );

  // eventLink should be a unique name to the event

  return (
    <div className="App min-h-screen bg-[#080808]">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="w-[20000px] h-screen bg-[#080808]">
                {/* TODO: Replace with {currentPage} when finished testing */}
                <TimelinePage
                  events={[
                    {
                      topText: "свадьба",
                      bottomText: "2003 АПР",
                      eventLink:"test",
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
                      eventLink:"Rotk",
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
                      eventLink:"Nugar",
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
                      eventLink:"Losksh",
                      year: 2012,
                      month: 5,
                    },
                    {
                      topText: "Event 3",
                      bottomText: "2015",
                      eventLink:"uyughf",
                      year: 2015,
                      month: 3,
                    },
                    {
                      topText: "Event 3",
                      bottomText: "2015",
                      eventLink:"Losksrrrrrh",
                      year: 2030,
                      month: 3,
                    },
                  ]}
                />
              </div>
            }
          />
          <Route
            path="/event/:index/:backTo"
            element={ <EventPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
