
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_apiKey,
  authDomain: process.env.REACT_authDomain,
  projectId: process.env.REACT_projectId,
  storageBucket: process.env.REACT_REACT_storageBucket,
  messagingSenderId: process.env.REACT_messagingSenderId,
  appId: process.env.REACT_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;