import { Outlet } from 'react-router-dom';

import NotesNavigation from '../components/NotesNavigation';

export default function Notes() {
  return (
    <>
      <NotesNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
