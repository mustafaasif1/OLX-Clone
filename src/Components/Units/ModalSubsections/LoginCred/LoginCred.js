import React, { useContext } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { LoginWithEmailAndPassword } from '../../../../Backend/Firebase';
import {
  BackContainer,
  EnterEmailContainer,
  LoginButton,
  MakeAccount,
  CustomTextInput,
  Error,
} from './styled';
import { ReactComponent as BackIcon } from '../../../../Assets/Icons/back.svg';
import { ReactComponent as LogoIcon } from '../../../../Assets/Icons/logo.svg';
import { AuthModalContext } from '../../../Modals/Context/AuthModalContext';

export const LoginCred = () => {
  const dispatch = useDispatch();
  const { setModalName, setShowModal } = useContext(AuthModalContext);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('*Email is required')
      .email('*Must be a valid email address')
      .max(100, '*Email must be less than 100 characters'),
    password: yup
      .string()
      .required('*Password is required')
      .min(6, '*Password must have at least 6 characters'),
  });

  return (
    <>
      <Modal.Header closeButton>
        <BackContainer onClick={() => setModalName('LoginOptions')}>
          <BackIcon id="back" />
        </BackContainer>
      </Modal.Header>
      <Modal.Body>
        <EnterEmailContainer>
          <LogoIcon id="logo" />
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // When button submits form and form is in the process of submitting, submit button is disabled
              setSubmitting(true);
              LoginWithEmailAndPassword(
                values.email,
                values.password,
                dispatch
              );
              // Resets form after submission is complete
              resetForm();
              // Sets setSubmitting to false after form is reset
              setSubmitting(false);
              setShowModal(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <CustomTextInput>
                    <h6>Enter your Email address</h6>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={touched.email && errors.email ? 'error' : null}
                    />
                    {touched.email && errors.email ? (
                      <Error>{errors.email}</Error>
                    ) : null}
                  </CustomTextInput>
                  <CustomTextInput>
                    <h6>Enter your Password</h6>
                    <Form.Control
                      type="password"
                      placeholder="**********"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={
                        touched.password && errors.password ? 'error' : null
                      }
                    />
                    {touched.password && errors.password ? (
                      <Error>{errors.password}</Error>
                    ) : null}
                  </CustomTextInput>

                  <LoginButton
                    type="submit"
                    onSubmit={handleSubmit}
                    disabled={isSubmitting}
                  >
                    Login
                  </LoginButton>
                </Form.Group>
              </Form>
            )}
          </Formik>

          <MakeAccount>
            <div>Don&apos;t have an account?</div>
            <button
              type="button"
              onClick={() => {
                setModalName('SignupCred');
              }}
            >
              Sign Up
            </button>
          </MakeAccount>

          <p>
            We won&apos;t reveal your email to anyone else nor use it to send
            you spam
          </p>
        </EnterEmailContainer>
      </Modal.Body>
    </>
  );
};
