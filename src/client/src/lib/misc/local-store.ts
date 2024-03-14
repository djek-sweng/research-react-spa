import { TokenDto } from '../api/dtos';

export function setToken(token: TokenDto) {
  localStorage.setItem('access_token', token.access_token);
  localStorage.setItem('expires_in', token.expires_in.toString());
  localStorage.setItem('user_id', token.user_id.toString());
}

export function removeToken() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('expires_in');
  localStorage.removeItem('user_id');
}
