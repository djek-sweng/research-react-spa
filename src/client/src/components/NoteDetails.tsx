import { Link } from 'react-router-dom';

import { QueryNoteDto } from '../lib/api/dtos';
import dateFormatter from '../lib/misc/date-formatter';

import styles from './NoteDetails.module.css';

type Props = { note: QueryNoteDto; onDelete: (id: number) => void };

const NoteDetails: React.FC<Props> = ({ note, onDelete }) => {
  const updatedAt = dateFormatter(note.updatedAt);
  const createdAt = dateFormatter(note.createdAt);

  return (
    <section className={styles.noteDetails}>
      <header>
        <nav>
          <button onClick={() => onDelete(note.id)}>Delete</button>
          <Link to="edit">Edit</Link>
        </nav>
      </header>
      <article>
        <div className={styles.noteDetailsGroup}>
          <h1>Title</h1>
          <p>{note.title}</p>
        </div>
        <div className={styles.noteDetailsGroup}>
          <h1>Tag</h1>
          <p>{note.tag}</p>
        </div>{' '}
        <div className={styles.noteDetailsGroup}>
          <h1>Content</h1>
          <p>{note.content}</p>
        </div>
        <div className={styles.noteDetailsGroup}>
          <h1>Updated</h1>
          <p>{updatedAt}</p>
        </div>
        <div className={styles.noteDetailsGroup}>
          <h1>Created</h1>
          <p>{createdAt}</p>
        </div>
      </article>
    </section>
  );
};

export default NoteDetails;
