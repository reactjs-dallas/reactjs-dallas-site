import Layout from '../components/layout';
import ReactDallasLogoSection from '../components/shared/ReactDallasLogoSection';
import styles from './styles/index.module.css';

const IndexPage = () => (
  <Layout>
    <div className={styles.root}>
      <section className={styles.heroContainer}>
        <header>
          <h1 className={styles.heroTitle}>ReactJS Dallas</h1>
          <div className={styles.heroText}>Where DFW learns</div>
        </header>
      </section>
      <section className={styles.content}>
        <p>Welcome to the DFW React Community!</p>
        <p>Now go build something great</p>
        <p>And show someone else how to do it, too!</p>
        {/* <Link to="/signup/">Go to sign up</Link> */}
      </section>
      <ReactDallasLogoSection />
    </div>
  </Layout>
);

export default IndexPage;
