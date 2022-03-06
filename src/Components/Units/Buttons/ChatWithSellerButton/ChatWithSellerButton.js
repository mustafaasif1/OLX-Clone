import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AuthModalContext } from '../../../Modals/Context/AuthModalContext';
import { ChatButton } from './styled';
import { selectUser } from '../../../../Redux/Features/userSlice';
import { AuthModal } from '../../../Modals/AuthModal';

export const ChatWithSellerButton = () => {
  const { setShowModal } = useContext(AuthModalContext);

  const user = useSelector(selectUser);

  return (
    <>
      <ChatButton
        onClick={() => {
          if (user == null) {
            setShowModal(true);
          } else {
            console.log('User is logged in');
          }
        }}
      >
        Chat with seller
      </ChatButton>
      <AuthModal />
    </>
  );
};
