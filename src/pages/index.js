// External Dependencies
import React from 'react';
// import { Link } from 'gatsby';

// Internal Dependencies
import Layout from '../components/layout';
import DallasLogoSvg from '../images/reactjs-dallas-icon.svg';

// Local Variables
const rootStyles = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center'
};

const heroContainerStyles = {
  background: '#282C34',
  display: 'flex',
  justifyContent: 'center',
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
  flexGrow: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 310,
  padding: '3.5rem 0',
}

const dallasLogoContainerStyles = {
  background: '#B9B9B9',
  display: 'flex',
  justifyContent: 'center',
  padding: 64,
}

const dallasLogoStyles = {
  width: 128,
  height: 128,
};

// Component Definition
const IndexPage = () => {
  return (
    <Layout>
      <div css={rootStyles}>
        <section css={heroContainerStyles}>
          <header>
            <h1 css={heroTitleStyles}>ReactJS Dallas</h1>
            <div css={heroTextStyles}>Where DFW learns</div>
          </header>
        </section>

        <section css={contentStyles}>
          <p>Welcome to the DFW React Community!</p>
          <p>Now go build something great</p>
          <p>And show someone else how to do it, too! 🤓</p>
          {/* <Link to="/signup/">Go to sign up</Link> */}
        </section>

        <div css={dallasLogoContainerStyles}>
          <DallasLogoSvg style={dallasLogoStyles} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
