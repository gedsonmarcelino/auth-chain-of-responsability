import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './styles/layout.css';

import { LoginPage } from './pages/LoginPage.tsx';
import { Root } from './Root.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { MFAPage } from './pages/MFAPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: LoginPage },
      { path: "mfa", Component: MFAPage },
      { path: "home", Component: HomePage },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
