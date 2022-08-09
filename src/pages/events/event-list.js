// External Dependencies
import React from 'react';

// Internal Dependencies
import EventCard from '../../components/shared/EventCard';
import { eventData } from '../../utils/constants/events';

// Component Definition
const EventList = () => {
  const upcomingEvents = eventData.map(event => (
    <EventCard
      date={event.date}
      key={event.date}
      imageBackgroundColor={event.imageBackgroundColor}
      imageLink={event.imageLink}
      meetupLink={event.meetupLink}
      speaker1={event.speaker1}
      speaker2={event.speaker2}
      speaker3={event.speaker3}
      speaker4={event.speaker4}
      speaker5={event.speaker5}
      speaker6={event.speaker6}
      venue={event.venue}
    />
  ));

  return upcomingEvents;
};

export default EventList;
