import { redirect } from 'react-router-dom';

import { removeToken } from './auth';

export default function action() {
  removeToken();

  return redirect('/signin');
}
