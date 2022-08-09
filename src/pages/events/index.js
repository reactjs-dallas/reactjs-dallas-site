// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import Layout from '../../components/layout';
import EventList from './event-list';
import ReactDallasLogoSection from '../../components/shared/ReactDallasLogoSection';

// Local Variables
const styles = theme => ({
  content: {
    alignItems: 'center',
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '3.5rem',
  },
  heroContainer: {
    background: '#282C34',
    padding: '2rem',
  },
  heroText: {
    color: theme.palette.common.white,
    fontWeight: 100,
  },
  heroTitle: {
    color: '#61dafb',
  },
  root: {
    textAlign: 'center',
  },
});

// Component Definition
class Events extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      content: PropTypes.string.isRequired,
      heroContainer: PropTypes.string.isRequired,
      heroText: PropTypes.string.isRequired,
      heroTitle: PropTypes.string.isRequired,
      root: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const {
      classes,
    } = this.props;

    return (
      <Layout>
        <div className={classes.root}>
          <section className={classes.heroContainer}>
            <header>
              <h1 className={classes.heroTitle}>Events</h1>
              <div className={classes.heroText}>Where DFW meets</div>
            </header>
          </section>

          <section className={classes.content}>
            <EventList />
          </section>

          <ReactDallasLogoSection />
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(Events);
