// import React, { useState, useEffect } from "react";
// import { db } from "../config/firebase";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   doc,
//   getDoc,
// } from "firebase/firestore";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const Solution = () => {
//   const [issues, setIssues] = useState([]);
//   const auth = getAuth();

//   console.log()
//   useEffect(() => {
//     const fetchIssuesAndUserDetails = async () => {
//       // const user = auth.currentUser;
//       // console.log(user);

//       // if (!user) {
//       //   console.error("User not authenticated");
//       //   return;
//       // }

//       const unsubscribe=onAuthStateChanged(auth,currentUser=>{

//       })

//       if(!(auth.currentUser)) return;

//       console.log(auth.currentUser.uid)
//       // Fetch NGO's specialization
//       // const ngoDoc = await getDoc(doc(db, "ngoDetails", ngoDetails.uid));
//       const qm = query(collection(db,"ngoDetails"), where("uid", "==", auth.currentUser.uid));
//       const qs = await getDocs(qm);
//       if (!(qs.exists())) {
//         console.error("NGO details not found");
//         return;
//       }

//       const { specialization } = ngoDoc.data();

//       // Fetch issues that match the NGO's specialization
//       const q = query(
//         collection(db, "problems"),
//         where("type", "==", specialization)
//       );
//       const querySnapshot = await getDocs(q);

//       const issuesList = await Promise.all(
//         querySnapshot.docs.map(async (issueDoc) => {
//           const issueData = issueDoc.data();

//           // Fetch user details associated with this issue
//           const userDoc = await getDoc(doc(db, "userDetails", issueData.uid));
//           const userDetails = userDoc.exists() ? userDoc.data() : {};

//           return {
//             id: issueDoc.id,
//             ...issueData,
//             userDetails,
//           };
//         })
//       );

//       setIssues(issuesList);
//     };

//     fetchIssuesAndUserDetails();
//   }, [auth.currentUser]);

//   return (
//     <div>
//       <h1>Solutions Page</h1>
//       {issues.length > 0 ? (
//         issues.map((issue) => (
//           <div
//             key={issue.id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               marginBottom: "10px",
//             }}
//           >
//             <h3>Issue Type: {issue.issueType}</h3>
//             <p>
//               <strong>Description:</strong> {issue.description}
//             </p>
//             <p>
//               <strong>User Name:</strong> {issue.userDetails.name}
//             </p>
//             <p>
//               <strong>Address:</strong> {issue.userDetails.address}
//             </p>
//             <p>
//               <strong>Phone Number:</strong> {issue.userDetails.phone}
//             </p>
//             <p>
//               <strong>District:</strong> {issue.userDetails.district}
//             </p>
//             <p>
//               <strong>Submitted At:</strong>{" "}
//               {issue.timestamp.toDate().toLocaleString()}
//             </p>
//             <p>
//               <strong>Status:</strong>
//               {issue.resolved ? (
//                 <span style={{ color: "green", marginLeft: "10px" }}>
//                   ✔️ Resolved
//                 </span>
//               ) : (
//                 <span style={{ color: "red", marginLeft: "10px" }}>
//                   ❌ Unresolved
//                 </span>
//               )}
//             </p>
//           </div>
//         ))
//       ) : (
//         <p>No issues found that match your specialization.</p>
//       )}
//     </div>
//   );
// };

// export default Solution;
import React, { useState, useEffect } from "react";
import { db, auth } from "../config/firebase"; // Import Firestore and Firebase Auth
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
  const [userId, setUserId] = useState(null);
  const [specialization, setSpecialization] = useState(null);
  const [userDetails, setUserDetails] = useState({}); // store user details based on uid

  useEffect(() => {
    const fetchUserIdAndData = async () => {
      setLoading(true);

      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          // User is signed in, set the userId (uid)
          setUserId(user.uid);

          try {
            // Fetch NGO's specialization
            const ngoDocRef = doc(db, "ngoDetails", user.uid);
            const ngoDocSnap = await getDoc(ngoDocRef);

            if (ngoDocSnap.exists()) {
              const ngoData = ngoDocSnap.data();
              setSpecialization(ngoData.specialization);

              // Fetch problems that match the NGO's specialization
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
              // Fetch user details for each problem.uid
              const userDetailsMap = {};
              for (const problem of problemsList) {
                const userDocRef = doc(db, "userDetails", problem.uid);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                  userDetailsMap[problem.uid] = userDocSnap.data();
                }
              }
              setUserDetails(userDetailsMap);
              //
            } else {
              console.log("No such document in ngoDetails!");
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

    fetchUserIdAndData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" h-[100vh] bg-gradient-to-tr from-violet-400 via-purple-300 to-white">
      <h1 className="font-bold font-serif text-2xl">Solutions</h1>
      {specialization && (
        <p className="font-bold text-xl">
          Your Specialization: {specialization}
        </p>
      )}
      <h1>Problems Matching Your Specialization</h1>

      {problems.length > 0 ? (
        -(
          <ul>
            {problems.map((problem) => (
              <li key={problem.id}>
                <strong>Type:</strong> {problem.type} -{" "}
                <strong>Details:</strong>{" "}
                {/* {JSON.stringify(problem.details)} */}
                {userDetails[problem.uid] ? (
                  <div>
                    <p>Name: {userDetails[problem.uid].name}</p>
                    <p>District: {userDetails[problem.uid].district}</p>
                    <p>Phone: {userDetails[problem.uid].phone}</p>
                    <p>address: {userDetails[problem.uid].address}</p>

                    {/* //pic render */}
                    {problem.file_url && (
                      <div>
                        <p>
                          <a
                            href={problem.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Uploaded Document
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p></p>
                )}
              </li>
            ))}
          </ul>
        )
      ) : (
        <p>No problems matching your specialization were found.</p>
      )}
    </div>
  );
};

export default Solution;
