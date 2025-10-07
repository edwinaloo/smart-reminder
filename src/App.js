import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TaskManagement from "./pages/TaskManagement";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<TaskManagement />} />
      </Routes>
    </Router>
  );
}
