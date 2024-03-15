import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

import {
  signup,
  signin,
  loadNotes,
  loadNoteById,
  createNote,
} from './http-client';
import { setToken } from '../misc/auth';

const QUERY_KEY_NOTES = ['notes'];

const STALE_TIME = 5_000;
const GC_TIME = 2 * STALE_TIME;

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

export function useLoadNotes() {
  return useQuery({
    queryFn: ({ signal }) => loadNotes(signal),
    queryKey: QUERY_KEY_NOTES,
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });
}

export function useLoadNoteById(id: string) {
  return useQuery({
    queryFn: ({ signal }) => loadNoteById(id, signal),
    queryKey: ['notes', id],
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });
}

export function useCreateNote() {
  return useMutation({
    mutationFn: createNote,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_NOTES }),
  });
}
