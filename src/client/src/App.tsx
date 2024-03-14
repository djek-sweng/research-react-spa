import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import RootLayout from './layouts/Root';

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import SignoutPage from './pages/Signout';

import QueryClient from './lib/api/query-client';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'home', element: <HomePage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'signin', element: <SigninPage /> },
      { path: 'signout', element: <SignoutPage /> },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={QueryClient}>
      <RouterProvider router={Router} />
    </QueryClientProvider>
  );
}
