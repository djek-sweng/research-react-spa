import { Outlet } from 'react-router-dom';

import ProfileNavigation from '../components/ProfileNavigation';

const Profile = () => {
  return (
    <>
      <ProfileNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Profile;
