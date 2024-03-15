import { Link, useNavigate } from 'react-router-dom';

import PageContent from './../components/PageContent';
import ErrorBlock from '../components/ErrorBlock';
import LoadingIndicator from '../components/LoadingIndicator';
import { useLoadNoteById, useDeleteNoteById } from '../lib/api/query-client';

import styles from './NoteDetails.module.css';
import { useParamsId } from '../lib/hooks/use-params';

export default function NoteDetails() {
  const navigate = useNavigate();

  const id = useParamsId();

  const { data: note, isLoading, error, isError } = useLoadNoteById(id);

  const { mutate } = useDeleteNoteById();

  const handleDelete = () => {
    mutate(id);
    navigate('/notes');
  };

  let content = <p>Please create notes.</p>;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = <ErrorBlock title="Load Note Error" message={error.message} />;
  }

  if (note) {
    content = (
      <section className={styles.noteDetails}>
        <header>
          <nav>
            <button onClick={handleDelete}>Delete</button>
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
  }

  return <PageContent title="Note Details">{content}</PageContent>;
}
