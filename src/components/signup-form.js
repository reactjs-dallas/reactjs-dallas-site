// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import { auth, db } from '../firebase';
import withRoot from '../utils/withRoot';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 350,
  },
};

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

// Local Functions
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

// Component Definition
class SignUpForm extends Component {
  // UNNECESSARY CONSTRUCTOR
  state = { ...INITIAL_STATE };

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });

        this.setState({ ...INITIAL_STATE });
        navigate('/dashboard');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      classes,
    } = this.props;

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      !/^\w+@\w+\.\w+$/.test(email) === '' ||
      username === '';

    return (
      <form
        className={classes.root}
        onSubmit={this.onSubmit}
      >
        <input
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          placeholder="Full Name"
          type="text"
          value={username}
        />
        <input
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          placeholder="Email Address"
          type="text"
          value={email}
        />
        <input
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          placeholder="Password"
          type="password"
          value={passwordOne}
        />
        <input
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          placeholder="Confirm Password"
          type="password"
          value={passwordTwo}
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRoot(withStyles(styles)(SignUpForm));
