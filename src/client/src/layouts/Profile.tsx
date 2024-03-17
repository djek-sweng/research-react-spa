import { Outlet } from 'react-router-dom';

import ProfileNavigation from '../components/ProfileNavigation';

export default function Profile() {
  return (
    <>
      <ProfileNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
