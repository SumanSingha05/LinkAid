import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import Service from "../Service";
//import { FIREBASE_AUTH_ERROR_CODES } from "../../constants";
import { db } from "../../config/firebase";

export const AuthContext = createContext();
const serviceInstance = new Service();

const AuthContextProvider = ({ children }) => {
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [authUser, setAuthUser] = useState(undefined);
  const [authError, setAuthError] = useState(null);
  const [isRegLoading, setIsRegLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(undefined);
  const [regError, setRegError] = useState(null);

  const navigate = useNavigate();

  /**
   * Function to handle Signup
   */
  const handleSignup = async (email, password) => {
    setAuthError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User is registered:", user.uid);
      navigate("/details"); //new

      //return signupRes.user;
    } catch (error) {
      // const errMsg = FIREBASE_AUTH_ERROR_CODES[error.code];

      // errMsg
      //   ? setAuthError(errMsg)
      //   : setAuthError(FIREBASE_AUTH_ERROR_CODES.DEFAULT);
      // return null;
      console.error("error signing up:", error);
    }
  };

  /**
   * Function to handle Login
   */
  const handleLogin = async () => {
    setAuthError(null);

    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "userDetails", user.uid));
      const ngoDoc = await getDoc(doc(db, "ngoDetails", user.uid));

      if (userDoc.exists()) {
        navigate("/issues");
      } else if (ngoDoc.exists()) {
        navigate("/solution");
      } else {
        console.error("User details not found in Firestore.");
        setError("User details not found. Please contact support.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setError(error.message);
    }
  };

  const value = {
    isAuthLoading,
    // isRegLoading,
    // authUser,
    // authError,
    // regError,

    handleSignup,
    handleLogin,
    //handleUserRegisteredOrNot,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
//provider er moddhe joto gulo chidren wrap thake..tarai access pabe
