// External Dependencies
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
    padding: '3.5rem 0',
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
          <h3>December 2018</h3>
          <h4>ReactJS @ BottleRocket</h4>
          <div>6:15 - 7:00pm: Pizza/Drinks & meeting other people</div>
          <div>6:30 - 7:00pm: Jobs Open Mic and jobs follow-up</div>
          <div>7:00 - 7:45pm - Morgan Dedmon - "WASM: What is that?"</div>
          <div>8:00 - 8:45pm: Salvador Aceves - "Redux Sagas in Practice"</div>

          <p style={{ marginTop: 12 }}>
            <a href="https://www.meetup.com/ReactJSDallas/events/pbbdwnyxqbpb/">Meetup link</a>
          </p>
        </section>

        <ReactDallasLogoSection />
      </div>
    </Layout>
  );
};

Events.propTypes = propTypes;

export default withRoot(withStyles(styles)(Events));
