import PageContent from '../components/PageContent';
// import NotesList from '../components/NotesList';
// import ErrorBlock from '../components/ErrorBlock';
// import LoadingIndicator from '../components/LoadingIndicator';
// import { useLoadNotes } from '../lib/api/query-client';

function ProfilePage() {
  // const { data: notes, isLoading, error, isError } = useLoadNotes();

  const content = <p>Manage profile here.</p>;

  // if (isLoading) {
  //   content = <LoadingIndicator />;
  // }

  // if (isError) {
  //   content = <ErrorBlock title="Notes Error" message={error.message} />;
  // }

  // if (notes) {
  //   content = <NotesList notes={notes} />;
  // }

  return <PageContent title="User Profile">{content}</PageContent>;
}

export default ProfilePage;
