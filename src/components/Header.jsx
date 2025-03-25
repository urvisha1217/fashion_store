import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ bgColor, txtColor, logoUrl }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`bg-[#103F51] text-white text-center py-4 text-lg border-b`}
      >
        COD Available
      </div>
      <header
        className={`border-b border-gray-200 w-full py-4 lg:text-xl text-${txtColor} md:text-lg bg-${bgColor}  top-0 left-0 right-0 z-50`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Centered Logo and Navigation */}
          <div className="flex-1 flex justify-center pl-[8%]">
            <div className="flex flex-col items-center">
              <img src={logoUrl} alt="BITAFAB Logo" className="h-full mb-4" />
              <nav className="hidden md:flex space-x-12 pb-2">
                <Link to="/" className="hover:text-gray-500">
                  Home
                </Link>
                <Link to="/shop" className="hover:text-gray-500">
                  Shop
                </Link>
                <Link to="/reviews" className="hover:text-gray-500">
                  Reviews
                </Link>
                <Link to="/about-us" className="hover:text-gray-500">
                  About Us
                </Link>
                <Link to="/contact-us" className="hover:text-gray-500">
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>

          {/* Search, User, and Cart Icons */}
          <div className="hidden md:flex space-x-3">
              {[FiSearch, FiUser, FiShoppingCart].map((Icon, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (index === 0) {
                      navigate("/search");
                    } else if (index === 1) {
                    //  const authToken = sessionStorage.getItem("authToken");
                    //  if (authToken) {
                        navigate("/user"); // Redirect to user profile if session exists
                    //  } else {
                    //    navigate("/sign-in"); // Redirect to login if no session found
                    //  }
                    } else if (index === 2) {
                      navigate("/cart");
                    }
                  }}
                  className={`bg-white text-[#103F51] p-2 rounded-full cursor-pointer`}
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

        {menuOpen && (
          <div
            className={`md:hidden absolute top-16 left-0 w-full bg-${bgColor} shadow-lg transition-all `}
          >
            <nav className="flex md:flex-row flex-col  items-center space-y-4 p-4 ">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
            </nav>

            <div className="flex justify-center space-x-3 pb-4">
              {[FiSearch, FiUser, FiShoppingCart].map((Icon, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (index === 0) {
                      navigate("/search");
                    } else if (index === 1) {
                      navigate("/sign-up");
                    }
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
