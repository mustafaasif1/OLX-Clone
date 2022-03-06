import React, { useContext } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { SignupWithEmailAndPassword } from '../../../../Backend/Firebase';
import { ReactComponent as BackIcon } from '../../../../Assets/Icons/back.svg';
import { ReactComponent as LogoIcon } from '../../../../Assets/Icons/logo.svg';
import {
  BackContainer,
  EnterEmailContainer,
  LoginButton,
  GoToLogin,
  CustomTextInput,
  Error,
} from './styled';
import { AuthModalContext } from '../../../Modals/Context/AuthModalContext';

export const SignupCred = () => {
  const dispatch = useDispatch();
  const { setModalName, setShowModal } = useContext(AuthModalContext);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('*Name is required')
      .min(4, '*Name must have at least 4 characters')
      .max(100, '*Name must be less than 100 characters'),
    email: yup
      .string()
      .required('*Email is required')
      .email('*Must be a valid email address')
      .max(100, '*Email must be less than 100 characters'),
    password: yup
      .string()
      .required('*Password is required')
      .min(6, '*Password must have at least 6 characters'),
    confirmPassword: yup
      .string()
      .required('*Password is required')
      .oneOf([yup.ref('password'), null], '*Passwords must match'),
  });

  return (
    <>
      <Modal.Header closeButton>
        <BackContainer onClick={() => setModalName('LoginCred')}>
          <BackIcon id="back" />
        </BackContainer>
      </Modal.Header>
      <Modal.Body>
        <EnterEmailContainer>
          <LogoIcon id="logo" />
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // When button submits form and form is in the process of submitting, submit button is disabled
              setSubmitting(true);
              SignupWithEmailAndPassword(
                values.name,
                values.email,
                values.password,
                dispatch
              );
              // Resets form after submission is complete
              resetForm();
              // Sets setSubmitting to false after form is reset
              setSubmitting(false);
              setShowModal();
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
                <Form.Group controlId="exampleForm.ControlInput1">
                  <CustomTextInput>
                    <h6>Enter your Name</h6>
                    <Form.Control
                      type="text"
                      placeholder="John Doe"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={touched.name && errors.name ? 'error' : null}
                    />
                    {touched.name && errors.name ? (
                      <Error>{errors.name}</Error>
                    ) : null}
                  </CustomTextInput>
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
                  <CustomTextInput>
                    <h6>Re-Enter your Password</h6>
                    <Form.Control
                      type="password"
                      placeholder="**********"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      className={
                        touched.confirmPassword && errors.confirmPassword
                          ? 'error'
                          : null
                      }
                    />
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <Error>{errors.confirmPassword}</Error>
                    ) : null}
                  </CustomTextInput>

                  <LoginButton
                    type="submit"
                    onSubmit={handleSubmit}
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </LoginButton>
                </Form.Group>
              </Form>
            )}
          </Formik>

          <GoToLogin>
            <div>Already have an account?</div>
            <button
              type="button"
              onClick={() => {
                setModalName('LoginCred');
              }}
            >
              Login
            </button>
          </GoToLogin>

          <p>
            We won&apos;t post reveal your email to anyone else nor use it to
            send you spam
          </p>
        </EnterEmailContainer>
      </Modal.Body>
    </>
  );
};
