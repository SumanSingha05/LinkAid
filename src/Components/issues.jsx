//   return (
//     <div className="flex flex-col flex-wrap justify-center items-center m-auto h-[100vh] bg-gradient-to-r from-violet-500 via-purple-300 to-white">
//       <div>
//         <h1 className="font-serif text-5xl font-semibold bg-gradient-to-l from-[#7e5f0f] to-[#12043c] text-transparent mt-5 mb-5 bg-clip-text ">
//           Report Issues
//         </h1>
//       </div>
//       <div className="w-full m-auto mt-28 flex flex-row flex-wrap justify-evenly ">
//         <div className="border-none h-[300px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-[rgba(75,30,133,1)] rounded-2xl w-1/5 flex flex-col justify-center items-center justify-evenly bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)]">
//           <h1 className="mb-5 mt-5 bg-gradient-to-r from-[white] to-[#daa520] text-transparent bg-clip-text font-semibold text-2xl">
//             Water Management{" "}
//           </h1>

//           <label>
//             <input
//               type="checkbox"
//               name="drainage"
//               checked={issues.drainage}
//               onChange={handleCheckboxChange}
//             />
//             <p className="inline font-semibold text-xl p-2 bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
//               Drainage Problem
//             </p>
//           </label>
//           <br />

//           <label>
//             <input
//               type="checkbox"
//               name="purification"
//               checked={issues.purification}
//               onChange={handleCheckboxChange}
//             />
//             <p className="inline text-xl p-2 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
//               Water Purification
//             </p>
//           </label>
//           <br />
//           <FileUpload />
//         </div>
//         <div className="border-none h-[300px] shadow-lg shadow-[rgba(75,30,133,1)] rounded-2xl w-1/5 flex flex-col justify-center items-center justify-evenly bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)]">
//           <h1 className="font-semibold bg-gradient-to-r from-[white] to-[#daa520] text-transparent bg-clip-text text-2xl mb-5 mt-5">
//             Education Issues
//           </h1>
//           <label>
//             <input
//               type="checkbox"
//               name="stationary"
//               checked={issues.stationary}
//               onChange={handleCheckboxChange}
//             />
//             <p className="inline text-lg p-2 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
//               Stationary Requirement
//             </p>
//           </label>
//           <br />

//           <label>
//             <input
//               type="checkbox"
//               name="teaching_materials"
//               checked={issues.teaching_materials}
//               onChange={handleCheckboxChange}
//             />
//             <p className="inline text-lg p-2 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
//               Scarcity Of Teaching Materials
//             </p>
//           </label>
//           <br />
//           <FileUpload />
//         </div>
//         <div className="border-2 h-[300px] shadow-lg shadow-[rgba(75,30,133,1)] border-none rounded-2xl w-1/5 flex flex-col justify-evenly items-center bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)]">
//           <h1 className="bg-gradient-to-r from-[white] to-[#daa520] text-transparent bg-clip-text font-semibold text-2xl mb-5 mt-5">
//             Infrastructure
//           </h1>
//           <label>
//             <input
//               type="checkbox"
//               name="furniture"
//               checked={issues.furniture}
//               onChange={handleCheckboxChange}
//             />
//             <p className="inline font-semibold text-lg p-2 bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
//               Furniture Requirement
//             </p>
//           </label>
//           <br />

//           <label>
//             <input
//               type="checkbox"
//               name="sanitation facilities"
//               checked={issues.sanitation_facilities}
//               onChange={handleCheckboxChange}
//             />
//             <p className="inline text-lg p-2 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
//               Furniture Requirement
//             </p>
//           </label>
//           <br />
//           <FileUpload />
//         </div>
//         <div className="border-2 h-[300px] shadow-lg shadow-[rgba(75,30,133,1)] border-none rounded-2xl w-1/5 flex flex-col justify-center justify-evenly items-center bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)]">
//           <h1 className="bg-gradient-to-r from-[white] to-[#daa520] text-transparent bg-clip-text font-semibold text-2xl mb-5 mt-5">
//             Management issues
//           </h1>
//           <label>
//             <input
//               type="checkbox"
//               name="security"
//               checked={issues.security}
//               onChange={handleCheckboxChange}
//             />
//             <p className="inline text-lg p-2 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
//               Security
//             </p>
//           </label>
//           <br />

