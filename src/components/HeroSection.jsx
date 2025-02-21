export default function HeroSection() {
    return (
        <section className="bg-[#0b1431] text-white md:pt-24 md:pb-16  py-10">
        <div className="container flex flex-col-reverse gap-8 sm:mb-8 md:flex-row items-center px-6 md:px-14 w-[90%] max-w-[1400px]  mx-auto">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Elevate Style, <br /> Embrace Story
            </h1>
            <p className="text-md sm:text-lg text-gray-300 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type.
            </p>
            <button className="bg-white text-[#0b1431] px-6 py-2 rounded-md font-semibold shadow-md hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-white rounded-t-full overflow-hidden w-60 h-90  md:w-[22rem] md:h-[32rem] flex items-center">
              <img 
                src="/images/heroImg.png" 
                alt="Fashion Model" 
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  