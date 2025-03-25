import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserAccount = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track login status

  // Check session storage when the component loads
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      setIsLoggedIn(false); // Mark as logged out
    } else {
      setUserName(sessionStorage.getItem("userName") || "User");
      setUserAddress(sessionStorage.getItem("userAddress") || "India");
    }
  }, []); // Runs only once on mount

  // Effect to handle redirection after logout
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [isLoggedIn, navigate]); // Runs when isLoggedIn changes

  // Logout Function
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });
  
      const data = await response.json();
      console.log("Logout Response:", data);
  
      if (response.ok) {
        // ✅ Clear session storage
        sessionStorage.clear();
        
        // ✅ Show success toast
        toast.success("Logged out successfully!", { autoClose: 2000 });
  
        // ✅ Redirect to sign-in after delay
        setTimeout(() => {
          navigate("/sign-in");
        }, 2000);
      } else {
        toast.error(data.message || "Logout failed! Please try again.");
      }
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
          <ToastContainer position="top-right" autoClose={3000} />

      <Header txtColor={"[#103F51]"} bgColor={"white"} logoUrl={"/images/logo2.png"} />
      <div className="max-w-4xl mx-auto p-6">
        <button onClick={handleLogout} className="text-red-600 font-semibold">
          Logout
        </button>

        <h2 className="text-2xl font-semibold text-red-700 mt-2">My account</h2>
        <p className="text-gray-600">Welcome back, {userName}!</p>

        <h3 className="text-lg font-semibold mt-4">My orders</h3>
        <hr className="border-gray-300 my-2" />
        <p className="text-gray-500">You haven't placed any orders yet</p>

        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-700">Primary address</h3>
          <p className="text-gray-600">{userName.toLowerCase()}</p>
          <p className="text-gray-600">{userAddress}</p>

          <button className="bg-red-700 text-white py-2 px-4 mt-3 rounded-md">
            EDIT ADDRESSES
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserAccount;
