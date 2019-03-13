// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import FacebookSvg from './shared/icons/facebook.svg';
import SlackSvg from './shared/icons/slack.svg';
import TwitterSvg from './shared/icons/twitter.svg';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    copyright: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
    footerContent: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconContainer: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = theme => ({
  copyright: {
    color: theme.palette.grey[300],
    fontSize: 15,
  },
  footer: {
    background: '#20232A',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  footerContent: {
    display: 'flex',
    fontFamily: 'Roboto',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: 960,
    padding: '0.5rem',
  },
  icon: {
    height: 32,
    width: 32,
  },
  iconContainer: {
    margin: '0 16px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
});

// Component Definition
const Footer = ({
  classes,
  siteTitle,
}) => (
  <footer className={classes.footer}>
    <div className={classes.footerContent}>
      <div className={classes.iconContainer}>
        <a
          className={classes.link}
          href="https://join.slack.com/t/reactjs-dallas/shared_invite/enQtMzQ0NDY2NDQ3MzQ3LWI3NmM1ZWRhZTJiOWE4OTFiMTA0MWJlYWVhZWIxZjdkZTRiZGI0OWViZGFiMjhjYjdlMGI2NTBhMWYzNDJkODA"
        >
          <SlackSvg className={classes.icon} />
        </a>
      </div>
      <div className={classes.iconContainer}>
        <a
          className={classes.link}
          href="https://twitter.com/reactjsdallas"
        >
          <TwitterSvg className={classes.icon} />
        </a>
      </div>
      <div className={classes.iconContainer}>
        <a
          className={classes.link}
          href="https://www.facebook.com/reactjsdallas"
        >
          <FacebookSvg className={classes.icon} />
        </a>
      </div>
    </div>
    <div className={classes.copyright}>
      &copy; 2019 ReactJS Dallas User Group. All Rights Reserved.
    </div>
  </footer>
);

Footer.propTypes = propTypes;

export default withStyles(styles)(Footer);
