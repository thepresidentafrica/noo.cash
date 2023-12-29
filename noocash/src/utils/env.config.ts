import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const env = import.meta.env
const firebaseConfig = {
    apiKey: env.VITE_FIREBASE_apiKey,
    authDomain: env.VITE_FIREBASE_authDomain,
    projectId: env.VITE_FIREBASE_projectId,
    storageBucket: env.VITE_FIREBASE_storageBucket,
    messagingSenderId: env.VITE_FIREBASE_messagingSenderId,
    appId: env.VITE_FIREBASE_appId
}

const app =initializeApp(firebaseConfig)
const analytics =getAnalytics(app);
export {analytics}