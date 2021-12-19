// External Dependencies
import * as React from 'react';
import { navigate } from 'gatsby';

// Internal Dependencies
import AuthUserContext from './AuthUserContext';
import { firebase } from '../../firebase';

// Component Definition
const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      if (typeof window !== 'undefined') {
        firebase.auth.onAuthStateChanged(authUser => {
          if (!condition(authUser)) {
            navigate('/');
          }
        });
      }
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <Component {...this.props} /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  return WithAuthorization;
};

export default withAuthorization;
