import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import RootLayout from './layouts/Root';
import NotesLayout from './layouts/Notes';
import ProfileLayout from './layouts/Profile';

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import NotesPage from './pages/Notes';
import NewNotePage from './pages/NewNote';
import NotePage from './pages/Note';
import EditNotePage from './pages/EditNote';
import ProfilePage from './pages/Profile';
import EditProfilePage from './pages/EditProfile';

import queryClient from './lib/api/query-client';
import rootLoader, { ROOT_LOADER_ID } from './lib/misc/root-loader';
import signoutAction from './lib/misc/signout-action';
import { redirectAuthGuard } from './lib/misc/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: ROOT_LOADER_ID,
    loader: rootLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'home', element: <HomePage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'signin', element: <SigninPage /> },
      { path: 'signout', action: signoutAction },
      {
        path: 'notes',
        element: <NotesLayout />,
        loader: redirectAuthGuard,
        children: [
          {
            index: true,
            element: <NotesPage />,
          },
          {
            path: 'new',
            element: <NewNotePage />,
          },
          {
            path: ':id',
            element: <NotePage />,
          },
          {
            path: ':id/edit',
            element: <EditNotePage />,
          },
        ],
      },
      {
        path: 'profile',
        element: <ProfileLayout />,
        loader: redirectAuthGuard,
        children: [
          {
            index: true,
            element: <ProfilePage />,
          },
          {
            path: 'edit',
            element: <EditProfilePage />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
