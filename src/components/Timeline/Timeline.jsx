import React from "react";
import "./Timeline.css";
import TimelineLabel from "../TimelineLabel/TimelineLabel";

const Timeline = ({ events }) => {
  // Calculate the total time span of the events
  const totalTimeSpan = events.reduce((acc, event, index) => {
    if (index === 0) return acc;
    const prevEvent = events[index - 1];
    const timeSpan =
      (event.year - prevEvent.year) * 12 + (event.month - prevEvent.month);
    return acc + timeSpan;
  }, 0);

  return (
    <div className="timeline">
      {events.map((event, index) => {
        const prevEvent = index === 0 ? null : events[index - 1];
        const timeSpan = prevEvent
          ? (event.year - prevEvent.year) * 12 + (event.month - prevEvent.month)
          : 0;
        const marginLeft = prevEvent
          ? `${(timeSpan / totalTimeSpan) * 100}%`
          : 0;

        return (
          <div
            key={index}
            className="timeline-label-wrapper"
            style={{ marginLeft }}
            id={`l_${index}`}
          >
            <TimelineLabel
              topText={event.topText}
              bottomText={event.bottomText}
              settings={event.settings}
              labelId={`l_${index}`}
              eventLink={event.eventLink}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
