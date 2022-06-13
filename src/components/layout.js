// External Dependencies
import Helmet from 'react-helmet';
import PropTypes, { bool } from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import Footer from './footer';
import Header from './header';
import withAuthentication from './session/withAuthentication';
import './layout.css';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    childrenContainer: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
  }).isRequired,
  hideFooter: bool,
  hideNav: bool,
};

const styles = {
  childrenContainer: {
    margin: '0 auto',
    padding: 0,
  },
  main: {
    backgroundColor: 'black',
    minHeight: '100vh'
  },
};

// Component Definition
const Layout = ({
  children,
  classes,
  hideFooter = false,
  hideNav = false,
}) => (
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

    render={
      data => (
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
            {hideNav ? null : <Header siteTitle={data.site.siteMetadata.title} />}
            <div className={classes.childrenContainer}
            >
              {children}
            </div>
            {hideFooter ? null : <Footer />}
          </main>
        </>
      )
    }
  />
);

Layout.propTypes = propTypes;

export default withStyles(styles)(withAuthentication(Layout));
