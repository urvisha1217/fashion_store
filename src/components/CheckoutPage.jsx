import React from "react";
import Contact from "./Cotact";
import Footer from "./Footer";
import Header from "./Header";

const CheckoutPage = () => {
  return (
    <>
      <Header bgColor={"[#103F51]"} txtColor={"white"} logoUrl={"/images/logo2.svg"} />
      <div className="max-w-7xl mx-auto p-4 mt-4 text-[#103F51]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side - Cart Items */}
          <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-300 shadow-lg w-full">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex flex-col md:flex-row border-b pb-4 mb-4 border-gray-300"
              >
                <img
                  src="/images/product.png"
                  alt="Product"
                  className="w-full md:w-[40%] rounded-lg"
                />
                <div className="ml-0 md:ml-4 flex-1">
                  <div className="flex flex-col md:flex-row justify-between">
                    <h2 className="font-semibold text-lg">
                      Regular Fit Oxford Shirt
                    </h2>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg">₹1,499.00</span>
                      <span className="text-gray-400 line-through">
                        ₹3,899.99
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm pb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="flex items-center justify-between md:justify-start border border-[#103F51] font-semibold px-3 py-2 rounded-full shadow-sm w-full md:w-auto max-w-[150px]">
  <button className="px-4 text-lg bg-gray-200 hover:bg-gray-300 rounded-l-full focus:outline-none active:scale-95 transition">
    -
  </button>
  <span className="px-6 text-base text-center w-12 select-none">1</span>
  <button className="px-4 text-lg bg-gray-200 hover:bg-gray-300 rounded-r-full focus:outline-none active:scale-95 transition">
    +
  </button>
</div>

                </div>
              </div>
            ))}
            <div className="flex justify-between text-gray-400 mb-2 text-sm md:text-base">
              <span>Rs. 1499.00 * 1</span>
              <span>Rs. 1,499.00</span>
            </div>
            <div className="flex justify-between text-gray-400 mb-1 text-sm md:text-base">
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
            <button className="w-full bg-[#103F51] text-white py-3 rounded-lg mt-4 text-center">
              Buy Now
            </button>
          </div>

          {/* Right Side - Contact & Shipping */}
          <div className="space-y-6 text-lg">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-300">
              <h2 className="font-semibold mb-3">Contact Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Phone Number"
                />
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-300">
              <h2 className="font-semibold mb-3">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="border p-2 rounded w-full"
                  placeholder="First Name"
                />
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Last Name"
                />
                <input
                  className="border p-2 rounded w-full md:col-span-2"
                  placeholder="Address Line-1"
                />
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Apt, suite"
                />
                <input
                  className="border p-2 rounded w-full md:col-span-2"
                  placeholder="Address Line-2"
                />
                <input
                  className="border p-2 rounded w-full"
                  placeholder="City"
                />
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Country"
                />
                <input
                  className="border p-2 rounded w-full"
                  placeholder="State/Province"
                />
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Postal Code"
                />
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-300">
              <h2 className="font-semibold mb-3">Payment Method</h2>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-400">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" className="form-radio" />
                  <span>Cash on Delivery</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" className="form-radio" />
                  <span>Net Banking / Online</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
   <Footer />
    </>
  );
};

export default CheckoutPage;