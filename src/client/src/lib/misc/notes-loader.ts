import { useRouteLoaderData, defer } from 'react-router-dom';

import { NoteDto } from '../api/dtos';
import { loadNotes } from '../api/http-client';

interface LoaderData {
  notes: NoteDto[];
}

export default function loader() {
  // const notes = [
  //   {
  //     id: 1,
  //     title: 'title-1',
  //     content: 'content-1',
  //     tag: 'tag-1',
  //     createdAt: 'createdAt-1',
  //     updatedAt: 'updatedAt-1',
  //     userId: 'userId-1',
  //   },
  //   {
  //     id: 2,
  //     title: 'title-2',
  //     content: 'content-2',
  //     tag: 'tag-2',
  //     createdAt: 'createdAt-2',
  //     updatedAt: 'updatedAt-2',
  //     userId: 'userId-2',
  //   },
  // ];

  return defer({
    notes: loadNotes(),
  });
}

export const NOTES_LOADER_ID = 'notes';

export function useNotesLoaderData() {
  return useRouteLoaderData(NOTES_LOADER_ID) as LoaderData;
}
