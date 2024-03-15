import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

import {
  signup,
  signin,
  loadNotes,
  loadNoteById,
  createNote,
  deleteNoteById,
} from './http-client';

const STALE_TIME = 5_000;
const GC_TIME = 2 * STALE_TIME;

export default new QueryClient();

export const QUERY_KEY_NOTES = ['notes'];

export function useSignup() {
  return useMutation({
    mutationFn: signup,
  });
}

export function useSignin() {
  return useMutation({
    mutationFn: signin,
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
  });
}

export function useDeleteNoteById() {
  return useMutation({
    mutationFn: deleteNoteById,
  });
}
