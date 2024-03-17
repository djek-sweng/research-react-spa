import { NavLink } from 'react-router-dom';

import styles from './ProfileNavigation.module.css';

const ProfileNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/#">#1</NavLink>
        </li>
        <li>
          <NavLink to="/#">#2</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNavigation;
