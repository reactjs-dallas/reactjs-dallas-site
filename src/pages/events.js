// External Dependencies
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import Layout from '../components/layout';
import ReactDallasLogoSection from '../components/shared/ReactDallasLogoSection';
import withRoot from '../utils/withRoot';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    content: PropTypes.string.isRequired,
    heroContainer: PropTypes.string.isRequired,
    heroText: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '3.5rem',
  },
  heroContainer: {
    background: '#282C34',
    padding: '2rem',
  },
  heroText: {
    color: theme.palette.common.white,
    fontWeight: 100,
  },
  heroTitle: {
    color: '#61dafb',
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
  root: {
    textAlign: 'center',
  },
});

// Component Definition
const Events = ({ classes }) => {
  return (
    <Layout>
      <div className={classes.root}>
        <section className={classes.heroContainer}>
          <header>
            <h1 className={classes.heroTitle}>Events</h1>
            <div className={classes.heroText}>Where DFW meets</div>
          </header>
        </section>

        <section className={classes.content}>
          <Card>
            <div className={classes.mediaContainer}>
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
              <div>6:15 - 7:00pm: Pizza/Drinks & meeting other people</div>
              <div>6:30 - 7:00pm: Jobs Open Mic and jobs follow-up</div>
              <div>7:00 - 7:45pm - Morgan Dedmon - "WASM: What is that?"</div>
              <div>8:00 - 8:45pm: Salvador Aceves - "Redux Sagas in Practice"</div>

              <p style={{ marginTop: 12 }}>
                <a href="https://www.meetup.com/ReactJSDallas/events/pbbdwnyxqbpb/">View on meetup.com</a>
              </p>
            </CardContent>
          </Card>
        </section>

        <ReactDallasLogoSection />
      </div>
    </Layout>
  );
};

Events.propTypes = propTypes;

export default withRoot(withStyles(styles)(Events));
