import { useRouteLoaderData } from 'react-router-dom';

import { isAuth } from './auth';

interface LoaderData {
  isAuth: boolean;
}

export default function loader() {
  return {
    isAuth: isAuth(),
  };
}

export const ROOT_LOADER_ID = 'root';

export function useRootLoaderData() {
  return useRouteLoaderData(ROOT_LOADER_ID) as LoaderData;
}
