import { Component } from 'react';

// Internal Dependencies
import Layout from '../components/layout';
import withAuthorization from '../components/session/withAuthorization';
import { db } from '../firebase';
import styles from './styles/dashboard.module.css';

// there's probably more to this interface than this
interface User {
  index: number;
}

interface DashboardStateProps {
  users: User[];
}

// Local Functions
function fromObjectToList<T extends object>(object: T) {
  if (!object) {
    return [];
  }
  return Object.keys(object).map(key => ({ ...object[key], index: key }));
}

const authCondition = authUser => !!authUser;

// Component Definition
class Dashboard extends Component {
  state: DashboardStateProps;

  constructor(props: {}) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      db.onceGetUsers().then(snapshot =>
        this.setState(() => ({ users: fromObjectToList(snapshot.val()) }))
      );
    }
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
    <h4>List of App User IDs (Saved on Sign Up in Firebase Database)</h4>
    <hr />
    {users.map(user => (
      <div key={user.index}>{user.index}</div>
    ))}
  </div>
);

const DashboardContent = withAuthorization(authCondition)(
  (props: DashboardStateProps) => {
    return (
      <div className={styles.root}>
        <section className={styles.heroContainer}>
          <header>
            <h1 className={styles.heroTitle}>Dashboard</h1>
            <div className={styles.heroText}>Where DFW ninjas roam freely</div>
          </header>
        </section>

        <section className={styles.content}>
          <h2>User List</h2>
          {!!props.users.length && <UserList users={props.users} />}
        </section>
      </div>
    );
  }
);

export default Dashboard;
