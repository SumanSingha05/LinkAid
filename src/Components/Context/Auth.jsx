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
  }; // logged in handled

  //to check is registered or not

  //SHRESTHA'S CODE NEW
  // const userDocRef = db.collection('userDetails').doc(user.uid);
  // const ngoDocRef = db.collection('ngoDetails').doc(user.uid);
  //   const handleUserRegisteredOrNot = async () => {

  //       setIsRegLoading(true);
  //        // Check if user document exists in Firestore in both collections
  //     const userDocRef = db.collection('userDetails').doc(user.uid);
  //     const ngoDocRef = db.collection('ngoDetails').doc(user.uid);
  //     userDocRef.get()
  //     .then((userDocSnapshot) => {
  //       if (userDocSnapshot.exists) {
  //         console.log('User document exists in "users" collection:', userDocSnapshot.data());
  //       } else {
  //         console.log('User document does not exist in "users" collection');
  //       }

  //         // Check the second collection
  //         return ngoDocRef.get();
  //       })
  //       .then((ngoDocSnapshot) => {
  //         if (ngoDocSnapshot.exists) {
  //           console.log('User document exists in "ngo" collection:', ngoDocSnapshot.data());
  //         } else {
  //           console.log('User document does not exist in "ngo" collection');
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error checking user documents:', error);
  //       });

  // }  // handle login closed

  //   // const handleUserRegisteredOrNot = async (uid) => {
  //   //   setIsRegLoading(true);
  //   //   try {
  //   //     const registeredUser = await serviceInstance.getUserByUID(uid);
  //   //     setIsRegistered(registeredUser !== undefined);
  //   //     registeredUser ? setAuthUser(registeredUser) : setAuthUser(user);

  //   //     if (!registeredUser) navigate("/details");
  //   //   } catch (err) {
  //   //     console.error(err);
  //   //   }
  //   // };
  //   //If side effect occurs on component mounting
  //   //onAuth....shone..database e kichu ache
  //   //admin=== user kore nebo
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (currentUser) handleUserRegisteredOrNot(currentUser.uid);
  //     });
  //     return () => {
  //       unsubscribe();
  //     };
  //   }, []);

  //    // On Init
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       setAuthUser(user);
  //     });

  //     return () => unsubscribe();
  //   });

  //   // When Auth is Done
  //   useEffect(() => {
  //     if (authUser !== undefined) {
  //       if (authUser !== null) handleUserRegisteredOrNot(authUser.uid);
  //       setIsAuthLoading(false);
  //     }
  //   }, [authUser]);

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
