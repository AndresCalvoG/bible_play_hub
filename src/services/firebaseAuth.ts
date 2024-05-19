import { auth } from "./firebaseInit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  UserCredential,
  User,
  Unsubscribe,
} from "firebase/auth";

auth.languageCode = "es";

const createNewUserAuth = async (
  email: string,
  password: string,
  name: string,
  lastName: string
): Promise<any> => {
  let userCredential: UserCredential | null = null;
  try {
    userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const imgDefault = "";
    await updateProfileAuth(userCredential.user, name, lastName, imgDefault);
    var actionCodeSettings = {
      url: "https://ipucmanager.web.app/#/?email=" + userCredential.user.email,
      handleCodeInApp: true,
    };
    await sendEmailVerification(userCredential.user, actionCodeSettings);
    return userCredential;
  } catch (error) {
    return error;
  }
};
const loginUserAuth = async (email: string, password: string): Promise<any> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    return error;
  }
};
const logOutAuth = async (): Promise<any> => {
  try {
    signOut(auth);
  } catch (error) {
    return error;
  }
};
const authStateListener = (authListener: (user: any) => void): Unsubscribe => {
  return onAuthStateChanged(auth, authListener);
};
const updateProfileAuth = async (
  user: User,
  name: string,
  lastName: string,
  imageURL: string
): Promise<any> => {
  updateProfile(user, {
    displayName: `${name} ${lastName}`,
    photoURL: imageURL,
  });
};
const passwordResetFromEmail = async (email: string): Promise<any> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    return error;
  }
};
const getAuthJWTId = async () => {
  const token = await auth.currentUser?.getIdToken(true);
  return token;
};

export {
  createNewUserAuth,
  loginUserAuth,
  authStateListener,
  logOutAuth,
  updateProfileAuth,
  passwordResetFromEmail,
  getAuthJWTId,
};
