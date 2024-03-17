import PageContent from '../components/PageContent';
import NotesList from '../components/NotesList';
import ErrorBlock from '../components/ErrorBlock';
import LoadingIndicator from '../components/LoadingIndicator';
import { useLoadNotes } from '../lib/api/query-client';

function NotesPage() {
  const { data: notes, isLoading, error, isError } = useLoadNotes();

  let content = <p>Please create notes.</p>;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = <ErrorBlock title="Notes Error" message={error.message} />;
  }

  if (notes) {
    content = <NotesList notes={notes} />;
  }

  return <PageContent title="Notes">{content}</PageContent>;
}

export default NotesPage;
