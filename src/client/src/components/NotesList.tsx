import { Note } from '../lib/api/dtos';

import styles from './NotesList.module.css';

type Props = {
  notes: Note[];
};

const NotesList: React.FC<Props> = ({ notes }) => {
  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
};

export default NotesList;
