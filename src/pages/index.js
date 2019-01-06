// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { Link } from 'gatsby';

// Internal Dependencies
import Layout from '../components/layout';
import DallasLogoSvg from '../images/reactjs-dallas-icon.svg';
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
    flexGrow: 1,
    justifyContent: 'center',
    minHeight: 310,
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
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
});

const heroTitleStyles = {
  color: '#61dafb',
};

// Component Definition
const IndexPage = ({
  classes,
}) => {
  return (
    <Layout>
      <div className={classes.root}>
        <section className={classes.heroContainer}>
          <header>
            <h1 css={heroTitleStyles}>ReactJS Dallas</h1>
            <div className={classes.heroText}>Where DFW learns</div>
          </header>
        </section>

        <section className={classes.content}>
          <p>Welcome to the DFW React Community!</p>
          <p>Now go build something great</p>
          <p>And show someone else how to do it, too! 🤓</p>
          {/* <Link to="/signup/">Go to sign up</Link> */}
        </section>

        <ReactDallasLogoSection />

      </div>
    </Layout>
  );
};

IndexPage.propTypes = propTypes;

export default withRoot(withStyles(styles)(IndexPage));
