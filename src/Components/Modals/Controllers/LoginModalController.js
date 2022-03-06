import React from 'react';
import { AuthModalProvider } from '../Context/AuthModalContext';
import { NavbarLoginButton } from '../../Units/Buttons/NavbarLoginButton/NavbarLoginButton';

export const LoginModalController = () => (
  <AuthModalProvider>
    <NavbarLoginButton />
  </AuthModalProvider>
);
