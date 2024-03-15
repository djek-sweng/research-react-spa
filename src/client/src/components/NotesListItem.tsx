import { Link } from 'react-router-dom';

import { NoteDto } from '../lib/api/dtos';
import dateFormatter from '../lib/misc/date-formatter';

import styles from './NotesListItem.module.css';

type Props = {
  note: NoteDto;
};

const NotesListItem: React.FC<Props> = ({ note }) => {
  const createdAt = dateFormatter(note.createdAt);
  const updatedAt = dateFormatter(note.updatedAt);

  return (
    <li>
      <article className={styles.card}>
        <div>
          <h1 className={styles.title}>{note.title}</h1>
          <p className={styles.tag}>{note.tag}</p>
          <p className={styles.content}>{note.content}</p>
          <p className={styles.date}>{createdAt}</p>
          <p className={styles.date}>{updatedAt}</p>
        </div>
        <div className={`btn ${styles.button}`}>
          <Link to={`/notes/${note.id}`}>View Details</Link>
        </div>
      </article>
    </li>
  );
};

export default NotesListItem;
