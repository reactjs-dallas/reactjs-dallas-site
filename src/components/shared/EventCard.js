// External Dependencies
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    mediaContainer: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  imageBackgroundColor: PropTypes.string,
  imageLink: PropTypes.string.isRequired,
  meetupLink: PropTypes.string.isRequired,
  speaker1: PropTypes.string.isRequired,
  speaker2: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
};

const defaultProps = {
  imageBackgroundColor: null,
};

const styles = theme => ({
  card: {
    margin: '12px 0',
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
  button: {
    marginTop: 16,
  },
});

// Component Definition
const EventCard = ({
  classes,
  date,
  imageBackgroundColor,
  imageLink,
  meetupLink,
  speaker1,
  speaker2,
  venue,
}) => {
  return (
    <Card className={classes.card}>
      <div
        className={classes.mediaContainer}
        style={{
          background: imageBackgroundColor,
        }}
      >
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

        <Button
          className={classes.button}
          color="primary"
          href={meetupLink}
          variant="contained"
        >
          View on Meetup
        </Button>
      </CardContent>
    </Card>
  );
};

EventCard.propTypes = propTypes;
EventCard.defaultProps = defaultProps;

export default withStyles(styles)(EventCard);
