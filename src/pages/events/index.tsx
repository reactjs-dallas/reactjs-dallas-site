// External Dependencies
import CalendarToday from '@material-ui/icons/CalendarToday';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { Component } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

// Internal Dependencies
import Layout from '../../components/layout';
import Past from './past';
import ReactDallasLogoSection from '../../components/shared/ReactDallasLogoSection';
import Upcoming from './upcoming';
import styles from '../styles/events-index.module.css';

// Component Definition
class Events extends Component<{}> {
  state: {
    currentTab: number;
  };

  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
    };
  }

  handleChangeTab = (event: React.ChangeEvent<{}>, value: number) => {
    this.setState({ currentTab: value });
  };

  getCurrentTabContent = () => {
    const { currentTab } = this.state;
    return currentTab === 0 ? <Upcoming /> : <Past />;
  };

  render() {
    const { currentTab } = this.state;

    return (
      <Layout>
        <div className={styles.root}>
          <section className={styles.heroContainer}>
            <header>
              <h1 className={styles.heroTitle}>Events</h1>
              <div className={styles.heroText}>Where DFW meets</div>
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

          <section className={styles.content}>
            {this.getCurrentTabContent()}
          </section>

          <ReactDallasLogoSection />
        </div>
      </Layout>
    );
  }
}

export default Events;
