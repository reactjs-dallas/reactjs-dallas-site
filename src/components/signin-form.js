// External Dependencies
import React, { Component } from 'react';
import { navigate } from 'gatsby';

// Internal Dependencies
import { auth, db } from '../firebase';
import { withFirebase } from './Firebase/FirebaseContext';

// Local Variables
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const rootStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 350,
}

// Component Definition
class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        navigate('/dashboard');
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    console.log('porpss', this.props);

    const isInvalid = password === '' || email === '';

    return (
      <form css={rootStyles} onSubmit={this.onSubmit}>
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
          name="password"
          value={password}
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(SignInForm);;
