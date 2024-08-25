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
