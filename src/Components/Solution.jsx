// import React, { useState, useEffect } from "react";
// import { db, auth } from "../config/firebase"; // Import Firestore and Firebase Auth
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   doc,
//   getDoc,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";

// const Solution = () => {
//   const [problems, setProblems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [userId, setUserId] = useState(null);
//   const [specialization, setSpecialization] = useState(null);
//   const [userDetails, setUserDetails] = useState({}); // store user details based on uid

//   useEffect(() => {
//     const fetchUserIdAndData = async () => {
//       setLoading(true);

//       const unsubscribe = onAuthStateChanged(auth, async (user) => {
//         if (user) {
//           // User is signed in, set the userId (uid)
//           setUserId(user.uid);

//           try {
//             // Fetch NGO's specialization
//             const ngoDocRef = doc(db, "ngoDetails", user.uid);
//             const ngoDocSnap = await getDoc(ngoDocRef);

//             if (ngoDocSnap.exists()) {
//               const ngoData = ngoDocSnap.data();
//               setSpecialization(ngoData.specialization);

//               // Fetch problems that match the NGO's specialization
//               const problemsRef = collection(db, "problems");
//               const q = query(
//                 problemsRef,
//                 where("type", "==", ngoData.specialization)
//               );
//               const querySnapshot = await getDocs(q);

//               const problemsList = querySnapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data(),
//               }));

//               setProblems(problemsList);
//               // Fetch user details for each problem.uid
//               const userDetailsMap = {};
//               for (const problem of problemsList) {
//                 const userDocRef = doc(db, "userDetails", problem.uid);
//                 const userDocSnap = await getDoc(userDocRef);
//                 if (userDocSnap.exists()) {
//                   userDetailsMap[problem.uid] = userDocSnap.data();
//                 }
//               }
//               setUserDetails(userDetailsMap);
//               //
//             } else {
//               console.log("No such document in ngoDetails!");
//             }
//           } catch (error) {
//             console.error("Error fetching data: ", error);
//           } finally {
//             setLoading(false);
//           }
//         } else {
//           console.log("No user is signed in.");
//           setLoading(false);
//         }
//       });

//       return () => unsubscribe();
//     };

//     fetchUserIdAndData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className=" h-[100vh] flex flex-col items-center bg-gradient-to-tr from-violet-400 via-purple-300 to-white">
//       <h1 className="font-bold mt-10 font-serif text-4xl text-violet-900 text-center">
//         Solutions
//       </h1>
//       <div className="border-none sm:py-10 sm:px-10 rounded-lg h-auto bg-[#ffffff85] mt-36 border-black sm:w-[20vw] h-auto w-auto ">
//         {specialization && (
//           <p className="font-bold text-xl">
//             Your Specialization: {specialization}
//           </p>
//         )}
//         <h1>Problems Matching Your Specialization</h1>

//         {problems.length > 0 ? (
//           <ul>
//             {problems.map((problem) => (
//               <li key={problem.id}>
//                 <strong>Type:</strong> {problem.type} -{" "}
//                 <strong>Details:</strong>{" "}
//                 {/* {JSON.stringify(problem.details)} */}
//                 {userDetails[problem.uid] ? (
//                   <div>
//                     <p>Name: {userDetails[problem.uid].name}</p>
//                     <p>District: {userDetails[problem.uid].district}</p>
//                     <p>Phone: {userDetails[problem.uid].phone}</p>
//                     <p>address: {userDetails[problem.uid].address}</p>

//                     {/* //pic render */}
//                     {problem.file_url && (
//                       <div>
//                         <p>
//                           <a
//                             href={problem.file_url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             View Uploaded Document
//                           </a>
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <p></p>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No problems matching your specialization were found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Solution;

import React, { useState, useEffect } from "react";
import { db, auth } from "../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Solution = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [specialization, setSpecialization] = useState(null);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchNGOData = async () => {
      setLoading(true);

      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            const ngoDocRef = doc(db, "ngoDetails", user.uid);
            const ngoDocSnap = await getDoc(ngoDocRef);

            if (ngoDocSnap.exists()) {
              const ngoData = ngoDocSnap.data();
              setSpecialization(ngoData.specialization);

              const problemsRef = collection(db, "problems");
              const q = query(
                problemsRef,
                where("type", "==", ngoData.specialization)
              );
              const querySnapshot = await getDocs(q);

              const problemsList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setProblems(problemsList);

              const userDetailsMap = {};
              for (const problem of problemsList) {
                const userDocRef = doc(db, "userDetails", problem.uid);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                  userDetailsMap[problem.uid] = userDocSnap.data();
                }
              }
              setUserDetails(userDetailsMap);
            }
          } catch (error) {
            console.error("Error fetching data: ", error);
          } finally {
            setLoading(false);
          }
        } else {
          console.log("No user is signed in.");
          setLoading(false);
        }
      });

      return () => unsubscribe();
    };

    fetchNGOData();
  }, []);

  if (loading)
    return <div className="text-center mt-20 text-lg">Loading...</div>;

  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-tr from-violet-400 via-purple-300 to-white p-6">
      <h1 className="font-bold mt-10 font-serif text-4xl text-violet-900 text-center">
        NGO: Problems List
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md mt-10 w-full max-w-4xl">
        {specialization && (
          <h2 className="font-bold text-2xl text-center text-gray-700">
            Specialization: {specialization}
          </h2>
        )}

        <h3 className="mt-6 text-xl font-semibold text-gray-800">
          Issues Matching Your Specialization :
        </h3>

        {problems.length > 0 ? (
          <ul className="mt-4 space-y-6">
            {problems.map((problem) => (
              <li key={problem.id} className="border-b pb-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Category: {problem.type}
                </h4>
                <p className="text-gray-700">
                  <strong>Details:</strong>{" "}
                  {problem.details || "No details provided"}
                </p>
                {userDetails[problem.uid] && (
                  <div className="mt-3">
                    <h5 className="font-semibold text-gray-800">
                      Reported by:
                    </h5>
                    <p>
                      <strong>Name:</strong> {userDetails[problem.uid].name}
                    </p>
                    <p>
                      <strong>District:</strong>{" "}
                      {userDetails[problem.uid].district}
                    </p>
                    <p>
                      <strong>Phone:</strong> {userDetails[problem.uid].phone}
                    </p>
                    <p>
                      <strong>Address:</strong>{" "}
                      {userDetails[problem.uid].address}
                    </p>
                  </div>
                )}

                {problem.file_url && (
                  <p className="mt-2">
                    <a
                      href={problem.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Uploaded Document
                    </a>
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 mt-6">
            No issues found for your specialization.
          </p>
        )}
      </div>
    </div>
  );
};

export default Solution;