//           <label>
//             <input
//               type="checkbox"
//               name="staff management"
//               checked={issues.staff_management}
//               onChange={handleCheckboxChange}
//             />
//             <p className="inline text-lg p-2 mb-5 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
//               Managing the staffs
//             </p>
//           </label>
//           <br />
//           <FileUpload />
//         </div>
//       </div>
//       {/* <div className='bg-gradient-to-r from-white to-[#d4b053] text-transparent bg-clip-text'> */}
//       <button
//         class="relative flex items-center px-6 mb-14 py-5 px-10 overflow-hidden font-medium transition-all bg-[#381e84c8] rounded-md group"
//         onClick={handleSubmit}
//       >
//         <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#381e84] rounded group-hover:-mr-4 group-hover:-mt-4">
//           <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
//         </span>
//         <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#381e84]rounded group-hover:-ml-4 group-hover:-mb-4">
//           <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
//         </span>
//         <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
//         <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
//           Submit Issues
//         </span>
//       </button>
//     </div>
//     // </div>
//   ); //return statement closed
// };

// export default Issues;

import React, { useState, useEffect } from "react";
import AuthContextProvider from "./Context/Auth";
import { initializeApp } from "firebase/app";
import { db } from "../config/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import FileUpload from "./FileUpload";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const Issues = () => {
  const [uid, setUid] = useState("");
  const [type, setType] = useState("education");
  const [file, setFile] = useState(null);
  const [stationary, setStationary] = useState(false);
  const [teaching_materials, setTeaching_materials] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [sanitation_facilities, setSanitation_facilities] = useState(false);
  const [drainage, setDrainage] = useState(false);
  const [purification, setPurification] = useState(false);
  const [security, setSecurity] = useState(false);
  const [staff_management, setStaff_management] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUid(user.uid);
      else setUid(null);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!uid) {
      setMessage("User not authenticated.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "problems"), {
        uid: uid,
        created_at: Timestamp.now(),
        type: type,
        //file_url: fileUrl,
        details: {
          stationary: stationary,
          teaching_materials: teaching_materials,
        },
        details: {
          drainage: drainage,
          purification: purification,
        },
        details: {
          furniture: furniture,
          sanitation_facilities: sanitation_facilities,
        },
        details: {
          security: security,
          staff_management: staff_management,
        },
      });
      setMessage(`Problem report added with ID: ${docRef.id}`);
    } catch (e) {
      console.error("Error adding problem report: ", e);
      setMessage("Failed to submit the report.");
    }
  };

  return (
    <div>
      <h1>Report Issues</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Issue Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="education">Education</option>
            <option value="water">Water</option>
            <option value="management">management</option>
            <option value="infrastructure">infrastructure</option>
            {/* Add more types as needed */}
          </select>
        </div>

        <div>
          <h1>Education</h1>
          <label>
            <h1></h1>
            <input
              type="checkbox"
              checked={stationary}
              onChange={(e) => setStationary(e.target.checked)}
            />
            Stationary
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={teaching_materials}
              onChange={(e) => setTeaching_materials(e.target.checked)}
            />
            Teaching Materials Requirement
          </label>{" "}
          <br />
          <FileUpload />
        </div>

        <div>
          <h1>Water Management</h1>
          <label>
            <input
              type="checkbox"
              checked={drainage}
              onChange={(e) => setDrainage(e.target.checked)}
            />
            Drainage
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={purification}
              onChange={(e) => setPurification(e.target.checked)}
            />
            Purification
          </label>
          <br />
          <FileUpload />
        </div>

        <div>
          <h1>Management Issues</h1>
          <label>
            <input
              type="checkbox"
              checked={security}
              onChange={(e) => setSecurity(e.target.checked)}
            />
            Security
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={staff_management}
              onChange={(e) => setStaff_management(e.target.checked)}
            />
            Purification
          </label>
          <br />
          <FileUpload />
        </div>

        <div>
          <h1>Infrastructure</h1>
          <label>
            <input
              type="checkbox"
              checked={furniture}
              onChange={(e) => setFurniture(e.target.checked)}
            />
            Furniture Requirement
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={sanitation_facilities}
              onChange={(e) => setSanitation_facilities(e.target.checked)}
            />
            sanitation facilities
          </label>
          <br />
          <FileUpload />
        </div>

        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Issues;
