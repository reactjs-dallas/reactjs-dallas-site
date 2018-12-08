// External Dependencies
import React from 'react';
import { Link } from 'gatsby';

// Internal Dependencies
import ReactLogoSvg from '../images/react-logo.svg';

// Local Variables
const reactLogoStyles = {
  width: 24,
  height: 24,
  transform: 'translateY(6px)',
  marginRight: 8,
};

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
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-around',
      }}
    >
      <div>
        <Link
          to="/"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <ReactLogoSvg style={reactLogoStyles} /> {siteTitle}
        </Link>
      </div>
      <div>
        <Link
          to="/events"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Events
        </Link>
      </div>
      <div>
        <Link
          to="/backers"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Backers
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
