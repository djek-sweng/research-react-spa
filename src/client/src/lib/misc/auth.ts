import { redirect } from 'react-router-dom';

import { TokenDto } from '../api/dtos';

const KEY_TOKEN = 'access_token';

let timer: number;

export function setToken(token: TokenDto) {
  localStorage.setItem(KEY_TOKEN, token.access_token);

  const timeout = token.expires_in * 1000;

  timer = setTimeout(() => removeToken(), timeout);
}

export function removeToken() {
  localStorage.removeItem(KEY_TOKEN);

  clearTimeout(timer);
}

export function getToken() {
  return localStorage.getItem(KEY_TOKEN);
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
}
