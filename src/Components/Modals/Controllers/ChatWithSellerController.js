import React from 'react';
import { AuthModalProvider } from '../Context/AuthModalContext';
import { ChatWithSellerButton } from '../../Units/Buttons/ChatWithSellerButton/ChatWithSellerButton';

export const ChatWithSellerController = () => (
  <AuthModalProvider>
    <ChatWithSellerButton />
  </AuthModalProvider>
);
