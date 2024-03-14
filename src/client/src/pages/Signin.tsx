import { useMutation } from '@tanstack/react-query';

import SigninForm from '../components/SigninForm';
import PageContent from './../components/PageContent';
import { signin } from './../lib/api/http-client';
import { SigninDto, TokenDto } from '../lib/api/dtos';
import { setToken } from '../lib/misc/local-store';

export default function Signin() {
  const { mutate, isError, error } = useMutation({
    mutationFn: signin,
    onSuccess: (token) => handleSucces(token),
  });

  const handleSubmit = (dto: SigninDto) => mutate(dto);

  const handleSucces = (token: TokenDto) => setToken(token);

  return (
    <PageContent title="Signin">
      <SigninForm onSubmit={handleSubmit} />
      {isError && <p>{error.message}</p>}
    </PageContent>
  );
}
