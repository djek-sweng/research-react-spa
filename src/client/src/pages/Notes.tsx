import PageContent from '../components/PageContent';
import NotesList from '../components/NotesList';
import ErrorBlock from '../components/ErrorBlock';
import { useLoadNotes } from '../lib/api/query-client';

function NotesPage() {
  const { data: notes, isLoading, error, isError } = useLoadNotes();

  let content = <p>Please create notes.</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <ErrorBlock title="Load Notes Error" message={error.message} />;
  }

  if (notes) {
    content = <NotesList notes={notes} />;
  }

  return <PageContent title="All Notes">{content}</PageContent>;
}

export default NotesPage;
