// External Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import CalendarToday from '@material-ui/icons/CalendarToday';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import Layout from '../../components/layout';
import ReactDallasLogoSection from '../../components/shared/ReactDallasLogoSection';
import Past from './past';
import Upcoming from './upcoming';
import withRoot from '../../utils/withRoot';

// Local Variables
const styles = theme => ({
  content: {
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
      root: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
    };
  }

  handleChangeTab = (event, value) => {
    this.setState({ currentTab: value });
  };

  getCurrentTabContent = () => {
    const {
      currentTab,
    } = this.state;

    return currentTab === 0
      ? <Upcoming />
      : <Past />;
  };

  render() {
    const {
      classes,
    } = this.props;

    const {
      currentTab,
    } = this.state;

    return (
      <Layout>
        <div className={classes.root}>
          <section className={classes.heroContainer}>
            <header>
              <h1 className={classes.heroTitle}>Events</h1>
              <div className={classes.heroText}>Where DFW meets</div>
            </header>
          </section>

          <Tabs
            indicatorColor="primary"
            onChange={this.handleChangeTab}
            textColor="primary"
            value={currentTab}
            variant="fullWidth"
          >
            <Tab icon={<CalendarToday />} label="Upcoming" />
            <Tab icon={<FavoriteIcon />} label="Past" />
          </Tabs>

          <section className={classes.content}>
            {this.getCurrentTabContent()}
          </section>

          <ReactDallasLogoSection />
        </div>
      </Layout>
    );
  }
}

export default withRoot(withStyles(styles)(Events));
