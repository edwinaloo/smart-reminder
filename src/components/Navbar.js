import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#4c6ef5", padding: "1rem" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}
