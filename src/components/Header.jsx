import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <header className="border-b border-gray-200 w-full py-4 lg:text-xl text-[#152238] md:text-lg bg-white  top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Logo */}
          <div className="text-gray-900 lg:text-2xl font-extrabold md:text-xl">
            <span>SHRUTIK</span>{" "}
            <span className="text-gray-600 font-semibold">SOJITRA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-500">
              Home
            </a>
            <a href="#" className="hover:text-gray-500">
              Shop
            </a>
            <a href="#" className="hover:text-gray-500">
              About us
            </a>
            <a href="#" className="hover:text-gray-500">
              Contact us
            </a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex space-x-3">
            {[FiSearch, FiUser, FiShoppingCart].map((Icon, index) => (
              <div
                key={index}
                className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 cursor-pointer"
              >
                <Icon className="lg:w-5 lg:h-5 md:w-4 md:h-4" />
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FiX className="w-7 h-7" />
              ) : (
                <FiMenu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <a href="#" className="hover:text-gray-500">
                Home
              </a>
              <a href="#" className="hover:text-gray-500">
                Shop
              </a>
              <a href="#" className="hover:text-gray-500">
                About us
              </a>
              <a href="#" className="hover:text-gray-500">
                Contact us
              </a>
            </nav>

            {/* Mobile Icons */}
            <div className="flex justify-center space-x-3 pb-4">
              {[FiSearch, FiUser, FiShoppingCart].map((Icon, index) => (
                <div
                  key={index}
                  className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-[#0b1431] text-white md:pt-24 md:pb-16  py-10">
        <div className="container flex flex-col-reverse gap-8 sm:mb-8 md:flex-row items-center px-6 md:px-14 w-[90%] max-w-[1600px]  mx-auto">
          {/* Left Content */}
          <div className="md:w-2/3 text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Elevate Style, <br /> Embrace Story
            </h1>
            <p className="text-md sm:text-lg  text-gray-300 leading-relaxed pr-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <button className="bg-white text-[#0b1431] px-6 py-2 rounded-md font-semibold shadow-md hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="bg-white rounded-t-full overflow-hidden w-60 h-90  md:w-[26rem] md:h-[35rem] flex items-center">
              <img
                src="/images/heroImg.png"
                alt="Fashion Model"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="relative w-full">
              
          <div className="relative">
            <img
              src="/images/ContactUs.png"
              alt="Background"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>

         
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 px-[14%]">
            <button className="bg-[#0b1431] text-white px-8 py-4 rounded-md text-lg  font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section> */}
      <section className="w-full relative">
  {/* Background Image */}
  <div className="relative w-full">
    <img
      src="/images/ContactUs.png"
      alt="Background"
      className="w-full h-auto md:h-[300px] lg:h-[400px] object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-10"></div>
  </div>

  {/* Button */}
  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <button className="bg-[#0b1431] text-white px-6 py-3 md:px-8 md:py-4 rounded-md text-lg font-semibold">
      Contact Us
    </button>
  </div> */}
  <div className="absolute top-1/2 left-10 transform -translate-y-1/2 px-[14%]">
            <button className="bg-[#0b1431] text-white px-4 py-2 md:px-8 md:py-4 rounded-md text-lg  font-semibold">
              Contact Us
            </button>
          </div>
</section>

      
      <footer className="bg-[#0b1431] text-white py-10 lg:text-left  ">
        <div className="flex flex-col md:flex-row justify-evenly w-[100%] mx-auto px-6 sm:px-6 lg:px-8">
          {/* Brand Section */}
          <div className="w-full md:w-[50%] lg:w-[27%] mb-6 md:mb-0 text-center md:text-left md:pr-3">
            <h2 className="text-xl font-extrabold text-center lg:text-left">
              SHRUTIK <span className="font-light">SOJITRA</span>
            </h2>
            <p className="mt-2 text-gray-300 text-lg leading-relaxed text-center lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>

          {/* Categories, Information, and Contact Information */}
          <div className="flex flex-col md:flex-row justify-between w-full md:w-auto gap-6 lg:gap-32 text-center lg:text-left">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <ul className="space-y-2 text-[#989797] text-lg">
                <li>
                  <a href="#">Roundneck T-shirt</a>
                </li>
                <li>
                  <a href="#">Polo T-shirt</a>
                </li>
                <li>
                  <a href="#">Oversize T-shirt</a>
                </li>
                <li>
                  <a href="#">Hoodies</a>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Information</h3>
              <ul className="space-y-2 text-[#989797] text-lg">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Shipping Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Contact Information
              </h3>
              <p className="text-[#989797] text-lg">Address: Surat, Gujarat</p>
              <p className="text-[#989797] text-lg">Mobile: +91 0007800078</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white mt-8 pt-4 text-center text-gray-400 text-sm">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </footer>
    </>
  );
}
