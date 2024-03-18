import { Link } from 'react-router-dom';

import { QueryNoteDto } from '../lib/api/dtos';

import styles from './NotesListItem.module.css';

type Props = {
  note: QueryNoteDto;
};

const NotesListItem: React.FC<Props> = ({ note }) => {
  const title = note.title.slice(0, 20);
  const tag = note.tag.slice(0, 20);
  const content = note.content.slice(0, 100);

  return (
    <li>
      <article className={styles.card}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.tag}>{tag}</p>
        </div>
        <div>
          <p className={styles.content}>{content}</p>
        </div>
        <div className={styles.button}>
          <Link to={`/notes/${note.id}`}>View Details</Link>
        </div>
      </article>
    </li>
  );
};

export default NotesListItem;
