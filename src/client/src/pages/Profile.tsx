import PageContent from '../components/PageContent';

import ErrorBlock from '../components/ErrorBlock';
import LoadingIndicator from '../components/LoadingIndicator';
import { useLoadUserProfile } from '../lib/api/query-client';

function Profile() {
  const { data: profile, isLoading, error, isError } = useLoadUserProfile();

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = <ErrorBlock title="Profile Error" message={error.message} />;
  }

  if (profile) {
    content = (
      <article>
        <p>Hello {profile.name}!</p>
        <p>Email: {profile.email}</p>
        <p>Status: {profile.status}</p>
      </article>
    );
  }

  return <PageContent title="Profile">{content}</PageContent>;
}

export default Profile;
