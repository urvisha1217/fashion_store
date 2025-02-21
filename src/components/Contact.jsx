import React from "react";

 function Contact () {
 
  return (
    <section className="w-full relative">
      {/* Background Image */}
      <div className="relative w-full">
        <img
          src={imageSrc}
          alt="Background"
          className="w-full h-auto md:h-[300px] lg:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Button */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 px-[14%]">
        <button className="bg-[#0b1431] text-white px-4 py-2 md:px-8 md:py-4 rounded-md text-lg font-semibold">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Contact;
