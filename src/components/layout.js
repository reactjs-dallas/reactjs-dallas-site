// External Dependencies
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import Footer from './footer';
import Header from './header';
import withAuthentication from './session/withAuthentication';
import withRoot from '../utils/withRoot';
import './layout.css';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    childrenContainer: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = {
  childrenContainer: {
    margin: '0 auto',
    padding: 0,
  },
  main: {
    minHeight: '100vh'
  },
};

// Component Definition
const Layout = ({ children, classes }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      // SHORT SYNTAX FOR REACT FRAGMENT
      <>
        <Helmet
          meta={[
            {
              name: 'description',
              content: 'Website for the ReactJS Dallas User Group',
            },
            {
              name: 'keywords',
              content:
                'react, reactjs, JavaScript, frontend, web development, dallas',
            },
          ]}
          title={data.site.siteMetadata.title}
        >
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"
            rel="stylesheet"
          />
        </Helmet>
        <main className={classes.main}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className={classes.childrenContainer}
          >
            {children}
          </div>
          <Footer />
        </main>
      </>
    )}
  />
);

Layout.propTypes = propTypes;

export default withRoot(withStyles(styles)(withAuthentication(Layout)));
