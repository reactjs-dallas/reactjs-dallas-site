// External Dependencies
import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { Link } from 'gatsby';

// Internal Dependencies
import { withFirebase } from './Firebase/FirebaseContext';

// Local Variables
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

// Component Definition
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        this.props.firebase
          .doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            navigate('/dashboard');
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
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
      username === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(SignUpForm);
