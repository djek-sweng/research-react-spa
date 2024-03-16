import { useNavigate } from 'react-router-dom';

import NoteForm from '../components/NoteForm';
import PageContent from './../components/PageContent';
import ErrorBlock from '../components/ErrorBlock';
import LoadingIndicator from '../components/LoadingIndicator';
import { useParamsId } from '../lib/hooks/use-params';
import {
  useLoadNoteById,
  useUpdateNoteById,
  invalidateLoadNotes,
} from '../lib/api/query-client';
import { MutateNoteDto } from '../lib/api/dtos';

export default function EditNote() {
  const navigate = useNavigate();

  const id = useParamsId();

  console.log({ id });

  const {
    data: note,
    isLoading,
    error: errorLoad,
    isError: isErrorLoad,
  } = useLoadNoteById(id);

  const {
    mutate,
    isSuccess: isSuccessUpdate,
    isError: isErrorUpdate,
    error: errorUpdate,
  } = useUpdateNoteById();

  const handleUpdate = (dto: MutateNoteDto) => {
    mutate(dto);
  };

  if (isSuccessUpdate) {
    invalidateLoadNotes();
    navigate('/notes');
  }

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (note) {
    content = <NoteForm onSubmit={handleUpdate} note={note} />;
  }

  return (
    <PageContent title="Edit Note">
      {content}
      {isErrorLoad && (
        <ErrorBlock title="Load Note Error" message={errorLoad.message} />
      )}
      {isErrorUpdate && (
        <ErrorBlock title="Update Note Error" message={errorUpdate.message} />
      )}
    </PageContent>
  );
}
