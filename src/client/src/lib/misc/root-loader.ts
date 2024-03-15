import { useRouteLoaderData } from 'react-router-dom';

import { isAuth, getTokenExpiration } from './auth';

interface LoaderData {
  isAuth: boolean;
  tokenExpiration: number;
}

export default function loader() {
  return {
    isAuth: isAuth(),
    tokenExpiration: getTokenExpiration(),
  };
}

export const ROOT_LOADER_ID = 'root';

export function useRootLoaderData() {
  return useRouteLoaderData(ROOT_LOADER_ID) as LoaderData;
}
