import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthModalContext = createContext({});

export const AuthModalProvider = ({ children }) => {
  const [modalName, setModalName] = useState('AllAuthOptions');
  const [showModal, setShowModal] = useState(false);

  return (
    <AuthModalContext.Provider
      value={{
        modalName,
        setModalName,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

AuthModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
