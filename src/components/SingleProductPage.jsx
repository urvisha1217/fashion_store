import React from "react";
import Header from "./Header";
import RecommendationProduct from "./RecommendationProduct";
import Contact from "./Cotact";
import Footer from "./Footer";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SingleProductPage = () => {
  const navigate = useNavigate(); 

  return (
    <>
      <Header bgColor={"[#103F51]"} txtColor={"white"} logoUrl={"/images/logo2.svg"}/>

      <div className="container mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 items-start">
          {/* Product Images Section */}
          <div className="flex flex-col items-center">
            {/* Main Image */}
            <img
              src="/images/product.png"
              alt="Product"
              className="w-full md:w-[90%] h-auto rounded-lg"
            />

            {/* Thumbnails */}
            <div className="flex gap-2 mt-2">
              {[
                "/images/product.png",
                "/images/product.png",
                "/images/product.png",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Color option"
                  className="w-16 h-16 md:w-20 md:h-20 cursor-pointer rounded-lg border border-gray-300 hover:border-[#103F51]"
                />
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-300">
            {/* Product Title & Price */}
            <h2 className="text-lg sm:text-xl font-semibold text-[#103F51]">
              Regular Fit Oxford Shirt
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm">
              MRP inclusive of all taxes
            </p>

            <div className="flex justify-between items-center mt-2">
              <span className="text-lg sm:text-xl font-bold">₹1,499.00</span>
              <span className="text-gray-400 line-through text-xs sm:text-sm">
                ₹3,899.99
              </span>
            </div>

            {/* Color Selection */}
            <h3 className="text-md sm:text-lg mt-4 text-[#103F51]">Color</h3>
            <div className="flex space-x-2 mt-2">
              {[
                "/images/product.png",
                "/images/product.png",
                "/images/product.png",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Color option"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 cursor-pointer rounded-lg"
                />
              ))}
            </div>

            {/* Size Selection */}
            <h3 className="text-md sm:text-lg mt-4 text-[#103F51]">Size</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["S", "M", "L", "XL", "2XL"].map((size) => (
                <button
                  key={size}
                  className="border px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base rounded hover:bg-gray-400 transition"
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Product Description */}
            <h3 className="text-lg sm:text-xl font-medium mt-4 text-[#103F51]">
              Regular Fit Oxford Shirt
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <h3 className="text-lg sm:text-xl font-medium mt-4 text-[#103F51]">
              Fabric + Care
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            {/* Pricing Details */}
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                <span>Rs. 1,499.00 x 1</span>
                <span>Rs. 1,499.00</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                <span>Text estimate</span>
                <span>Rs. 0.00</span>
              </div>
              <p className="text-gray-400 text-xs">
                MRP Inclusive of all taxes
              </p>
            </div>

            {/* Total Price */}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between">
                <span className="text-lg sm:text-xl text-[#103F51] font-semibold">
                  Total
                </span>
                <span className="font-bold text-[#103F51]">₹1,499.00</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex items-center gap-2">
              <button
                className="flex-1 bg-[#103F51] text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base transition hover:bg-[#0D3245]"
                onClick={() => navigate(`/cart`)}
              >
                Add to Cart
              </button>
              <AiOutlineHeart className="text-xl sm:text-2xl md:text-5xl p-2 border rounded-lg bg-[#103F51] text-white transition hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      <RecommendationProduct />
      <Contact />
      <Footer />
    </>
  );
};

export default SingleProductPage;
