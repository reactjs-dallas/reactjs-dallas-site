// External Dependencies
import React from 'react';

// Internal Dependencies
import FacebookSvg from './shared/icons/facebook.svg';
import SlackSvg from './shared/icons/slack.svg';
import TwitterSvg from './shared/icons/twitter.svg';

// Local Variables
const iconContainerStyles = {
  margin: '0 16px',
};

const iconStyles = {
  height: 32,
  width: 32,
};

// Component Definition
const Footer = ({ siteTitle }) => (
  <footer
    css={{
      background: '#20232A',
    }}
  >
    <div
      css={{
        fontFamily: 'Roboto',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={iconContainerStyles}>
        <a
          href="https://join.slack.com/t/reactjs-dallas/shared_invite/enQtMzQ0NDY2NDQ3MzQ3LWI3NmM1ZWRhZTJiOWE4OTFiMTA0MWJlYWVhZWIxZjdkZTRiZGI0OWViZGFiMjhjYjdlMGI2NTBhMWYzNDJkODA"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <SlackSvg style={iconStyles} />
        </a>

      </div>
      <div style={iconContainerStyles}>
        <a
          href="https://twitter.com/reactjsdallas"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <TwitterSvg style={iconStyles} />
        </a>
      </div>
      <div css={iconContainerStyles}>
        <a
          href="https://www.facebook.com/reactjsdallas"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <FacebookSvg style={iconStyles} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
