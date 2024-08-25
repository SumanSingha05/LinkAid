import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
const SignUp = () => {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/details");
    } catch (err) {
      console.error(err);
    }
  };

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/details");
    } catch (err) {
      console.error(err);
    }
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  return (
    <div className="flex flex-row bg-gradient-to-r from-violet-500 via-purple-300 to-white flex-wrap">
      <div className="h-[100vh] w-[100vw] grid place-content-center font-mono">
        <div className="border-none border-violet-900 w-96 h-[80vh] pt-[15px] text-violet-900 rounded-lg bg-[#ffffff49]">
          <h1 className="text-4xl text-center p-5 font-bold mb-10">Sign Up</h1>
          <div className="inline-block w-72 pl-5 border-2 border-solid border-violet-900 rounded-full mb-10 text-violet-700 ml-12">
            <input
              className="w-72 inline-block border-none outline-none placeholder-violet-900 bg-transparent py-3 text-black"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="bg-violet-900 text-transparent bg-clip-text inline-block">
            <i class="bx bx-user"></i>
          </div>
          <div className="inline-block w-72 pl-5 border-2 border-solid border-violet-900 rounded-full mb-10 ml-12">
            <input
              className="inline-block border-none outline-none bg-transparent placeholder-violet-900  text-black py-3"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="bg-violet-900 text-transparent bg-clip-text inline-block">
            <i class="bx bx-lock-alt"></i>
          </div>
          <select
            className="block w-72 pl-5 border-2 border-solid border-violet-900 rounded-full mb-10 ml-12 py-3 bg-transparent"
            onChange={handleRoleChange}
            value={role}
          >
            <option className="text-white bg-violet-900" value="">
              Select Role
            </option>
            <option className="text-white bg-violet-800" value="user">
              User
            </option>
            <option className="text-white bg-violet-800" value="ngo">
              NGO
            </option>
          </select>
          <div className=" space-y-4">
            <button
              //className="text-white block ml-24 border-2 border-none text-xl p-3 pl-14 pr-14 bg-gradient-to-r from-indigo-500 to-indigo-100 hover:bg-gradient-to-l from-slate-100 to-indigo-500 hover:text-white rounded-full mb-5 hover:bg-white hover:text-orange-400 "
              className=" 
       relative px-8 py-2 rounded-md bg-violet-600 sm:ml-[8vw] isolation-auto z-10 sm:pl-10 sm:pr-10  ml-[25vw] border-2 border-violet-1000 text-white p-3
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-violet-900 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
              type="submit"
              onClick={signup}
            >
              Sign Up
            </button>
            <button
              //className="text-white block ml-24 border-2 border-none text-xl p-3 pl-14 pr-14 bg-gradient-to-r from-indigo-500 to-indigo-100 hover:bg-gradient-to-l from-slate-100 to-indigo-500 hover:text-white rounded-full mb-5 hover:bg-white hover:text-orange-400 "
              className=" 
       relative px-8 py-2 rounded-md bg-violet-600 ml-[5vw] isolation-auto z-10 pl-10 pr-10 border-2 border-violet-1000 text-white p-3
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-violet-900 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
              type="submit"
              onClick={signInWithGoogle}
            >
              Sign Up With Google
            </button>
          </div>
        </div>
      </div>
      {/* <div className="w-1/2 m-auto p-10 ">
          <img className="" src={img4} alt="" />
        </div> */}
    </div>
  );
};

export default SignUp;
