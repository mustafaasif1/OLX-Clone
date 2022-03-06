import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { LoginOptionsContainer, Disclaimer } from './styled';
import {
  LoginWithGoogle,
  LoginWithFacebook,
} from '../../../../Backend/Firebase';
import { ReactComponent as FacebookIcon } from '../../../../Assets/Icons/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../../../Assets/Icons/google.svg';
import profilePicture from '../../../../Assets/Pictures/iconProfilepicture.png';
import { AuthModalContext } from '../../../Modals/Context/AuthModalContext';

export const AllAuthOptions = () => {
  const dispatch = useDispatch();
  const { setModalName, setShowModal } = useContext(AuthModalContext);

  return (
    <>
      <Modal.Header closeButton />
      <Modal.Body>
        <LoginOptionsContainer>
          <img src={profilePicture} alt="" />
          <p>Save all your favorite items in one place</p>

          <button
            type="button"
            onClick={() => {
              LoginWithFacebook(dispatch);
              setShowModal(false);
            }}
          >
            <div>
              <FacebookIcon id="facebook" />
              Continue with facebook
            </div>
          </button>
          <button
            type="button"
            onClick={() => {
              LoginWithGoogle(dispatch);
              setShowModal(false);
            }}
          >
            <div>
              <GoogleIcon id="google" />
              Continue with google
            </div>
          </button>
          <button type="button" onClick={() => setModalName('LoginCred')}>
            <div>Continue with email</div>
          </button>
        </LoginOptionsContainer>
        <Disclaimer>
          <p>We won&apos;t share your personal details with anyone</p>
          <p>
            If you continue, you are accepting{' '}
            <span>OLX Terms and Conditions and Privacy Policy</span>
          </p>
        </Disclaimer>
      </Modal.Body>
    </>
  );
};
