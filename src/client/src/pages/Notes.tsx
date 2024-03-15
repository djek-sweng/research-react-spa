import { Suspense } from 'react';
import { Await } from 'react-router-dom';

import PageContent from '../components/PageContent';
import NotesList from '../components/NotesList';
import { useNotesLoaderData } from '../lib/misc/notes-loader';

function NotesPage() {
  const { notes } = useNotesLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={notes}>
        {(loadedNotes) => {
          return (
            <PageContent title="All Notes">
              <NotesList notes={loadedNotes} />
            </PageContent>
          );
        }}
      </Await>
    </Suspense>
  );
}

export default NotesPage;
