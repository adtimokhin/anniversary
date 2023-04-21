import GlowLine from "../components/GlowLine/GlowLine";
import Timeline from "../components/Timeline/Timeline";

function TimelinePage({events}) {
  return (
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
}

export default TimelinePage;
