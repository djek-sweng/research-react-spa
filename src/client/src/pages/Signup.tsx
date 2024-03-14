import { useNavigate } from 'react-router-dom';

import PageContent from './../components/PageContent';
import SignupForm from '../components/SignupForm';
import ErrorBlock from '../components/ErrorBlock';

import { useSignup } from '../lib/api/query-client';

export default function Signup() {
  const navigate = useNavigate();

  const { mutate, isSuccess, isError, error } = useSignup();

  if (isSuccess) {
    navigate('/home');
  }

  return (
    <PageContent title="Signup">
      <SignupForm onSubmit={mutate} />
      {isError && <ErrorBlock title={'Error'} message={error.message} />}
    </PageContent>
  );
}
