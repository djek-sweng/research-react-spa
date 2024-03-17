import PageContent from '../components/PageContent';
import ProfileForm from '../components/ProfileForm';
import ErrorBlock from '../components/ErrorBlock';
import LoadingIndicator from '../components/LoadingIndicator';
import {
  useLoadUserProfile,
  useUpdateUserProfile,
} from '../lib/api/query-client';
import { MutateProfileDto } from '../lib/api/dtos';

function EditProfile() {
  const { data: profile, isLoading, error, isError } = useLoadUserProfile();

  const { mutate: updateProfile } = useUpdateUserProfile();

  const handleUpdateProfile = (dto: MutateProfileDto) => {
    updateProfile(dto);
  };

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = <ErrorBlock title="Profile Error" message={error.message} />;
  }

  if (profile) {
    content = <ProfileForm profile={profile} onSubmit={handleUpdateProfile} />;
  }

  return <PageContent title="Edit Profile">{content}</PageContent>;
}

export default EditProfile;
