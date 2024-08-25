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
  //const [file, setFile] = useState(null);
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
          drainage: drainage,
          purification: purification,
          security: security,
          staff_management: staff_management,
          furniture: furniture,
          sanitation_facilities: sanitation_facilities,
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
            <option value="water management">Water Management</option>
            <option value="management issues">management issues</option>
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
          </label>
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
            staff management
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
