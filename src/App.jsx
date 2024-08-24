import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import Issues from "./Components/issues";
import Solution from "./Components/Solution";
import Details from "./Components/Details";
import SignUp from "./Components/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/details" element={<Details />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/solution" element={<Solution />} />
      </Routes>
    </>
  );
};

export default App;
