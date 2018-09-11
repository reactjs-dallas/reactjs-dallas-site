// External Dependencies
import React from 'react';
import { Link } from 'gatsby';
import injectSheet from 'react-jss';

// Internal Dependencies
import Layout from '../components/layout';
import AccountBoxSvg from '../images/reactjs-dallas-icon.svg';

// Local Variables
const styles = {
  root: {
    textAlign: 'center',
  },
  heroContainer: {
    background: '#282C34',
    padding: '2rem',
  },
  heroTitle: {
    color: '#61dafb',
  },
  heroText: {
    color: 'white',
    fontWeight: 100,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '3.5rem 0',
  },
  dallasLogoContainer: {
    background: '#B9B9B9',
    display: 'flex',
    justifyContent: 'center',
    minHeight: 360,
    padding: 64,
  },
  dallasLogo: {
    width: 128,
    height: 128,
  },
};

// Component Definition
const IndexPage = (props) => {
  const {
    classes,
  } = props;

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
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </section>

        <div className={classes.dallasLogoContainer}>
          <AccountBoxSvg className={classes.dallasLogo} />
        </div>
      </div>
    </Layout>
  );
};

export default injectSheet(styles)(IndexPage);
