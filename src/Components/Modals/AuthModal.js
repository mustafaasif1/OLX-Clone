import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { AllAuthOptions } from '../Units/ModalSubsections/AllAuthOptions/AllAuthOptions';
import { LoginCred } from '../Units/ModalSubsections/LoginCred/LoginCred';
import { SignupCred } from '../Units/ModalSubsections/SignupCred/SignupCred';
import { AuthModalContext } from './Context/AuthModalContext';

export const AuthModal = () => {
  const { modalName, showModal, setShowModal } = useContext(AuthModalContext);

  const renderSwitch = (modal) => {
    switch (modal) {
      case 'AllAuthOptions':
        return <AllAuthOptions />;
      case 'LoginCred':
        return <LoginCred />;
      case 'SignupCred':
        return <SignupCred />;
      default:
        return <AllAuthOptions />;
    }
  };

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {renderSwitch(modalName)}
    </Modal>
  );
};
