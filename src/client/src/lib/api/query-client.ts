import { QueryClient, useMutation } from '@tanstack/react-query';

import { signin } from './http-client';
import { setToken } from '../misc/local-store';

const queryClient = new QueryClient();

export default queryClient;

export function useSignin() {
  return useMutation({
    mutationFn: signin,
    onSuccess: (token) => setToken(token),
  });
}
