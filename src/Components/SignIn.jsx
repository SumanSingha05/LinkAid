import React, { useState } from "react";
import { auth, googleProvider, db } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
//import { GoogleAuthProvider } from "firebase/auth/web-extension";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const userDoc = await getDoc(doc(db, "userDetails", result.user.uid));
        const ngoDoc = await getDoc(doc(db, "ngoDetails", result.user.uid));
        if (userDoc.exists()) {
          navigate("/issues");
        } else if (ngoDoc.exists()) {
          navigate("/solution");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleEmailSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="h-[100vh] w-[100vw] grid place-content-center text-purple-900 bg-gradient-to-r from-violet-500 via-purple-300 to-white">
      <div className="bg-[#ffffff68] p-20 py-20 px-16">
        <h1 className="text-center text-3xl font-semibold text-purple-900 mb-10">
          Sign In
        </h1>
        <div className="flex flex-col items-center">
          <div className="border-2 border-purple-900 mb-10 border-solid w-72 rounded-full">
            <input
              className="bg-transparent placeholder:text-purple-900 border-none outline-none py-3 pl-5 w-72"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="border-2 border-purple-900 border-solid w-72 mb-10 rounded-full ">
            <input
              className="border-none bg-transparent placeholder:text-purple-900 py-3 pl-5"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
        <div className="flex flex-col">
          <button
            //className="text-white block ml-24 border-2 border-none text-xl p-3 pl-14 pr-14 bg-gradient-to-r from-indigo-500 to-indigo-100 hover:bg-gradient-to-l from-slate-100 to-indigo-500 hover:text-white rounded-full mb-5 hover:bg-white hover:text-orange-400 "
            className=" mb-5
       relative py-2 rounded-md bg-violet-600 isolation-auto z-10 border-2 border-violet-1000 text-white
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-violet-900 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            type="submit"
            onClick={handleEmailSignIn}
          >
            Sign In With Email
          </button>
          <button
            //className="text-white block ml-24 border-2 border-none text-xl p-3 pl-14 pr-14 bg-gradient-to-r from-indigo-500 to-indigo-100 hover:bg-gradient-to-l from-slate-100 to-indigo-500 hover:text-white rounded-full mb-5 hover:bg-white hover:text-orange-400 "
            className=" 
       relative py-2 rounded-md bg-violet-600 isolation-auto z-10 border-2 border-violet-1000 text-white
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-violet-900 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            type="submit"
            onClick={handleGoogleSignIn}
          >
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

//   return (
/* <div className='flex flex-row'>
         <div className='m-auto'>
          <img className='size-[550px]' src={img3} alt="" />
         </div>
         <div className="h-[100vh] w-1/2 bg-gradient-to-l from-indigo-300 to-white flex justify-center align-middle font-mono">
     <div className='w-96 h-[500px] mt-32 border-2 border-solid border-[#6c63ff] rounded-2xl text-center'>
        <div className='flex flex-col justify-center items-center'>
         <h1 className='text-[#6c63ff] bg-gradient-to-r from-[#6e66ffa9] to-slate-700 text-transparent bg-clip-text text-center align-top text-4xl pl-2 pt-10 pb-2 mb-0 font-bold'>Sign In</h1>
        <div className='h-1 w-44 rounded-full mb-10 bg-[#6c63ff] '>
          </div> */
//
//
//           </div>
//           <form>
//             {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
//             <div className="inline-block w-72 pl-5 border-2 border-solid border-[#6c63ff] rounded-full mb-10 text-[#6c63ff]">
//               <input className="w-72 bg-transparent py-3 border-none outline-none placeholder-[#6c63ff]" type="email" placeholder="Email" onChange={(e) => checkFormValidity()} required />
//             </div>
//             <div className='bg-[#6c63ff] text-transparent bg-clip-text inline-block'>
//               <i class='bx bx-user'></i>
//             </div>
//             <br />
//             <div className='inline-block w-72 pl-5 border-2 border-[#6c63ff] rounded-full mb-10 text-[#6c63ff]'>
//               <input className='w-72 bg-transparent placeholder-[#6c63ff] border-none outline-none py-3 ' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//             </div>
//             <div className='bg-[#6c63ff] text-transparent bg-clip-text inline-block'>
//               <i class='bx bx-lock-alt'></i>
//             </div>
//             <br />
//             <button className='text-white border-2 border-[#6c63ff] text-xl p-3 pl-14 pr-14 bg-[#6c63ff] text-white rounded-full mb-5 hover:bg-white hover:text-[#6c63ff]' type="submit" onClick={SignIn} >Sign In</button>
//             <br />

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
