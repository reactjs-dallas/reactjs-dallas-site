// External Dependencies
import React from 'react';

// Internal Dependencies
import AuthUserContext from '../components/session/AuthUserContext';
import Layout from '../components/layout';
import SignUpForm from '../components/signup-form';
import withAuthorization from '../components/session/withAuthorization';

// Local Variables
const rootStyles = {
  textAlign: 'center'
};

const heroContainerStyles = {
  background: '#282C34',
  padding: '2rem',
};

const heroTitleStyles = {
  color: '#61dafb',
};

const heroTextStyles = {
  color: 'white',
  fontWeight: 100,
};

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '3.5rem 0',
  alignItems: 'center',
};

const authCondition = authUser => !!authUser;

// Component Definition
const SignUpPage2 = () => (
  <Layout>
    <SignUpPage2Content />
  </Layout>
);

const SignUpPage2Content = withAuthorization(authCondition)(() => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div css={rootStyles}>
        <section css={heroContainerStyles}>
          <header>
            <h1 css={heroTitleStyles}>ReactJS Dallas</h1>
            <div css={heroTextStyles}>Where DFW eats pizza</div>
          </header>
        </section>

        <section css={contentStyles}>
          <p>🔥 Sign up for a new Firebase login. 🔥</p>
          <SignUpForm />
        </section>

      </div>
    )}
  </AuthUserContext.Consumer>
));

export default SignUpPage2;
