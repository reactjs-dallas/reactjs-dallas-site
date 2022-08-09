// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import Layout from '../components/layout';
import ReactDallasLogoSection from '../components/shared/ReactDallasLogoSection';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    content: PropTypes.string.isRequired,
    heroContainer: PropTypes.string.isRequired,
    heroText: PropTypes.string.isRequired,
    heroTitle: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = theme => ({
  content: {
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    minHeight: '20em',
    padding: '3.5rem 0',
  },
  heroContainer: {
    background: '#282C34',
    display: 'flex',
    justifyContent: 'center',
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
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
});

// Component Definition
const IndexPage = ({
  classes,
}) => {
  return (
    <Layout>
      <div className={classes.root}>
        <section className={classes.heroContainer}>
          <header>
            <h1 className={classes.heroTitle}>ReactJS Dallas</h1>
            <div className={classes.heroText}>Where DFW learns</div>
          </header>
        </section>

        <section className={classes.content}>
          <p>Welcome to the DFW React Community!</p>
          <p>Now go build something great</p>
          <p>And show someone else how to do it, too!</p>
          {/* <Link to="/signup/">Go to sign up</Link> */}
        </section>

        <ReactDallasLogoSection />

      </div>
    </Layout>
  );
};

IndexPage.propTypes = propTypes;

export default withStyles(styles)(IndexPage);
