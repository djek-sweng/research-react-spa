import { Link } from 'react-router-dom';

import { QueryProfileDto } from '../lib/api/dtos';

import styles from './ProfileOverview.module.css';

type Props = {
  profile: QueryProfileDto;
};

const ProfileOverview: React.FC<Props> = ({ profile }) => {
  return (
    <section className={styles.container}>
      <header>
        <nav>
          <Link to="edit">Edit</Link>
        </nav>
      </header>
      <article>
        <div>
          <h1>Name</h1>
          <p>{profile.name}</p>
        </div>
        <div>
          <h1>Email</h1>
          <p>{profile.email}</p>
        </div>
        <div>
          <h1>Status</h1>
          <p>{profile.status}</p>
        </div>
      </article>
    </section>
  );
};

export default ProfileOverview;
