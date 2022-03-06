import React, { useContext } from 'react';
import { AuthModal } from '../../../Modals/AuthModal';
import { LinkButton } from './styled';
import { AuthModalContext } from '../../../Modals/Context/AuthModalContext';

export const NavbarLoginButton = () => {
  const { setShowModal } = useContext(AuthModalContext);

  return (
    <>
      <LinkButton onClick={() => setShowModal(true)}>Login</LinkButton>
      <AuthModal />
    </>
  );
};
