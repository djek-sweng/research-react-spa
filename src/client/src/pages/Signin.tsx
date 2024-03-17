import { useNavigate } from 'react-router-dom';

import SigninForm from '../components/SigninForm';
import PageContent from './../components/PageContent';
import ErrorBlock from '../components/ErrorBlock';

import { useSignin } from '../lib/api/query-client';
import { setToken } from '../lib/misc/auth';

export default function Signin() {
  const navigate = useNavigate();

  const {
    mutate: signin,
    isSuccess,
    data: token,
    isError,
    error,
  } = useSignin();

  if (isSuccess && token) {
    setToken(token);
    navigate('/home');
  }

  return (
    <PageContent title="Signin">
      <SigninForm onSubmit={signin} />
      {isError && <ErrorBlock title="Signin Error" message={error.message} />}
    </PageContent>
  );
}
