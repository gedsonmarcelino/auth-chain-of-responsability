import { createBrowserRouter } from 'react-router';

import { LoginPage } from '../../pages/LoginPage.tsx';
import { Root } from '../../Root.tsx';
import { HomePage } from '../../pages/HomePage.tsx';
import { MFAPage } from '../../pages/MFAPage.tsx';
import { PAGE_NAMES } from './constants.ts';
import { TermsPage } from '../../pages/TermsPage.tsx';

export const router = createBrowserRouter([
    {
      path: PAGE_NAMES.LOGIN,
      Component: Root,
      children: [
        { index: true, Component: LoginPage },
        { path: PAGE_NAMES.MFA, Component: MFAPage },
        { path: PAGE_NAMES.HOME, Component: HomePage },
        { path: PAGE_NAMES.TERMS, Component: TermsPage },
      ]
    },
  ]);