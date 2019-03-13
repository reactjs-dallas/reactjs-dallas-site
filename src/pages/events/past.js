// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import EventCard from '../../components/shared/EventCard';
import { pastEventData } from '../../utils/constants/events';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    media: PropTypes.string.isRequired,
    pastMediaContainer  : PropTypes.string.isRequired,
  }).isRequired,
};

const styles = theme => ({
  media: {
    height: '50%',
    width: '50%',
  },
  pastMediaContainer: {
    background: '#f1f1f1',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 24,
  },
});

// Component Definition
const Past = ({ classes }) => {
  const upcomingEvents = pastEventData.map(event => (
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

Past.propTypes = propTypes;

export default withStyles(styles)(Past);
