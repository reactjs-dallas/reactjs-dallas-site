// External Dependencies
import React from 'react';
import { Link } from 'gatsby';
import Popper from '@material-ui/core/Popper';

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
        justifyContent: 'space-between',
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
      <div css={{ fontSize: 16 }}>
        <Link
          to="/events"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Events
        </Link>
        <Link
          to="/signin"
          css={{
            color: 'white',
            textDecoration: 'none',
            marginLeft: 16,
          }}
        >
          Login
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
