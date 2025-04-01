// import React, { useState, useEffect } from "react";
// import AuthContextProvider from "./Context/Auth";
// import { initializeApp } from "firebase/app";
// import { db } from "../config/firebase";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   Timestamp,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../config/firebase";
// import FileUpload from "./FileUpload";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// const Issues = () => {
//   const [uid, setUid] = useState("");
//   const [type, setType] = useState("education");
//   const [file, setFile] = useState(null);
//   const [stationary, setStationary] = useState(false);
//   const [teaching_materials, setTeaching_materials] = useState(false);
//   const [furniture, setFurniture] = useState(false);
//   const [sanitation_facilities, setSanitation_facilities] = useState(false);
//   const [drainage, setDrainage] = useState(false);
//   const [purification, setPurification] = useState(false);
//   const [security, setSecurity] = useState(false);
//   const [staff_management, setStaff_management] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) setUid(user.uid);
//       else setUid(null);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!uid) {
//       setMessage("User not authenticated.");
//       return;
//     }

//     try {
//       const docRef = await addDoc(collection(db, "problems"), {
//         uid: uid,
//         created_at: Timestamp.now(),
//         type: type,
//         //file_url: fileUrl,
//         details: {
//           stationary: stationary,
//           teaching_materials: teaching_materials,

//           drainage: drainage,
//           purification: purification,

//           furniture: furniture,
//           sanitation_facilities: sanitation_facilities,

//           security: security,
//           staff_management: staff_management,
//         },
//       });
//       //setMessage(Problem report added with ID: ${docRef.id});
//     } catch (e) {
//       console.error("Error adding problem report: ", e);
//       setMessage("Failed to submit the report.");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r font-serif from-violet-500 via-purple-300 to-white h-full sm:h-[100vh] w-[100vw] flex flex-col">
//       <h1 className="font-serif text-center text-5xl font-semibold text-violet-900 mt-5 mb-5 ">
//         Report Issues
//       </h1>

//       <form onSubmit={handleSubmit}>
//         <div className="border-2 mt-5 border-black border-none flex items-center justify-center">
//           <label className="text-violet-900 text-xl font-semibold mt-5 mb-5">
//             Issue Type:
//           </label>
//           <div className="border-2 rounded-full border-solid w-52 border-violet-900">
//             <select
//               className="bg-transparent border-none outline-none w-52 py-2 pl-2"
//               value={type}
//               onChange={(e) => setType(e.target.value)}
//             >
//               <option className="text-white bg-violet-900" value="Select">
//                 Select Field
//               </option>
//               <option className="text-white bg-violet-800" value="education">
//                 Education
//               </option>
//               <option className="text-white bg-violet-700" value="water">
//                 Water
//               </option>
//               <option className="text-white bg-violet-600" value="management">
//                 Management
//               </option>
//               <option
//                 className="text-white bg-violet-500"
//                 value="infrastructure"
//               >
//                 Infrastructure
//               </option>
//               {/* Add more types as needed   */}
//             </select>
//           </div>
//         </div>
//         <div className="flex flex-col sm:flex-row mt-10 ">
//           <div className="w-[80vw] sm:w-1/5 sm:mb-0 mb-5 mr-10 ml-10 h-[50vh] border-0 bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)] border-black border-solid rounded-lg flex flex-col justify-evenly">
//             <h1 className="text-center bg-gradient-to-r from-white to-[#daa520] text-2xl font-serif text-transparent bg-clip-text font-semibold ">
//               Education
//             </h1>
//             <label className="text-white">
//               <h1></h1>
//               <input
//                 className="text-white ml-10"
//                 type="checkbox"
//                 checked={stationary}
//                 onChange={(e) => setStationary(e.target.checked)}
//               />
//               Stationary
//             </label>
//             <label className="text-white">
//               <input
//                 className="ml-10"
//                 type="checkbox"
//                 checked={teaching_materials}
//                 onChange={(e) => setTeaching_materials(e.target.checked)}
//               />
//               Teaching Materials Requirement
//             </label>{" "}
//             <br />
//             <FileUpload />
//           </div>

//           <div className="sm:mb-0 mb-5 w-[80vw] sm:w-1/5 mr-10 ml-10 h-[50vh] border-0 bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)] border-black border-solid rounded-lg flex flex-col justify-evenly">
//             <h1 className="text-center bg-gradient-to-r from-white to-[#daa520] text-2xl font-serif text-transparent bg-clip-text font-semibold ">
//               Water Management
//             </h1>
//             <label className="text-white">
//               <input
//                 className="text-white ml-10"
//                 type="checkbox"
//                 checked={drainage}
//                 onChange={(e) => setDrainage(e.target.checked)}
//               />
//               Drainage
//             </label>

//             <label className="text-white">
//               <input
//                 className="text-white ml-10"
//                 type="checkbox"
//                 checked={purification}
//                 onChange={(e) => setPurification(e.target.checked)}
//               />
//               Purification
//             </label>
//             <br />
//             <FileUpload />
//           </div>

