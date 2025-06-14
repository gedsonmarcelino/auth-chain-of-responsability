import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './styles/layout.css';

import { Login } from './pages/Login.tsx';
import { Home } from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Login,
  },
  {
    path: '/home',
    Component: Home,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
