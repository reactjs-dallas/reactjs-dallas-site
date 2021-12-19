// External Dependencies
import * as React from 'react';

// Internal Dependencies
import AuthUserContext from './AuthUserContext';
import { firebase } from '../../firebase';

// Component Definition
const withAuthentication = (Component: React.ReactNode) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      if (typeof window !== 'undefined') {
        firebase.auth.onAuthStateChanged(authUser => {
          authUser
            ? this.setState(() => ({ authUser }))
            : this.setState(() => ({ authUser: null }));
        });
      }
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  };

export default withAuthentication;
