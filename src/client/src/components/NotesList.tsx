import NotesListItem from './NotesListItem';
import { NoteDto } from '../lib/api/dtos';

import styles from './NotesList.module.css';

type Props = {
  notes: NoteDto[];
};

const NotesList: React.FC<Props> = ({ notes }) => {
  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <NotesListItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NotesList;
