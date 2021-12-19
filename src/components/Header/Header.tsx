// External Dependencies
import * as React from 'react';
import { Link } from 'gatsby';

// Internal Dependencies
import ReactLogoSvg from '../../images/react-logo.svg';
import styles from './Header.module.css';

interface HeaderProps {
  siteTitle: string;
}

// Component Definition
const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.nav}>
      <div>
        <Link className={styles.link} to="/">
          <ReactLogoSvg className={styles.logo} /> {siteTitle}
        </Link>
      </div>
      <div>
        <Link className={styles.link} to="/events">
          Events
        </Link>
      </div>
      <div>
        <Link className={styles.link} to="/backers">
          Backers
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
