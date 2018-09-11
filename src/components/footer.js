// External Dependencies
import React from 'react';
import { Link } from 'gatsby';

// Internal Dependencies
import ReactLogoSvg from '../images/react-logo.svg';

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
        justifyContent: 'space-around',
      }}
    >
      <div>
        <a
          href="https://join.slack.com/t/reactjs-dallas/shared_invite/enQtMzQ0NDY2NDQ3MzQ3LWI3NmM1ZWRhZTJiOWE4OTFiMTA0MWJlYWVhZWIxZjdkZTRiZGI0OWViZGFiMjhjYjdlMGI2NTBhMWYzNDJkODA"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Join us on Slack ✨
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/reactjsdallas"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Twitter 🐦
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/reactjsdallas"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Facebook 🤦‍♀️
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
