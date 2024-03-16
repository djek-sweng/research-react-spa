import { useNavigate } from 'react-router-dom';

import NoteForm from '../components/NoteForm';
import PageContent from './../components/PageContent';
import ErrorBlock from '../components/ErrorBlock';
import { useCreateNote, invalidateLoadNotes } from '../lib/api/query-client';

export default function NewNote() {
  const navigate = useNavigate();

  const { mutate: createNote, isSuccess, isError, error } = useCreateNote();

  if (isSuccess) {
    invalidateLoadNotes();
    navigate('/notes');
  }

  return (
    <PageContent title="New Note">
      <NoteForm onSubmit={createNote} />
      {isError && <ErrorBlock title="Notes Error" message={error.message} />}
    </PageContent>
  );
}
