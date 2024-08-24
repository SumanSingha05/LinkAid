import React from "react";
import { db } from "../config/firebase";
import FileUpload from "../Components/FileUpload"
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
const Issues = () => {
  const [issues, setIssues] = useState({
    drainage: false,
    purification: false,
    stationary: false,
    teaching_materials: false,
    furniture: false,
    sanitation_facilities: false,
    security: false,
    staff_management: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setIssues((prevIssues) => ({
      ...prevIssues,
      [name]: checked,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Update Firestore with the issues
      await setDoc(
        doc(db, "problems", "water"),
        {
          drainage: issues.drainage,
          purification: issues.purification,
        },
        { merge: true }
      );

      await setDoc(
        doc(db, "problems", "education"),
        {
          stationary: issues.stationary,
          teaching_materials: issues.teaching_materials,
        },
        { merge: true }
      );

      await setDoc(
        doc(db, "problems", "infrastructure"),
        {
          furniture: issues.furniture,
        },
        { merge: true }
      );

      await setDoc(
        doc(db, "problems", "management"),
        {
          security: issues.security,
          staff_management: issues.staff_management,
        },
        { merge: true }
      );

      console.log("Issues successfully recorded!");
    } catch (error) {
      console.error("Error recording issues: ", error);
    }
  };

  return (
    <div className="flex flex-col flex-wrap justify-center items-center m-auto h-[100vh] bg-gradient-to-r from-violet-500 via-purple-300 to-white">
      <div>
        <h1 className="font-serif text-5xl font-semibold bg-gradient-to-l from-[#7e5f0f] to-[#12043c] text-transparent mt-5 mb-5 bg-clip-text ">
          Report Issues
        </h1>
      </div>
      <div className="w-full m-auto mt-28 flex flex-row flex-wrap justify-evenly">
        <div className="border-none h-[300px] shadow-lg shadow-[rgba(75,30,133,1)] rounded-2xl w-1/5 flex flex-col justify-center items-center justify-evenly bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)]">
          <h1 className="mb-5 mt-5 bg-gradient-to-r from-[white] to-[#daa520] text-transparent bg-clip-text font-semibold text-2xl">
            Water Management{" "}
          </h1>

          <label>
            <input
              type="checkbox"
              name="drainage"
              checked={issues.drainage}
              onChange={handleCheckboxChange}
            />
            <p className="inline font-semibold text-xl p-2 bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
              Drainage Problem
            </p>
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="purification"
              checked={issues.purification}
              onChange={handleCheckboxChange}
            />
            <p className="inline text-xl p-2 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
              Water Purification
            </p>
          </label>
          <br />
          <FileUpload />
        </div>
        <div className="border-none h-[300px] shadow-lg shadow-[rgba(75,30,133,1)] rounded-2xl w-1/5 flex flex-col justify-center items-center justify-evenly bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)]">
          <h1 className="font-semibold bg-gradient-to-r from-[white] to-[#daa520] text-transparent bg-clip-text text-2xl mb-5 mt-5">
            Education Issues
          </h1>
          <label>
            <input
              type="checkbox"
              name="stationary"
              checked={issues.stationary}
              onChange={handleCheckboxChange}
            />
            <p className="inline text-lg p-2 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
              Stationary Requirement
            </p>
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="teaching_materials"
              checked={issues.teaching_materials}
              onChange={handleCheckboxChange}
            />
            <p className="inline text-lg p-2 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
              Scarcity Of Teaching Materials
            </p>
          </label>
          <br />
          <FileUpload />
        </div>
        <div className="border-2 h-[300px] shadow-lg shadow-[rgba(75,30,133,1)] border-none rounded-2xl w-1/5 flex flex-col justify-evenly items-center bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)]">
          <h1 className="bg-gradient-to-r from-[white] to-[#daa520] text-transparent bg-clip-text font-semibold text-2xl mb-5 mt-5">
            Infrastructure
          </h1>
          <label>
            <input
              type="checkbox"
              name="furniture"
              checked={issues.furniture}
              onChange={handleCheckboxChange}
            />
            <p className="inline font-semibold text-lg p-2 bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
              Furniture Requirement
            </p>
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="sanitation facilities"
              checked={issues.sanitation_facilities}
              onChange={handleCheckboxChange}
            />
            <p className="inline text-lg p-2 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
              Furniture Requirement
            </p>
          </label>
          <br />
          <FileUpload />
        </div>
        <div className="border-2 h-[300px] shadow-lg shadow-[rgba(75,30,133,1)] border-none rounded-2xl w-1/5 flex flex-col justify-center justify-evenly items-center bg-gradient-to-br from-[#381e85] to-[rgba(67,58,58,0.39)]">
          <h1 className="bg-gradient-to-r from-[white] to-[#daa520] text-transparent bg-clip-text font-semibold text-2xl mb-5 mt-5">
            Management issues
          </h1>
          <label>
            <input
              type="checkbox"
              name="security"
              checked={issues.security}
              onChange={handleCheckboxChange}
            />
            <p className="inline text-lg p-2 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
              Security
            </p>
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="staff management"
              checked={issues.staff_management}
              onChange={handleCheckboxChange}
            />
            <p className="inline text-lg p-2 mb-5 font-semibold bg-gradient-to-br from-white to-[#c0c0c0] text-transparent bg-clip-text">
              Managing the staffs
            </p>
          </label>
          <br />
          <FileUpload />
        </div>
      </div>
      {/* <div className='bg-gradient-to-r from-white to-[#d4b053] text-transparent bg-clip-text'> */}
      <button
        class="relative flex items-center px-6 mb-14 py-5 px-10 overflow-hidden font-medium transition-all bg-[#381e84c8] rounded-md group"
        onClick={handleSubmit}
      >
        <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#381e84] rounded group-hover:-mr-4 group-hover:-mt-4">
          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#381e84]rounded group-hover:-ml-4 group-hover:-mb-4">
          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          Submit Issues
        </span>
      </button>
    </div>
    // </div>
  ); //return statement closed
};

export default Issues;
