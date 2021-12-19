// Internal Dependencies
import LinkedInSvg from '../shared/icons/linkedin.svg';
import FacebookSvg from '../shared/icons/facebook.svg';
import SlackSvg from '../shared/icons/slack.svg';
import TwitterSvg from '../shared/icons/twitter.svg';
import styles from './Footer.module.css';

const date = new Date();
const year = date.getFullYear();

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.iconContainer}>
        <a
          className={styles.link}
          href="https://www.linkedin.com/groups/13964590"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInSvg className={styles.icon} />
        </a>
      </div>
      <div className={styles.iconContainer}>
        <a
          className={styles.link}
          href="https://join.slack.com/t/reactjs-dallas/shared_invite/enQtMzQ0NDY2NDQ3MzQ3LWI3NmM1ZWRhZTJiOWE4OTFiMTA0MWJlYWVhZWIxZjdkZTRiZGI0OWViZGFiMjhjYjdlMGI2NTBhMWYzNDJkODA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlackSvg className={styles.icon} />
        </a>
      </div>
      <div className={styles.iconContainer}>
        <a
          className={styles.link}
          href="https://twitter.com/reactjsdallas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterSvg className={styles.icon} />
        </a>
      </div>
      <div className={styles.iconContainer}>
        <a
          className={styles.link}
          href="https://www.facebook.com/reactjsdallas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookSvg className={styles.icon} />
        </a>
      </div>
    </div>
    <div className={styles.copyright}>
      &copy; {year} ReactJS Dallas User Group. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
