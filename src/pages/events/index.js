// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
// import Tab from '@material-ui/core/Tab';
// import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import Layout from '../../components/layout';
import ReactDallasLogoSection from '../../components/shared/ReactDallasLogoSection';
import Upcoming from './upcoming';
import withRoot from '../../utils/withRoot';

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
          <Upcoming />
        </section>

        <ReactDallasLogoSection />
      </div>
    </Layout>
  );
};

Events.propTypes = propTypes;

export default withRoot(withStyles(styles)(Events));
