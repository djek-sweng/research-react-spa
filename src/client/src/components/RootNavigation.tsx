import { NavLink } from 'react-router-dom';

import { useRootLoaderData } from '../lib/misc/root-loader';

import styles from './RootNavigation.module.css';

const RootNavigation = () => {
  const { isAuth } = useRootLoaderData();

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
        <ul className={styles.list}>
          {!isAuth && (
            <>
              <li>
                <NavLink to="/signin">Signin</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
            </>
          )}
          {isAuth && (
            <li>
              <NavLink to="/signout">Signout</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default RootNavigation;
