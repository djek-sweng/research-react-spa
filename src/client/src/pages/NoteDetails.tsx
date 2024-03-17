import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import NoteOverview from '../components/NoteOverview';
import PageContent from './../components/PageContent';
import ErrorBlock from '../components/ErrorBlock';
import LoadingIndicator from '../components/LoadingIndicator';
import { useParamsId } from '../lib/hooks/use-params';
import {
  invalidateLoadNotes,
  useLoadNoteById,
  useDeleteNoteById,
} from '../lib/api/query-client';

export default function NoteDetails() {
  const navigate = useNavigate();

  const id = useParamsId();

  const { data: note, isLoading, error, isError } = useLoadNoteById(id);

  const { mutate: deleteNote, isSuccess } = useDeleteNoteById();

  const handleDelete = () => {
    deleteNote(id);
  };

  useEffect(() => {
    if (isSuccess) {
      invalidateLoadNotes();
      navigate('/notes');
    }
  }, [navigate, isSuccess]);

  let content = <p>Please create notes.</p>;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = <ErrorBlock title="Notes Error" message={error.message} />;
  }

  if (note) {
    content = <NoteOverview note={note} onDelete={handleDelete} />;
  }

  return <PageContent title="Note Details">{content}</PageContent>;
}
