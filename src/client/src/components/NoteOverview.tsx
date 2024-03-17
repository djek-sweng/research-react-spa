import { Link } from 'react-router-dom';

import { QueryNoteDto } from '../lib/api/dtos';

import styles from './NoteOverview.module.css';

type Props = { note: QueryNoteDto; onDelete: (id: number) => void };

const NoteOverview: React.FC<Props> = ({ note, onDelete }) => {
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
        </div>
        <div className={styles.noteDetailsGroup}>
          <h1>Content</h1>
          <p>{note.content}</p>
        </div>
      </article>
    </section>
  );
};

export default NoteOverview;
