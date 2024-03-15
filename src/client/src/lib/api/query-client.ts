import { QueryClient, useMutation } from '@tanstack/react-query';

import { signup, signin, createNote } from './http-client';
import { setToken } from '../misc/auth';

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

export function useCreateNote() {
  return useMutation({
    mutationFn: createNote,
  });
}
