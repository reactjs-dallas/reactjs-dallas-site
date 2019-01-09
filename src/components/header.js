// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import ReactLogoSvg from '../images/react-logo.svg';
import withRoot from '../utils/withRoot';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    link: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    nav: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  logo: {
    height: 24,
    marginRight: 8,
    transform: 'translateY(6px)',
    width: 24,
  },
  nav: {
    alignItems: 'baseline',
    display: 'flex',
    fontFamily: 'Roboto',
    justifyContent: 'space-around',
    margin: '0 auto',
    maxWidth: 960,
    padding: '1rem',
  },
  root: {
    background: '#20232A',
  },
};

// Component Definition
const Header = ({ classes, siteTitle }) => (
  <div className={classes.root}>
    <div className={classes.nav}>
      <div>
        <Link
          className={classes.link}
          to="/"
        >
          <ReactLogoSvg className={classes.logo} /> {siteTitle}
        </Link>
      </div>
      <div>
        <Link
          className={classes.link}
          to="/events"
        >
          Events
        </Link>
      </div>
      <div>
        <Link
          className={classes.link}
          to="/backers"
        >
          Backers
        </Link>
      </div>
    </div>
  </div>
);

Header.propTypes = propTypes;

export default withRoot(withStyles(styles)(Header));
