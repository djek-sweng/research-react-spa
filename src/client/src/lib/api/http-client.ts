import HttpClientError from './http-client-error';
import {
  SignupDto,
  SigninDto,
  TokenDto,
  MutateNoteDto,
  QueryNoteDto,
  QueryProfileDto,
} from './dtos';
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

export async function loadNotes() {
  const response = await fetch(`${_BASE_URL}/notes`, {
    headers: {
      Authorization: getBearer(),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(response, `Load notes failed! ${data.message}`);
  }

  return data;
}

export async function loadNoteById(id: string): Promise<QueryNoteDto> {
  const response = await fetch(`${_BASE_URL}/notes/${id}`, {
    headers: {
      Authorization: getBearer(),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(response, `Load notes failed! ${data.message}`);
  }

  return data;
}

export async function createNote(dto: MutateNoteDto): Promise<QueryNoteDto> {
  const response = await fetch(`${_BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      Authorization: getBearer(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dto),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(response, `Create note failed! ${data.message}`);
  }

  return data;
}

export async function updateNoteById(input: {
  id: string;
  dto: MutateNoteDto;
}): Promise<QueryNoteDto> {
  const response = await fetch(`${_BASE_URL}/notes/${input.id}`, {
    method: 'PUT',
    headers: {
      Authorization: getBearer(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input.dto),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(response, `Update note failed! ${data.message}`);
  }

  return data;
}

export async function deleteNoteById(id: string): Promise<QueryNoteDto> {
  const response = await fetch(`${_BASE_URL}/notes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: getBearer(),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(response, `Delete note failed! ${data.message}`);
  }

  return data;
}

export async function loadUserProfile(): Promise<QueryProfileDto> {
  const response = await fetch(`${_BASE_URL}/users/profile`, {
    headers: {
      Authorization: getBearer(),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new HttpClientError(
      response,
      `Load user profile failed! ${data.message}`,
    );
  }

  return data;
}
