import { useNavigate } from 'react-router-dom';

import PageContent from './../components/PageContent';
import SignupForm from '../components/SignupForm';
import ErrorBlock from '../components/ErrorBlock';

import { useSignup } from '../lib/api/query-client';
import { setToken } from '../lib/misc/auth';

export default function Signup() {
  const navigate = useNavigate();

  const {
    mutate: signup,
    isSuccess,
    data: token,
    isError,
    error,
  } = useSignup();

  if (isSuccess && token) {
    setToken(token);
    navigate('/home');
  }

  return (
    <PageContent title="Signup">
      <SignupForm onSubmit={signup} />
      {isError && <ErrorBlock title="Signup Error" message={error.message} />}
    </PageContent>
  );
}
