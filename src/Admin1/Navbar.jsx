import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div className=" top-0 left-0 right-0 px-6 py-4 flex items-center justify-between 
      bg-gray-800 shadow-lg z-50 text-white">
      
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold tracking-wide">📊 Dashboard</h1>

      {/* Logout Button */}
      <button
        className="flex items-center space-x-2 text-lg px-4 py-2 rounded-lg 
        bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-md"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="text-lg" />
        <span className="hidden sm:inline font-medium">Logout</span>
      </button>
    </div>
  );
};

export default Navbar;
