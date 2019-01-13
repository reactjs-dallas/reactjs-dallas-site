// External Dependencies
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    media: PropTypes.string.isRequired,
    mediaContainer: PropTypes.string.isRequired,
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
  return (
    <Card>
      <div className={classes.pastMediaContainer}>
        <CardMedia
          alt="Bottle Rocket Logo"
          className={classes.media}
          component="img"
          image="https://www.bottlerocketstudios.com/assets/br-logo.png"
          title="Bottle Rocket Logo"
        />
      </div>
      <CardContent>
        <h3>December 2018</h3>
        <h4>ReactJS @ BottleRocket</h4>
        <div>Morgan Dedmon — WASM: What is that?</div>
        <div>Salvador Aceves — Redux Sagas in Practice</div>

        <p style={{ marginTop: 12 }}>
          <a href="https://www.meetup.com/ReactJSDallas/events/pbbdwnyxqbpb/">View on meetup.com</a>
        </p>
      </CardContent>
    </Card>
  );
};

Past.propTypes = propTypes;

export default withStyles(styles)(Past);
