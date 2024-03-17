import { NavLink } from 'react-router-dom';

import styles from './NotesNavigation.module.css';

const NotesNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/notes">Notes</NavLink>
        </li>
        <li>
          <NavLink to="/notes/new">New Note</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NotesNavigation;
