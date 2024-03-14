import { TokenDto } from '../api/dtos';

export function setToken(token: TokenDto) {
  localStorage.setItem('access_token', token.access_token);
  localStorage.setItem('user_id', token.user_id.toString());
}

export function removeToken() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('user_id');
}
