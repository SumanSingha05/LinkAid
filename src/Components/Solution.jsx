import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const Solution = () => {
  const [issues, setIssues] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    const fetchIssuesAndUserDetails = async () => {
      const user = auth.currentUser;

      if (!user) {
        console.error("User not authenticated");
        return;
      }

      // Fetch NGO's specialization
      const ngoDoc = await getDoc(doc(db, 'users', userDetails.uid));
      if (!ngoDoc.exists()) {
        console.error("NGO details not found");
        return;
      }

      const { specialization } = ngoDoc.data();

      // Fetch issues that match the NGO's specialization
      const q = query(collection(db, 'issues'), where('issueType', '==', specialization));
      const querySnapshot = await getDocs(q);

      const issuesList = await Promise.all(
        querySnapshot.docs.map(async (issueDoc) => {
          const issueData = issueDoc.data();

          // Fetch user details associated with this issue
          const userDoc = await getDoc(doc(db, 'users', issueData.uid));
          const userDetails = userDoc.exists() ? userDoc.data() : {};

          return {
            id: issueDoc.id,
            ...issueData,
            userDetails,
          };
        })
      );

      setIssues(issuesList);
    };

    fetchIssuesAndUserDetails();
  }, [auth]);

  return (
    <div>
      <h1>Solutions Page</h1>
      {issues.length > 0 ? (
        issues.map((issue) => (
          <div key={issue.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h3>Issue Type: {issue.issueType}</h3>
            <p><strong>Description:</strong> {issue.description}</p>
            <p><strong>User Name:</strong> {issue.userDetails.name}</p>
            <p><strong>Address:</strong> {issue.userDetails.address}</p>
            <p><strong>Phone Number:</strong> {issue.userDetails.phone}</p>
            <p><strong>District:</strong> {issue.userDetails.district}</p>
            <p><strong>Submitted At:</strong> {issue.timestamp.toDate().toLocaleString()}</p>
            <p>
              <strong>Status:</strong> 
              {issue.resolved ? 
                <span style={{ color: 'green', marginLeft: '10px' }}>✔️ Resolved</span> : 
                <span style={{ color: 'red', marginLeft: '10px' }}>❌ Unresolved</span>}
            </p>
          </div>
        ))
      ) : (
        <p>No issues found that match your specialization.</p>
      )}
    </div>
  );
};

export default Solution;