//           <div className="sm:mb-0 mb-5 w-[80vw] sm:w-1/5 mr-10 ml-10 h-[50vh] border-0 bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)] border-black border-solid rounded-lg flex flex-col justify-evenly">
//             <h1 className="text-center bg-gradient-to-r from-white to-[#daa520] text-2xl font-serif text-transparent bg-clip-text font-semibold ">
//               Management Issues
//             </h1>
//             <label className="text-white">
//               <input
//                 className="text-white ml-10"
//                 type="checkbox"
//                 checked={security}
//                 onChange={(e) => setSecurity(e.target.checked)}
//               />
//               Security
//             </label>
//             <label className="text-white">
//               <input
//                 className="text-white ml-10"
//                 type="checkbox"
//                 checked={staff_management}
//                 onChange={(e) => setStaff_management(e.target.checked)}
//               />
//               Staff Management
//             </label>
//             <br />
//             <FileUpload />
//           </div>

//           <div className="sm:mb-0 mb-5 w-[80vw] sm:w-1/5 mr-10 ml-10 h-[50vh] border-0 bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)] border-black border-solid rounded-lg flex flex-col justify-evenly">
//             <h1 className="text-center bg-gradient-to-r from-white to-[#daa520] text-2xl font-serif text-transparent bg-clip-text font-semibold ">
//               Infrastructure
//             </h1>
//             <label className="text-white">
//               <input
//                 className="text-white ml-10"
//                 type="checkbox"
//                 checked={furniture}
//                 onChange={(e) => setFurniture(e.target.checked)}
//               />
//               Furniture Requirement
//             </label>
//             <label className="text-white">
//               <input
//                 className="text-white ml-10"
//                 type="checkbox"
//                 checked={sanitation_facilities}
//                 onChange={(e) => setSanitation_facilities(e.target.checked)}
//               />
//               Sanitation facilities
//             </label>
//             <br />
//             <FileUpload />
//           </div>
//         </div>
//         <div>
//           <button
//             className="
//        relative py-2 rounded-md bg-violet-600 isolation-auto z-10 border-2 border-violet-1000 text-white mb-5 ml-[36vw] sm:ml-[48vw] mt-10 py-3 px-5
//         before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-violet-900 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Issues;

import React, { useState, useEffect } from "react";
import { db, auth } from "../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import FileUpload from "./FileUpload";

const Issues = () => {
  const [uid, setUid] = useState(null);
  const [type, setType] = useState("");
  const [fileUrl, setFileUrl] = useState(null);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [filePopup, setFilePopup] = useState(false);
  const [issues, setIssues] = useState({});
  const [description, setDescription] = useState("");

  const categories = {
    education: "Education",
    water: "Water Management",
    management: "Management Issues",
    infrastructure: "Infrastructure",
  };

  const categoryIssues = {
    education: ["stationary", "teaching_materials"],
    water: ["drainage", "purification"],
    management: ["security", "staff_management"],
    infrastructure: ["furniture", "sanitation_facilities"],
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        console.log("User authenticated:", user.uid);
      } else {
        console.log("User not authenticated.");
        setUid(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleCheckboxChange = (e) => {
    setIssues({ ...issues, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!uid) {
      setMessage("User not authenticated.");
      return;
    }
    if (!type || !description || Object.values(issues).every((v) => !v)) {
      setMessage("Please fill in all required fields.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "problems"), {
        uid: uid,
        created_at: Timestamp.now(),
        type: type,
        file_url: fileUrl,
        details: issues,
        description: description,
      });

      console.log("Issue submitted successfully! ID:", docRef.id);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);

      // Reset form after submission
      setType("");
      setFileUrl(null);
      setIssues({});
      setDescription("");
      setMessage("");
    } catch (e) {
      console.error("Error adding problem report:", e);
      setMessage("Failed to submit the report.");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r font-serif from-violet-500 via-purple-300 to-white h-full w-full flex flex-col items-center">
      <h1 className="text-center text-5xl font-semibold text-violet-900 mt-5 mb-5">
        Report Issues
      </h1>

      <div className="w-full flex justify-center mb-5">
        <select
          className="bg-white border border-violet-900 rounded-full px-4 py-2 text-violet-900"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select Field</option>
          {Object.entries(categories).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {type && (
        <div className="w-[80vw] sm:w-1/3 border bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)] border-black rounded-lg flex flex-col items-center p-5">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-white to-[#daa520] text-transparent bg-clip-text">
            {categories[type]}
          </h1>

          <div className="text-white w-full px-5">
            <label className="block text-lg">Describe the issue:</label>
            <textarea
              className="w-full p-2 border rounded-md text-black"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-3 text-white w-full px-5">
            <label className="block text-lg">Select applicable issues:</label>
            {categoryIssues[type]?.map((key) => (
              <label key={key} className="block">
                <input
                  type="checkbox"
                  name={key}
                  checked={issues[key] || false}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {key.replace(/_/g, " ")}
              </label>
            ))}
          </div>

          <FileUpload setFileUrl={setFileUrl} setFilePopup={setFilePopup} />
          {fileUrl && (
            <img
              src={fileUrl}
              alt="Uploaded"
              className="w-32 h-32 object-cover mt-3"
            />
          )}
        </div>
      )}

      <button
        className="mt-5 py-3 px-6 bg-violet-600 text-white rounded-md hover:bg-violet-900"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {message && (
        <div className="text-red-600 mt-3 font-semibold">{message}</div>
      )}

      {showPopup && (
        <div className="fixed top-20 right-10 bg-black text-white py-2 px-4 rounded-md shadow-md">
          Submitted Successfully!
        </div>
      )}
      {filePopup && (
        <div className="fixed top-20 right-10 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md">
          File Uploaded Successfully!
        </div>
      )}
    </div>
  );
};

export default Issues;
