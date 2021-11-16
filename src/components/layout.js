// External Dependencies
import Helmet from 'react-helmet';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// Internal Dependencies
import Footer from './Footer/Footer';
import Header from './header';
import withAuthentication from './session/withAuthentication';
import './layout.css';

// Local Variables
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
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className={classes.childrenContainer}
            >
              {children}
            </div>
            <Footer />
          </main>
        </>
      )
    }
  />
);

Layout.propTypes = propTypes;

export default withAuthentication(Layout);
