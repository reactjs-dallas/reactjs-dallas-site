// External Dependencies
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import EventCard from '../../components/shared/EventCard';
import { events } from '../../utils/constants';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = theme => ({
  root: {
    maxWidth: 600,
  },
});

// Component Definition
const Upcoming = ({ classes }) => {
  const upcomingEvents = events.map(event => (
    <EventCard
      date={event.date}
      key={event.date}
      imageBackgroundColor={event.imageBackgroundColor}
      imageLink={event.imageLink}
      meetupLink={event.meetupLink}
      speaker1={event.speaker1}
      speaker2={event.speaker2}
      venue={event.venue}
    />
  ));

  return upcomingEvents;
};

Upcoming.propTypes = propTypes;

export default withStyles(styles)(Upcoming);
