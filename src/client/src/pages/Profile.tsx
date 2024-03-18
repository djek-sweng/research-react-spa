import PageContent from '../components/PageContent';

import LoadingIndicator from '../components/LoadingIndicator';
import ErrorBlock from '../components/ErrorBlock';
import ProfileOverview from '../components/ProfileOverview';
import { useLoadUserProfile } from '../lib/api/query-client';

const Profile = () => {
  const { data: profile, isLoading, error, isError } = useLoadUserProfile();

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = <ErrorBlock title="Profile Error" message={error.message} />;
  }

  if (profile) {
    content = <ProfileOverview profile={profile} />;
  }

  return <PageContent title="Profile">{content}</PageContent>;
};

export default Profile;
