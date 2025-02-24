import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ bgColor, txtColor,logoUrl }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Header Section */}
      <header
        className={`border-b border-gray-200 w-full py-4 lg:text-xl text-${txtColor} md:text-lg bg-${bgColor}  top-0 left-0 right-0 z-50`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Logo */}
          <div className="lg:text-2xl font-extrabold md:text-xl">
          <img src={logoUrl} alt="logo" className="w-20 h-20 object-cover" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
            <Link to="/shop" className="hover:text-gray-500">
              Shop
            </Link>
            <Link to="/about-us" className="hover:text-gray-500">
              About Us
            </Link>
            <Link to="/contact-us" className="hover:text-gray-500">
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:flex space-x-3">
            {[FiSearch, FiUser, FiShoppingCart].map((Icon, index) => (
              <div
                key={index}
                onClick={() => {
                  if (index === 0) {
                    navigate("/search"); // Redirects to search page
                  } else if (index === 1) {
                    navigate("/sign-up"); // Redirects to signUp page
                  }
                  // No action needed for the shopping cart icon (index 2) for now
                }}
                className={`bg-${txtColor} text-${bgColor} p-2 rounded-full cursor-pointer`}
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
          <div
            className={`md:hidden absolute top-16 left-0 w-full bg-${bgColor} shadow-lg transition-all `}
          >
            <nav className="flex md:flex-row flex-col  items-center space-y-4 p-4 ">
              <Link to="/">
                Home
              </Link>
              <Link to="/shop">
                Shop
              </Link>
              <Link to="/about-us">
                About Us
              </Link>
              <Link to="/contact-us">
                Contact Us
              </Link>
            </nav>

            {/* Mobile Icons */}
            <div className="flex justify-center space-x-3 pb-4">
              {[FiSearch, FiUser, FiShoppingCart].map((Icon, index) => (
                <div
                key={index}
                onClick={() => {
                  if (index === 0) {
                    navigate("/search"); // Redirects to search page
                  } else if (index === 1) {
                    navigate("/sign-up"); // Redirects to signUp page
                  }
                  // No action needed for the shopping cart icon (index 2) for now
                }}
                className={`bg-${txtColor} text-${bgColor} p-2 rounded-full cursor-pointer`}
              >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
