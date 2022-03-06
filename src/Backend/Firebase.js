import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  FacebookAuthProvider,
} from 'firebase/auth';
import { login, logout } from '../Redux/Features/userSlice';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'olx-clone-aa22e.firebaseapp.com',
  projectId: 'olx-clone-aa22e',
  storageBucket: 'olx-clone-aa22e.appspot.com',
  messagingSenderId: '644945223962',
  appId: '1:644945223962:web:d279a1cd3053ad78cfcca3',
  measurementId: 'G-7GF6MVT789',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const SignupWithEmailAndPassword = async (
  name,
  email,
  password,
  dispatch
) => {
  const auth = getAuth();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    await updateProfile(user, {
      displayName: name,
    });
    dispatch(
      login({
        email: user.email,
        uid: user.uid,
        displayName: name,
      })
    );
  } catch (error) {
    alert(error);
  }
};

export const LoginWithEmailAndPassword = async (email, password, dispatch) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    dispatch(
      login({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
      })
    );
  } catch (error) {
    alert(error);
  }
};

export const SignoutUser = async (dispatch) => {
  const auth = getAuth();

  try {
    await signOut(auth);
    dispatch(logout());
  } catch (error) {
    alert(error);
  }
};

export const LoginWithFacebook = async (dispatch) => {
  const auth = getAuth();
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const { user } = result;
    await updateProfile(user, {
      displayName: user.displayName,
    });
    dispatch(
      login({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
      })
    );
  } catch (error) {
    alert(error);
  }
};

export const LoginWithGoogle = async (dispatch) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const { user } = result;
    await updateProfile(user, {
      displayName: user.displayName,
    });
    dispatch(
      login({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
      })
    );
  } catch (error) {
    alert(error);
  }
};
