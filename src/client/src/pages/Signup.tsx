import { useMutation } from '@tanstack/react-query';

import PageContent from './../components/PageContent';
import SignupForm from '../components/SignupForm';
import { signup } from './../lib/api/http-client';
import { SignupDto, TokenDto } from '../lib/api/dtos';
import { setToken } from '../lib/misc/local-store';

export default function Signup() {
  const { mutate, isError, error } = useMutation({
    mutationFn: signup,
    onSuccess: (token) => handleSucces(token),
  });

  const handleSubmit = (dto: SignupDto) => mutate(dto);

  const handleSucces = (token: TokenDto) => setToken(token);

  return (
    <PageContent title="Signup">
      <SignupForm onSubmit={handleSubmit} />
      {isError && <p>{error.message}</p>}
    </PageContent>
  );
}
