import PageContent from '../components/PageContent';

import { removeToken } from '../lib/misc/auth';

export default function Signout() {
  removeToken();

  return (
    <PageContent title="Signout">
      <p>You are signed out!</p>
    </PageContent>
  );
}
