// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import Layout from '../components/layout';
import withAuthorization from '../components/session/withAuthorization';
import { db } from '../firebase';

// Local Variables
const rootStyles = {
  textAlign: 'center'
};

const heroContainerStyles = {
  background: '#282C34',
  padding: '2rem',
};

const heroTitleStyles = {
  color: '#61dafb',
};

const heroTextStyles = {
  color: 'white',
  fontWeight: 100,
};

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '3.5rem 0',
};

// Local Functions
const fromObjectToList = object =>
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : [];

const authCondition = authUser => !!authUser;

// Component Definition
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // db.onceGetUsers().then(snapshot =>
    //   this.setState(() => ({ users: fromObjectToList(snapshot.val()) }))
    // );
  }

  render() {
    const { users } = this.state;

    return (
      <Layout>
        <DashboardContent users={users} />
      </Layout>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>List of App User IDs (Saved on Sign Up in Firebase Database)</h2>
    {users.map(user => <div key={user.index}>{user.index}</div>)}
  </div>
);

const DashboardContent = withAuthorization(authCondition)(users =>
  <div css={rootStyles}>
    <section css={heroContainerStyles}>
      <header>
        <h1 css={heroTitleStyles}>Dashboard</h1>
        <div css={heroTextStyles}>Where DFW ninjas roam freely</div>
      </header>
    </section>

    <section css={contentStyles}>
      <h3>User List</h3>
      <p>It will go here if we set up the database to work!</p>
      {!!users.length && <UserList users={users} />}
    </section>

  </div>
);

export default Dashboard;
