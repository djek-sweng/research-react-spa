import PageContent from '../components/PageContent';
import ProfileForm from '../components/ProfileForm';
import ErrorBlock from '../components/ErrorBlock';
import LoadingIndicator from '../components/LoadingIndicator';
import { useLoadUserProfile } from '../lib/api/query-client';

function ProfilePage() {
  const { data: profile, isLoading, error, isError } = useLoadUserProfile();

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = <ErrorBlock title="Profile Error" message={error.message} />;
  }

  if (profile) {
    content = <ProfileForm profile={profile} onSubmit={() => {}} />;
  }

  return <PageContent title="User Profile">{content}</PageContent>;
}

export default ProfilePage;
