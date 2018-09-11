// External Dependencies
import React, { Component } from 'react';

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

  onSubmit = (event) => {
    event.preventDefault();
    alert('you submitted');
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>

      </form>
    );
  }
}

export default SignUpForm;
