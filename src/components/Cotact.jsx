import React from "react";

const Contact = () => {
  return (   
    <section className="w-full relative">
 
    <div className="relative w-full">
      <img
        src="/images/ContactUs.png"
        alt="Background"
        className="w-full h-auto md:h-[300px] lg:h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-10"></div>
    </div>
  
    <div className="absolute top-1/2 left-10 transform -translate-y-1/2 px-[14%]">
              <button className="bg-[#103F51] text-white px-4 py-2 md:px-8 md:py-4 rounded-md text-lg  font-semibold">
                Contact Us
              </button>
            </div>
  </section>
  );
};

export default Contact;
