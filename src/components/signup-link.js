// External Dependencies
import React, { Component } from 'react';
import { Link } from 'gatsby';

// Component Definition
const SignUpLink = () => (
  <p>
    Don't have an account?
    {' '}
    <Link to="/signup">Sign Up</Link>
  </p>
);

export default SignUpLink;
