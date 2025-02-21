import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row h-screen pt-4 md:pt-0">
      {/* Left Section - Image */}
      <div className="hidden lg:flex w-1/2 h-full ">
        <img
          src="/images/SignUp.png"
          alt="Fashion"
          className="w-full h-full "
        />
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12">
        {/* Logo */}
        <div className="mb-6">
          <div className="w-25 h-25 bg-black text-white flex items-center justify-center rounded-full text-2xl font-bold ">
            Logo
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-4xl font-bold text-[#103F51] pb-4">Welcome</h2>
        <p className="text-gray-400 text-center max-w-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Form */}
        <form className="w-full max-w-xl mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full name "
            className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]"
          />

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]"
            />
          </div>

          {/* Repeat Password with Eye Icon */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Repeat password"
              className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]"
            />
            <span
              className="absolute right-3 top-4 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="w-4 h-4" />
            <label htmlFor="terms" className="text-[#103F51] text-md">
              I agree to the <span className="font-semibold">Terms of Users</span>
            </label>
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-[#103F51] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1a2448] transition duration-300">
            Sign up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-gray-600 text-md mt-4">
          Have an account? <a href="#" className="text-[#103F51] font-semibold border-b">Log in.</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
