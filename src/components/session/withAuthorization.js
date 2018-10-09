// External Dependencies
import React from 'react';
import { navigate } from 'gatsby';

// Internal Dependencies
import AuthUserContext from './AuthUserContext';
import { withFirebase } from '../Firebase/FirebaseContext';

// Component Definition
const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        initFirebase: false,
        authUser: null,
      };
    }

    firebaseInit = () => {
      if (this.props.firebase && !this.state.initFirebase) {
        this.props.firebase.auth.onAuthStateChanged(authUser => {
          if (!condition(authUser)) {
            navigate('/signin');
          }
        });

        this.setState({ initFirebase: true });
      }
    };

    componentDidMount() {
      this.firebaseInit();
    }

    componentDidUpdate() {
      this.firebaseInit();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          authUser ? <Component {...this.props} /> : null
        </AuthUserContext.Consumer>
      );
    }
  }

  return withFirebase(WithAuthorization);
};

export default withAuthorization;
