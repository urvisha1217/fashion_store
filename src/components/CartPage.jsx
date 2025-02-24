import React from "react";
import Contact from "./Cotact";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const navigate = useNavigate(); 

  const cartItems = [
    {
      id: 1,
      name: "Regular Fit Oxford shirt",
      price: 1499.0,
      size: "M",
      color: "Brown",
      image: "/images/product.png",
    },
    {
      id: 2,
      name: "Regular Fit Oxford shirt",
      price: 1499.0,
      size: "M",
      color: "Brown",
      image: "/images/product.png",
    },
    {
      id: 3,
      name: "Regular Fit Oxford shirt",
      price: 1499.0,
      size: "M",
      color: "Brown",
      image: "/images/product.png",
    },
  ];

  return (
    <>
        <Header bgColor={"[#103F51]"} txtColor={"white"} logoUrl={"/images/logo2.svg"} />    

    <div className="lg:w-[92%] mx-auto p-3 lg:p-6 text-[#103F51]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart items section */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center border p-3 rounded-lg shadow-md bg-white mb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full sm:w-48 rounded-lg"
              />
              <div className="md:ml-2 p-2 flex flex-grow flex-col space-y-2">
                <div className="flex justify-between">
                  <h2 className="text-2xl sm:text-4xl font-semibold">
                    {item.name}
                  </h2>
                  <span className="text-xl sm:text-2xl font-semibold text-[#103F51] px-2">
                    Rs. {item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-400 text-base sm:text-[1.1rem] mt-1 w-full sm:w-[90%]">
                  Lorem Ipsum is simply dummy text of the printing industry.
                  Lorem Ipsum is simply dummy text of the printing industry.
                </p>
                <div className="flex justify-between items-center gap-4 mt-2 text-lg sm:text-2xl">
                  <div className="flex">
                    <div className="flex flex-col">
                      <span className="font-semibold">Size</span>
                      <span className="ml-1 text-gray-400">{item.size}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="ml-4 font-semibold">Color</span>
                      <span className="ml-4 text-gray-400">{item.color}</span>
                    </div>
                  </div>

                  <div className="flex items-center border border-[#103F51] font-semibold px-3 py-2 rounded-full shadow-sm">
                    <button className="px-3 text-lg">-</button>
                    <span className="px-4 text-base">1</span>
                    <button className="px-3 text-lg">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout section */}
        <div className="p-6 h-61 border rounded-lg shadow-lg bg-white">
          <div className="flex justify-between text-gray-400 mb-2">
            <span>Rs. 1499.00 * 1</span>
            <span>Rs. 1,499.00</span>
          </div>
          <div className="flex justify-between text-gray-400 mb-1">
            <span>Text estimate</span>
            <span>Rs. 00.00</span>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            MRP inclusive of all taxes
          </p>
          <hr className="mb-3" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="text-[#103F51]">Rs. 1,499.00</span>
          </div>
          <button className="mt-4 w-full bg-[#103F51] text-white py-3 rounded-lg hover:bg-[#103F51]" 
          onClick={() => navigate(`/checkout`)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
    <Contact />
   <Footer />
    </>
  );
};

export default CartPage;