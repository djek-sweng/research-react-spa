import { Note } from '../lib/api/dtos';

import styles from './NotesListItem.module.css';

type Props = {
  note: Note;
};

const NotesListItem: React.FC<Props> = ({ note }) => {
  return (
    <li>
      <article className={styles.card}>
        <h1>{note.title}</h1>
        <p>{note.tag}</p>
        <p>{note.content}</p>
      </article>
    </li>
  );
};

export default NotesListItem;
