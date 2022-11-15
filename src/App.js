import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Profile from "./Profile";

function App() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Signin />;
  }
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
