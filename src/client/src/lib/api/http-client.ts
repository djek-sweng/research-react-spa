import HttpClientError from './http-client-error';
import { SignupDto, SigninDto, TokenDto } from './dtos';

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
