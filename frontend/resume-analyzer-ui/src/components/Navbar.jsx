import React from "react";
import { FaRobot } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <FaRobot style={{ marginRight: "8px" }} /> AI Resume Analyzer
      </h1>
    </nav>
  );
};

export default Navbar;
