import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("Response Data:", data); // Debugging log
  
      if (response.ok) {
        // ✅ Store token & user name in sessionStorage (Corrected)
        sessionStorage.setItem("authToken", data.token);
        sessionStorage.setItem("userName", data.name);  // ✅ Use data.name
  
        toast.success("Login Successful!", { autoClose: 2000 });
  
        // Delay navigation slightly to allow popup to be seen
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(data.message || "Login failed! Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Left Section - Image */}
      <div className="hidden lg:flex w-1/2">
        <img src="/images/SignIn-Up.JPG" alt="Fashion" className="w-full h-full" />
      </div>

      {/* Right Section - Sign In Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12">
        {/* Logo */}
        <div className="mb-6">
          <img src="/images/logo.svg" alt="Logo" className="w-30 h-30" />
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold text-[#103F51]">Welcome Back</h2>
        <p className="text-gray-500 text-center max-w-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg mt-6 space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md placeholder-[#103F51] border border-[#103F51]"
          />

          {/* Password Field with Eye Icon */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md placeholder-[#103F51] border border-[#103F51]"
            />
            <span
              className="absolute right-3 top-4 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-[#103F51] text-sm font-semibold">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="w-full bg-[#103F51] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1a2448] transition duration-300">
            Log in
          </button>
        </form>

        {/* Social Logins */}
        <div className="flex items-center space-x-4 mt-6 w-full max-w-md">
          <button className="flex items-center justify-center w-1/2 border border-[#103F51] py-3 rounded-md text-[#103F51] transition duration-300">
            <FcGoogle className="mr-2" /> Google
          </button>
          <button className="flex items-center justify-center w-1/2 border border-[#103F51] py-3 rounded-md text-[#103F51] transition duration-300">
            <FaFacebookF className="text-blue-600 mr-2" /> Facebook
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-gray-400 text-md mt-4">
          Don't have an account?{" "}
          <a onClick={() => navigate("/sign-up")} className="text-[#103F51] font-semibold underline cursor-pointer">
            Sign up.
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
