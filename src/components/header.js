// External Dependencies
import React from 'react';
import { Link } from 'gatsby';

// Internal Dependencies
import ReactLogoSvg from '../images/react-logo.svg';

// Component Definition
const Header = ({ siteTitle }) => (
  <div
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
      }}
    >
      <Link
        to="/"
        css={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <ReactLogoSvg /> {siteTitle}
      </Link>
    </div>
  </div>
);

export default Header;
