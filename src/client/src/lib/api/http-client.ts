import HttpClientError from './http-client-error';
import { SignupDto, SigninDto, TokenDto, CreateNoteDto, NoteDto } from './dtos';
import { getBearer } from '../misc/auth';

const _BASE_URL = 'http://localhost:5000';

export async function signup(dto: SignupDto): Promise<TokenDto> {
  const response = await fetch(`${_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(response, `Signup failed! ${data.message}`);
  }

  return data;
}

export async function signin(dto: SigninDto): Promise<TokenDto> {
  const response = await fetch(`${_BASE_URL}/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(response, `Signin failed! ${data.message}`);
  }

  return data;
}

export async function loadNotes(signal: AbortSignal) {
  const response = await fetch(`${_BASE_URL}/notes`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getBearer(),
    },
    signal,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(response, `Load notes failed! ${data.message}`);
  }

  return data;
}

export async function loadNoteById(
  id: string,
  signal: AbortSignal,
): Promise<NoteDto> {
  const response = await fetch(`${_BASE_URL}/notes/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: getBearer(),
    },
    signal,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(response, `Load notes failed! ${data.message}`);
  }

  return data;
}

export async function createNote(dto: CreateNoteDto): Promise<NoteDto> {
  const response = await fetch(`${_BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getBearer(),
    },
    body: JSON.stringify(dto),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(response, `Create note failed! ${data.message}`);
  }

  return data;
}

export async function deleteNoteById(id: string): Promise<NoteDto> {
  const response = await fetch(`${_BASE_URL}/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getBearer(),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(response, `Delete note failed! ${data.message}`);
  }

  return data;
}
