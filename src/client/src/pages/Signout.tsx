import PageContent from '../components/PageContent';

import { removeToken } from '../lib/misc/local-store';

export default function Signout() {
  removeToken();

  return (
    <PageContent title="Signout">
      <p>You are signed out!</p>
    </PageContent>
  );
}
