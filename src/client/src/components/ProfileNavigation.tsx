import { NavLink } from 'react-router-dom';

import styles from './ProfileNavigation.module.css';

const ProfileNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/profile/edit">Edit Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNavigation;
