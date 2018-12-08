// External Dependencies
import React from 'react';
import {
  graphql,
  Link,
} from 'gatsby';

// Internal Dependencies
import Layout from '../../components/layout';
import DallasLogoSvg from '../../images/reactjs-dallas-icon.svg';

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
  textAlign: 'left',
  padding: '3.5rem',
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
const BackersPage = ({ data }) => {
  console.log('data →', data);
  return (
    <Layout>
      <div css={rootStyles}>
        <section css={heroContainerStyles}>
          <header>
            <h1 css={heroTitleStyles}>Sponsors & Backers</h1>
            <div css={heroTextStyles}>Where DFW supports</div>
          </header>
        </section>

        <section css={contentStyles}>
          <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
        </section>

        <div css={dallasLogoContainerStyles}>
          <DallasLogoSvg style={dallasLogoStyles} />
        </div>
      </div>
    </Layout>
  );
};

export default BackersPage;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`
