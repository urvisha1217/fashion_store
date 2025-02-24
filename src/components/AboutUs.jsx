import Contact from "./Cotact";
import Footer from "./Footer";
import Header from "./Header";

const AboutUs = () => {
  return (
    <>
    <Header bgColor={"[#103F51]"} txtColor={"white"} logoUrl={"/images/logo2.svg"} />    
    <section className="w-full bg-white py-8 px-4 md:px-12 md:py-14 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img
              src="/images/aboutUs.png"
              alt="About Us"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 ">
          <h3 className="text-5xl font-bold text-[#103F51] md:text-center lg:text-left "><span className=" border-b">About</span> us</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#103F51] mt-8 ">
           Lorem Ipsum Simply Dummy
          </h2>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>

          {/* Button */}
          <div className="mt-6 px-18 md:px-0">
            <button className="bg-[#103F51] text-white px-5 py-3 rounded-md text-lg font-semibold">
            Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
   <Contact />
   <Footer />
    </>
  );
};

export default AboutUs;
