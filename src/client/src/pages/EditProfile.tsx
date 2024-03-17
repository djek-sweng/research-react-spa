import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PageContent from '../components/PageContent';
import ProfileForm from '../components/ProfileForm';
import ErrorBlock from '../components/ErrorBlock';
import LoadingIndicator from '../components/LoadingIndicator';
import {
  useLoadUserProfile,
  useUpdateUserProfile,
  invalidateLoadUserProfile,
} from '../lib/api/query-client';
import { MutateProfileDto } from '../lib/api/dtos';

function EditProfile() {
  const navigate = useNavigate();

  const { data: profile, isLoading, error, isError } = useLoadUserProfile();

  const { mutate: updateProfile, isSuccess: isSuccessUpdate } =
    useUpdateUserProfile();

  const handleUpdateProfile = (dto: MutateProfileDto) => {
    updateProfile(dto);
  };

  useEffect(() => {
    if (isSuccessUpdate) {
      invalidateLoadUserProfile();
      navigate('/profile');
    }
  }, [navigate, isSuccessUpdate]);

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
