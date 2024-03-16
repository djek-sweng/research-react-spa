import { useEffect } from 'react';
import { useSubmit, Outlet } from 'react-router-dom';

import RootNavigation from './../components/RootNavigation';
import { useRootLoaderData } from '../lib/misc/root-loader';

export default function Root() {
  const { isAuth, tokenExpiration } = useRootLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!isAuth) {
      return;
    }

    const autoLogout = () => {
      submit(null, { method: 'post', action: '/signout' });
    };

    // console.log({ tokenExpiration });

    if (tokenExpiration < 1) {
      autoLogout();
      return;
    }

    const timer = setTimeout(() => {
      autoLogout();
    }, tokenExpiration);

    return () => clearTimeout(timer);
  }, [isAuth, tokenExpiration, submit]);

  return (
    <>
      <RootNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
