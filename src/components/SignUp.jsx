import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const hasUpper = /[A-Z]/;
    const hasLower = /[a-z]/;
    const hasNumber = /[0-9]/;
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/;

    if (!minLength.test(password)) {
      setPasswordError("Password must be at least 8 characters long.");
    } else if (!hasUpper.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
    } else if (!hasLower.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
    } else if (!hasNumber.test(password)) {
      setPasswordError("Password must contain at least one number.");
    } else if (!hasSpecial.test(password)) {
      setPasswordError("Password must contain at least one special character.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration Successful!");
        setTimeout(() => navigate("/sign-in"), 2000);
      } else {
        toast.error(data.message || "Registration failed!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen pt-4 md:pt-0">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className="hidden lg:flex w-1/2 h-full">
        <img src="/images/SignIn-Up.JPG" alt="Fashion" className="w-full h-full" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12">
        <div className="mb-6">
          <img src="/images/logo.svg" alt="Logo" className="w-30 h-30" />
        </div>
        <h2 className="text-4xl font-bold text-[#103F51] pb-4">Welcome</h2>
        <p className="text-gray-400 text-center max-w-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-xl mt-6 space-y-4">
          <input type="text" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleChange} required className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]" />
          <input type="text" name="userName" placeholder="Username" value={formData.userName} onChange={handleChange} required className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]" />
          <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]" />
          <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]" />
          </div>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          <div className="relative">
            <input type={showPassword ? "text" : "password"} name="confirmPassword" placeholder="Repeat password" value={formData.confirmPassword} onChange={handleChange} required className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]" />
            <span className="absolute right-3 top-4 cursor-pointer text-gray-500" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="w-4 h-4" required />
            <label htmlFor="terms" className="text-[#103F51] text-md">
              I agree to the <span className="font-semibold">Terms of Users</span>
            </label>
          </div>
          <button type="submit" className="w-full bg-[#103F51] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1a2448] transition duration-300">Sign up</button>
        </form>
        <p className="text-gray-400 text-md mt-4">
          Have an account?
          <a onClick={() => navigate("/sign-in")} className="text-[#103F51] font-semibold underline cursor-pointer"> Log in.</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
