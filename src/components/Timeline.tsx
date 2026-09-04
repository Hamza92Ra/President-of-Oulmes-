import { timelineEvents } from "@/content/timeline";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="max-w-2xl">
      {timelineEvents.map((event, i) => (
        <TimelineItem
          key={event.id}
          event={event}
          isLast={i === timelineEvents.length - 1}
        />
      ))}
    </div>
  );
}