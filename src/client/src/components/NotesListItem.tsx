import { Link } from 'react-router-dom';

import { QueryNoteDto } from '../lib/api/dtos';

import styles from './NotesListItem.module.css';

type Props = {
  note: QueryNoteDto;
};

const NotesListItem: React.FC<Props> = ({ note }) => {
  return (
    <li>
      <article className={styles.card}>
        <div>
          <h1 className={styles.title}>{note.title}</h1>
          <p className={styles.content}>{note.content}</p>
          <p className={styles.tag}>{note.tag}</p>
        </div>
        <div className={styles.button}>
          <Link to={`/notes/${note.id}`}>View Details</Link>
        </div>
      </article>
    </li>
  );
};

export default NotesListItem;
