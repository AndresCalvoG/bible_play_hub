import { Auth, getAuth } from "firebase/auth";
import firebaseConfig from "./configFirebase";
import { FirebaseApp, initializeApp } from "firebase/app";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { Firestore, getFirestore } from "firebase/firestore";
import { Messaging, getMessaging } from "firebase/messaging";

let app: FirebaseApp | undefined = undefined;
let auth: Auth;
let storage: FirebaseStorage;
let db: Firestore;
let messaging: Messaging;
let isInitialized = false;

async function init(): Promise<boolean> {
  if (isInitialized) {
    return true;
  }
  try {
    app = initializeApp(firebaseConfig);
    // auth = getAuth();
    // storage = getStorage(app);
    // db = getFirestore(app);
    // messaging = getMessaging(app);
    isInitialized = true;
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
init();

export { auth, storage, db, messaging, init };
