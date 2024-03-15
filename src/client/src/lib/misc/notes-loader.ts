import { useRouteLoaderData, defer } from 'react-router-dom';

interface LoaderData {
  notes: string;
}

export default function loader() {
  return defer({
    notes: '',
  });
}

export const NOTES_LOADER_ID = 'notes';

export function useNotesLoaderData() {
  return useRouteLoaderData(NOTES_LOADER_ID) as LoaderData;
}
