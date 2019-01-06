// External Dependencies
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import withRoot from '../../utils/withRoot';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    media: PropTypes.string.isRequired,
    mediaContainer: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: '50%',
    width: '50%',
  },
  upcomingMediaContainer: {
    background: '#0a0a0a',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 24,
  },
});

// Component Definition
const Upcoming = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <div className={classes.upcomingMediaContainer}>
        <CardMedia
          alt="The Dallas Morning News Logo"
          className={classes.media}
          component="img"
          image="https://www.belomediagroup.com/wp-content/uploads/2017/06/TheDallasMorningNews_white-768x210.png"
          title="The Dallas Morning News Logo"
        />
      </div>
      <CardContent>
        <h3>January 2019</h3>
        <h4>ReactJS @ The Dallas Morning News Headquarters</h4>
        <div>Mike Orren — Why React is big news for local news</div>

        <p style={{ marginTop: 12 }}>
          <a href="https://www.meetup.com/ReactJSDallas/events/pbbdwnyzcblb/">View on meetup.com</a>
        </p>
      </CardContent>
    </Card>
  );
};

Upcoming.propTypes = propTypes;

export default withRoot(withStyles(styles)(Upcoming));
