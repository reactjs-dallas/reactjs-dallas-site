// External Dependencies
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    media: PropTypes.string.isRequired,
    mediaContainer: PropTypes.string.isRequired,
    meetupLink: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  meetupLink: PropTypes.string.isRequired,
  speaker1: PropTypes.string.isRequired,
  speaker2: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
};

const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: '50%',
    width: '50%',
  },
  mediaContainer: {
    background: '#f1f1f1',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 24,
  },
  meetupLink: {
    marginTop: 12,
  },
});

// Component Definition
const EventCard = ({
  classes,
  date,
  imageLink,
  meetupLink,
  speaker1,
  speaker2,
  venue,
}) => {
  return (
    <Card className={classes.card}>
      <div className={classes.pastMediaContainer}>
        <CardMedia
          alt={`${venue} Logo`}
          className={classes.media}
          component="img"
          image={imageLink}
          title={`${venue} Logo`}
        />
      </div>
      <CardContent>
        <h3>{date}</h3>
        <h4>ReactJS @ {venue}</h4>
        <div>{speaker1}</div>
        <div>{speaker2}</div>

        <p className={classes.meetupLink}>
          <a href={meetupLink}>View on meetup.com</a>
        </p>
      </CardContent>
    </Card>
  );
};

EventCard.propTypes = propTypes;

export default withStyles(styles)(EventCard);
