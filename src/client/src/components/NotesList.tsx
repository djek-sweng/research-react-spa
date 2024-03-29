import NotesListItem from './NotesListItem';
import { QueryNoteDto } from '../lib/api/dtos';

import styles from './NotesList.module.css';

type Props = {
  notes: QueryNoteDto[];
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
