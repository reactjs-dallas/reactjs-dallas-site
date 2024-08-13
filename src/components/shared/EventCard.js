// External Dependencies
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string.isRequired,
    card: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    mediaContainer: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  fullWidthImage: PropTypes.bool,
  imageBackgroundColor: PropTypes.string,
  imageLink: PropTypes.string.isRequired,
  meetupLink: PropTypes.string.isRequired,
  speaker1: PropTypes.string.isRequired,
  speaker2: PropTypes.string,
  speaker3: PropTypes.string,
  speaker4: PropTypes.string,
  speaker5: PropTypes.string,
  speaker6: PropTypes.string,
  venue: PropTypes.string.isRequired,
};

const defaultProps = {
  fullWidthImage: false,
  imageBackgroundColor: null,
  speaker2: null,
  speaker3: null,
};

const styles = theme => ({
  button: {
    marginTop: 16,
  },
  card: {
    margin: '12px 0',
    maxWidth: 600,
    width: '100%',
  },
  media: {
    height: '50%',
    padding: '0 24px',
    width: '50%',
  },
  mediaContainer: {
    background: '#f1f1f1',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 auto',
    maxWidth: 600,
    paddingTop: 24,
    width: '100%',
  },
});

// Component Definition
const EventCard = ({
  classes,
  date,
  fullWidthImage,
  imageBackgroundColor,
  imageLink,
  meetupLink,
  speaker1,
  speaker2,
  speaker3,
  speaker4,
  speaker5,
  speaker6,
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
          className={fullWidthImage ? '' : classes.media}
          component="img"
          image={imageLink}
          title={`${venue} Logo`}
        />
      </div>
      <CardContent>
        <h3>{date}</h3>
        <h4>ReactJS @ {venue}</h4>
        <div>{speaker1}</div>
        {speaker2 && <div>{speaker2}</div>}
        {speaker3 && <div>{speaker3}</div>}
        {speaker4 && <div>{speaker4}</div>}
        {speaker5 && <div>{speaker5}</div>}
        {speaker6 && <div>{speaker6}</div>}

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
