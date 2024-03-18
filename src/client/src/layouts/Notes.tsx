import { Outlet } from 'react-router-dom';

import NotesNavigation from '../components/NotesNavigation';

const Notes = () => {
  return (
    <>
      <NotesNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Notes;
