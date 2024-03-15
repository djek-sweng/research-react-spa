import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

import {
  signup,
  signin,
  loadNotes,
  loadNoteById,
  createNote,
  deleteNoteById,
} from './http-client';
import { setToken } from '../misc/auth';

const STALE_TIME = 5_000;
const GC_TIME = 2 * STALE_TIME;

const queryClient = new QueryClient();

export default queryClient;

export const QUERY_KEY_NOTES = ['notes'];

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
    queryFn: () => loadNotes(),
    queryKey: QUERY_KEY_NOTES,
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });
}

export function useLoadNoteById(id: string) {
  return useQuery({
    queryFn: () => loadNoteById(id),
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

export function useDeleteNoteById() {
  return useMutation({
    mutationFn: deleteNoteById,
    // onSuccess: () =>
    //   queryClient.invalidateQueries({ queryKey: QUERY_KEY_NOTES }),
  });
}
