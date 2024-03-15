import { Link } from 'react-router-dom';

import PageContent from './../components/PageContent';
import ErrorBlock from '../components/ErrorBlock';
import LoadingIndicator from '../components/LoadingIndicator';
import { useLoadNoteById } from '../lib/api/query-client';

import styles from './NoteDetails.module.css';
import { useParamsId } from '../lib/hooks/use-params';

export default function NoteDetails() {
  const id = useParamsId();

  const { data: note, isLoading, error, isError } = useLoadNoteById(id);

  const handleStartDelete = () => {};

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
          <h1>{note.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <article>
          <h2>Tag</h2>
          <p className={styles.noteDetailsTag}>{note.tag}</p>
          <h2>Content</h2>
          <p className={styles.noteDetailsContent}>{note.content}</p>
        </article>
      </section>
    );
  }

  return <PageContent title="Note Details">{content}</PageContent>;
}
