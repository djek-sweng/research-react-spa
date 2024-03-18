import PageContent from './../components/PageContent';

import viteLogo from '../assets/vite.svg';
import reactLogo from '../assets/react.svg';
import reactQueryLogo from '../assets/react-query.svg';

import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <PageContent title="Welcome to your notes!">
      <div className={styles.logoContainer}>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles.logoReact}`}
            alt="React Logo"
          />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className={`${styles.logo} ${styles.logoVite}`}
            alt="Vite Logo"
          />
        </a>
        <a href="https://tanstack.com/query/latest" target="_blank">
          <img
            src={reactQueryLogo}
            className={`${styles.logo} ${styles.reactQueryLogo}`}
            alt="React Query Logo"
          />
        </a>
      </div>
      <div>
        <p>
          Enjoy browsing your notes{' '}
          <Link to="/notes" className={styles.link}>
            here
          </Link>
          .
        </p>
      </div>
    </PageContent>
  );
};

export default Home;
