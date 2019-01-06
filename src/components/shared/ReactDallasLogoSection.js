// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import DallasLogoSvg from '../../images/reactjs-dallas-icon.svg';
import withRoot from '../../utils/withRoot';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = {
  logo: {
    width: 128,
    height: 128,
  },
  root: {
    background: '#B9B9B9',
    display: 'flex',
    justifyContent: 'center',
    padding: 64,
  },
};

// Component Definition
const ReactDallasLogoSection = ({ classes }) => (
  <div className={classes.root}>
    <DallasLogoSvg className={classes.logo} />
  </div>
);

ReactDallasLogoSection.propTypes = propTypes;

export default withRoot(withStyles(styles)(ReactDallasLogoSection));
