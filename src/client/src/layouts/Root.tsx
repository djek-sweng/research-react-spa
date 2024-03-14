import { Outlet } from 'react-router-dom';

import RootNavigation from './../components/RootNavigation';

export default function Root() {
  return (
    <>
      <RootNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
