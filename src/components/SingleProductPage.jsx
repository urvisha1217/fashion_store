import React from "react";
import Header from "./Header";
import RecommendationProduct from "./RecommendationProduct";
import Contact from "./Cotact";
import Footer from "./Footer";
const SingleProductPage = () => {
  return (
    <>
    <Header bgColor={"[#103F51]"} txtColor={"white"} />

    <div className="container mx-auto p-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product Images */}
        <div className="md:col-span-2 grid grid-cols-2 gap-2 ">
          <img
            src="/images/product.png"
            alt="Product"
            className="w-full h-auto"
          />
          <img
            src="/images/product.png"
            alt="Product"
            className="w-full h-auto "
          />
          <img
            src="/images/product.png"
            alt="Product"
            className="w-full h-auto "
          />
          <img
            src="/images/product.png"
            alt="Product"
            className="w-full h-auto "
          />
        </div>

        {/* Product Info */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-xl font-semibold text-[#103F51]">Regular Fit Oxford Shirt</h2>
          <p className="text-gray-500">MRP inclusive of all taxes</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-bold">₹1,499.00</span>
            <span className="text-gray-400 line-through">₹3,899.99</span>
          </div>

          {/* Color Selection */}
          <h3 className="text-md text-xl mt-4 text-[#103F51]">Color</h3>
          <div className="flex space-x-2 mt-2">
            <img
              src="/images/product.png"
              alt="Color option"
              className="w-20 h-20   cursor-pointer"
            />
            <img
              src="/images/product.png"
              alt="Color option"
              className="w-20 h-20   cursor-pointer"
            />
            <img
              src="/images/product.png"
              alt="Color option"
              className="w-20 h-20   cursor-pointer"
            />
          </div>

          {/* Size Selection */}
          <h3 className="text-md text-xl mt-4 text-[#103F51]">Size</h3>
          <div className="flex space-x-2 mt-2 text-xl text-[#103F51]">
            {["S", "M", "L", "XL", "2XL"].map((size) => (
              <button
                key={size}
                className="border px-4 py-2 rounded hover:bg-gray-400"
              >
                {size}
              </button>
            ))}
          </div>

          {/* Product Description */}
          <h3 className="text-xl font-medium mt-4 text-[#103F51]">Regular Fit Oxford Shirt</h3>
          <p className="text-gray-400 text-md mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard{" "}
          </p>

          <h3 className="text-xl font-medium mt-4 text-[#103F51]">Fabric + Care</h3>
          <p className="text-gray-400 text-md mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <h3 className="text-xl font-medium mt-4 text-[#103F51]">Regular Fit Oxford Shirt</h3>
          <p className="text-gray-400 text-md mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
          <div className="mt-4  pt-4">
            <div className="flex justify-between text-md text-gray-400">
              <span>Rs. 1,499.00 x 1</span>
              <span>Rs. 1,499.00</span>
            </div>
            <div className="flex justify-between text-md text-gray-400">
              <span>Text estimate</span>
              <span>Rs. 0.00</span>
            </div>
            <p className="text-gray-400 text-xs">MRP Inclusive of all taxes</p>
          </div>
          {/* Pricing Details */}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between">
              <span className="text-xl text-[#103F51] font-semibold">Total</span>
              <span className="font-bold text-[#103F51]">₹1,499.00</span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 bg-[#103F51] text-white py-2 rounded-lg">
              Add Cart
            </button>
            <button className="p-2 border rounded-lg bg-[#103F51] text-white">❤️</button>
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
