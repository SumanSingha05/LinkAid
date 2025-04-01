import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userDoc = await getDoc(doc(db, "userDetails", result.user.uid));
      const ngoDoc = await getDoc(doc(db, "ngoDetails", result.user.uid));
      if (userDoc.exists()) {
        navigate("/issues");
      } else if (ngoDoc.exists()) {
        navigate("/solution");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEmailAuth = async () => {
    setError("");
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign Up Successful!");
        navigate("/details");
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const userDoc = await getDoc(
          doc(db, "userDetails", userCredential.user.uid)
        );
        const ngoDoc = await getDoc(
          doc(db, "ngoDetails", userCredential.user.uid)
        );
        if (userDoc.exists()) {
          navigate("/issues");
        } else if (ngoDoc.exists()) {
          navigate("/solution");
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 via-purple-300 to-white">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-2xl font-bold text-violet-900 mb-5">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border-2 border-violet-900 rounded-full px-4 py-2 mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border-2 border-violet-900 rounded-full px-4 py-2 mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        {isSignUp && (
          <select
            className="w-full border-2 border-violet-900 rounded-full px-4 py-2 mb-3"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="ngo">NGO</option>
          </select>
        )}

        <button
          className="w-full bg-violet-600 text-white py-2 rounded-full mb-3 hover:bg-violet-700"
          onClick={handleEmailAuth}
        >
          {isSignUp ? "Sign Up" : "Sign In"} with Email
        </button>

        <button
          className="w-full bg-black text-white py-2 rounded-full hover:bg-red-600"
          onClick={handleGoogleSignIn}
        >
          Sign In with Google
        </button>

        <p className="mt-4 text-violet-900">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span
            className="font-bold cursor-pointer"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
