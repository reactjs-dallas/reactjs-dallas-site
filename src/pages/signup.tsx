import Layout from '../components/layout';
import SignUpForm from '../components/signup-form';
import styles from './styles/signup.module.css';

const SignUpPage = () => (
  <Layout>
    <div className={styles.root}>
      <section className={styles.heroContainer}>
        <header>
          <h1 className={styles.heroTitle}>ReactJS Dallas</h1>
          <div className={styles.heroText}>Where DFW eats pizza</div>
        </header>
      </section>

      <section className={styles.content}>
        <p>Sign up for a new Firebase login.</p>
        <SignUpForm />
      </section>
    </div>
  </Layout>
);

export default SignUpPage;
