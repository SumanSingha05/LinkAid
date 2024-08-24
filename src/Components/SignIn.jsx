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
          navigate("/solutions");
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
          navigate("/solutions");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {/* <div className='flex flex-row'>
         <div className='m-auto'>
          <img className='size-[550px]' src={img3} alt="" />
         </div>
         <div className="h-[100vh] w-1/2 bg-gradient-to-l from-indigo-300 to-white flex justify-center align-middle font-mono">
     <div className='w-96 h-[500px] mt-32 border-2 border-solid border-[#6c63ff] rounded-2xl text-center'>
        <div className='flex flex-col justify-center items-center'>
         <h1 className='text-[#6c63ff] bg-gradient-to-r from-[#6e66ffa9] to-slate-700 text-transparent bg-clip-text text-center align-top text-4xl pl-2 pt-10 pb-2 mb-0 font-bold'>Sign In</h1>
        <div className='h-1 w-44 rounded-full mb-10 bg-[#6c63ff] '>
          </div> */}
      <div className="bg-slate-500">
        <h1>Sign In</h1>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
          <button onClick={handleEmailSignIn}>Sign in with Email</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

//   return (
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
