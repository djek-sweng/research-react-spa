import { redirect } from 'react-router-dom';

import { TokenDto } from '../api/dtos';

const KEY_TOKEN = 'access_token';
const KEY_USER_ID = 'user_id';
const KEY_EXPIRES_IN = 'expires_in';
const KEY_EXPIRES_AT = 'expires_at';

export function setToken(token: TokenDto) {
  const expires_in = token.expires_in;
  const expires_at = new Date();

  expires_at.setSeconds(expires_at.getSeconds() + expires_in);

  localStorage.setItem(KEY_TOKEN, token.access_token);
  localStorage.setItem(KEY_USER_ID, token.user_id.toString());
  localStorage.setItem(KEY_EXPIRES_IN, expires_in.toString());
  localStorage.setItem(KEY_EXPIRES_AT, expires_at.toUTCString());
}

export function removeToken() {
  localStorage.removeItem(KEY_TOKEN);
  localStorage.removeItem(KEY_USER_ID);
  localStorage.removeItem(KEY_EXPIRES_IN);
  localStorage.removeItem(KEY_EXPIRES_AT);
}

export function getToken() {
  return localStorage.getItem(KEY_TOKEN);
}

export function getTokenExpiration() {
  const expires_at = localStorage.getItem(KEY_EXPIRES_AT);

  if (!expires_at) {
    return -1;
  }

  const future = new Date(expires_at);
  const now = new Date();

  const expiration = future.getTime() - now.getTime();

  return expiration;
}

export function getBearer() {
  return 'Bearer ' + getToken();
}

export function isAuth() {
  return getToken() ? true : false;
}

export function redirectAuthGuard() {
  if (!isAuth()) {
    return redirect('/signin');
  }

  return null;
}
