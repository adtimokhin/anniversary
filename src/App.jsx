import { useState } from "react";
import GlowLine from "./components/GlowLine/GlowLine";
import Timeline from "./components/Timeline/Timeline";
import TimelineLabel from "./components/TimelineLabel/TimelineLabel";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import TimelinePage from "./pages/TimelinePage";
import EventPage from "./pages/EventPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [currentScreen, setCurrentScreen] = useState();

  // eventLink should be a unique name to the event

  return (
    <div className="App min-h-screen bg-[#080808]">
      <LoadingScreen
        atEnd={() => {
          const loadingScreen = document.getElementById(
            "loading-screen-background"
          );
          if (loadingScreen) {
            loadingScreen.remove();
          }
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/anniversary/"
            element={
              <div className="w-[20000px] h-screen bg-[#080808]">
                {/* TODO: Replace with {currentPage} when finished testing */}
                <TimelinePage />
              </div>
            }
          />
          <Route path="/anniversary/event/:index/:backTo" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
