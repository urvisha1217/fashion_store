import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { otp }; // Correct payload structure

    try {
      const response = await axios.post("http://localhost:5000/api/users/verify-otp", userData);
      
      if (response.status === 200) {
        Swal.fire("Success", "OTP verified successfully!", "success");
        navigate("/"); // Redirect to dashboard or another page
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      Swal.fire("Error", error.response?.data?.message || "An error occurred. Please try again later.", "error");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="hidden lg:flex w-1/2">
        <img src="/images/SignIn.png" alt="Fashion" className="w-full h-full" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12">
        <div className="mb-6">
          <img src="/images/logo.svg" alt="Logo" className="w-30 h-30" />
        </div>

        <h2 className="text-2xl font-bold text-[#103F51]">OTP Verification</h2>
        <p className="text-gray-500 text-center max-w-md">
          Please enter your phone number and OTP for verification.
        </p>

        <form className="w-full max-w-lg mt-6 space-y-4" onSubmit={handleLogin}>

          <input
            type="number"
            name="otp"
            placeholder="Enter your OTP"
            className="w-full p-3 rounded-md placeholder-[#103F51] border border-[#103F51]"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button type="submit" className="w-full bg-[#103F51] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1a2448] transition duration-300">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
