// Internal Dependencies
import EventCard from '../../components/shared/EventCard';
import { futureEventData } from '../../utils/constants/events';

// Component Definition
const Upcoming = () => (
  <>
    {futureEventData.map(event => (
      <EventCard
        date={event.date}
        key={event.date}
        imageBackgroundColor={event.imageBackgroundColor}
        imageLink={event.imageLink}
        meetupLink={event.meetupLink}
        speaker1={event.speaker1}
        venue={event.venue}
      />
    ))}
  </>
);

export default Upcoming;
