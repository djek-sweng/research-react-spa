import SigninForm from '../components/SigninForm';
import PageContent from './../components/PageContent';

import { useSignin } from '../lib/api/query-client';

export default function Signin() {
  const { mutate, isError, error } = useSignin();

  return (
    <PageContent title="Signin">
      <SigninForm onSubmit={mutate} />
      {isError && <p>{error.message}</p>}
    </PageContent>
  );
}
