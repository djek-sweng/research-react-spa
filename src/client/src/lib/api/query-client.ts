import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

import * as httpClient from './http-client';

const STALE_TIME = 5_000;
const GC_TIME = 2 * STALE_TIME;

const queryClient = new QueryClient();

export default queryClient;

export const QUERY_KEY_NOTES = ['notes'];
export const QUERY_KEY_USER_PROFILE = ['user', 'profile'];

export function useSignup() {
  return useMutation({
    mutationFn: httpClient.signup,
  });
}

export function useSignin() {
  return useMutation({
    mutationFn: httpClient.signin,
  });
}

export function useLoadNotes() {
  return useQuery({
    queryFn: httpClient.loadNotes,
    queryKey: QUERY_KEY_NOTES,
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });
}

export function invalidateLoadNotes() {
  return queryClient.invalidateQueries({
    queryKey: QUERY_KEY_NOTES,
    exact: true,
  });
}

export function useLoadNoteById(id: string) {
  return useQuery({
    queryFn: () => httpClient.loadNoteById(id),
    queryKey: ['notes', id],
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });
}

export function useCreateNote() {
  return useMutation({
    mutationFn: httpClient.createNote,
  });
}

export function useUpdateNoteById() {
  return useMutation({
    mutationFn: httpClient.updateNoteById,
  });
}

export function useDeleteNoteById() {
  return useMutation({
    mutationFn: httpClient.deleteNoteById,
  });
}

export function useLoadUserProfile() {
  return useQuery({
    queryFn: httpClient.loadUserProfile,
    queryKey: QUERY_KEY_NOTES,
    staleTime: STALE_TIME,
    gcTime: GC_TIME,
  });
}
