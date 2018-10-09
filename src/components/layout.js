// External Dependencies
import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
// import { StaticQuery, graphql } from 'gatsby';

// Internal Dependencies
import FirebaseContext from './Firebase/FirebaseContext';
import Footer from './footer';
import getFirebase from './Firebase';
import Header from './header';
import withAuthentication from './session/withAuthentication';
import './layout.css';

// Component Definition
class Layout extends Component {
  state = {
    firebase: null,
  };

  componentDidMount() {
    const app = import('firebase/app');
    const auth = import('firebase/auth');
    const database = import('firebase/database');

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0]);

      this.setState({ firebase });
    });
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state.firebase}>
        <AppWithAuthentication {...this.props} />
      </FirebaseContext.Provider>
    );
  }
}

const AppWithAuthentication = withAuthentication(props => (
  <Fragment>
    <Header />
    <div
      style={{
        margin: '0 auto',
        padding: 0,
      }}
    >
      {props.children}
    </div>
    <Footer />
    {/* <StaticQuery
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
        <>
          <Helmet
            title={data.site.siteMetadata.title}
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
          >
            <html lang="en" />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"
              rel="stylesheet"
            />
          </Helmet>

        </>
      )}
    /> */}
  </Fragment>
));

export default Layout;
