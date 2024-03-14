import { NavLink } from 'react-router-dom';

import styles from './RootNavigation.module.css';

const RootNavigation = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>
            <NavLink to="/signin">Signin</NavLink>
          </li>
          <li>
            <NavLink to="/signout">Signout</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default RootNavigation;
