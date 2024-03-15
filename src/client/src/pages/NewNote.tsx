import { useNavigate } from 'react-router-dom';

import NoteForm from '../components/NoteForm';
import PageContent from './../components/PageContent';
import ErrorBlock from '../components/ErrorBlock';

import queryClient, {
  QUERY_KEY_NOTES,
  useCreateNote,
} from '../lib/api/query-client';

export default function NewNote() {
  const navigate = useNavigate();

  const { mutate, isSuccess, isError, error } = useCreateNote();

  if (isSuccess) {
    queryClient.invalidateQueries({ queryKey: QUERY_KEY_NOTES });
    navigate('/notes');
  }

  return (
    <PageContent title="New Note">
      <NoteForm onSubmit={mutate} />
      {isError && <ErrorBlock title="New Note Error" message={error.message} />}
    </PageContent>
  );
}
