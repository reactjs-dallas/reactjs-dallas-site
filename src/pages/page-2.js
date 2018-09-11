// External Dependencies
import React from 'react';
import { Link } from 'gatsby';

// Internal Dependencies
import Layout from '../components/layout';
import FirebaseLogoSvg from '../images/firebase-logo.svg';

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
}

const firebaseLogoContainerStyles = {
  background: '#B9B9B9',
  display: 'flex',
  justifyContent: 'center',
  minHeight: 360,
  padding: 64,
}

const firebaseLogoStyles = {
  width: 128,
  height: 128,
};

// Component Definition
const SecondPage = () => (
  <Layout>
    <div css={rootStyles}>
      <section css={heroContainerStyles}>
        <header>
          <h1 css={heroTitleStyles}>ReactJS Dallas</h1>
          <div css={heroTextStyles}>Where DFW connects</div>
        </header>
      </section>

      <section css={contentStyles}>
        <p>Let's add some authentication.</p>
        <p>We'll use Firebase for this part.</p>
        <Link to="/">Go to the home page</Link>
      </section>

      <div css={firebaseLogoContainerStyles}>
        <FirebaseLogoSvg style={firebaseLogoStyles} />
      </div>

    </div>
  </Layout>
);

export default SecondPage;
