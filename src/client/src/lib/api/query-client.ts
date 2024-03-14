import { QueryClient, useMutation } from '@tanstack/react-query';

import { signup, signin } from './http-client';
import { setToken } from '../misc/local-store';

const queryClient = new QueryClient();

export default queryClient;

export function useSignup() {
  return useMutation({
    mutationFn: signup,
    onSuccess: (token) => setToken(token),
  });
}

export function useSignin() {
  return useMutation({
    mutationFn: signin,
    onSuccess: (token) => setToken(token),
  });
}
