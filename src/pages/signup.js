// External Dependencies
import React from 'react';

// Internal Dependencies
import Layout from '../components/layout';
import SignUpForm from '../components/signup-form';

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

// Component Definition
const SignUpPage = () => (
  <Layout>
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
  </Layout>
);

export default SignUpPage;
