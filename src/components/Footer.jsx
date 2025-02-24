export default function Footer() {
  return (
    <footer className="bg-[#103F51] text-white py-10 lg:text-left  ">
      <div className="flex flex-col md:flex-row justify-evenly w-[100%] mx-auto px-6 sm:px-6 lg:px-8">
        {/* Brand Section */}
        {/* <div className="grid place-items-center ">
          <img
            src="/images/logo2.svg"
            alt="logo"
            className="w-25 h-25  object-cover"
          />
        </div> */}
        <div className="w-full md:w-[50%] lg:w-[27%] mb-6 md:mb-0 text-center md:text-left md:pr-3">
        <div className="grid place-items-center lg:place-items-start">
          <img
            src="/images/logo2.svg"
            alt="logo"
            className="w-25 h-25 object-cover"
          />
        </div>
        {/* <img src="/images/logo2.svg" alt="logo" className="w-25 h-25  grid place-items-center object-cover" /> */}
          {/* SHRUTIK <span className="font-light">SOJITRA</span> */}
          <p className="mt-2 text-gray-300 text-lg leading-relaxed text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>

        {/* Categories, Information, and Contact Information */}
        <div className="flex flex-col md:flex-row justify-between w-full md:w-auto gap-6 lg:gap-32 text-center lg:text-left">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-[#989797] text-lg">
              <li>
                <a href="#">Roundneck T-shirt</a>
              </li>
              <li>
                <a href="#">Polo T-shirt</a>
              </li>
              <li>
                <a href="#">Oversize T-shirt</a>
              </li>
              <li>
                <a href="#">Hoodies</a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-[#989797] text-lg">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <p className="text-[#989797] text-lg">Address: Surat, Gujarat</p>
            <p className="text-[#989797] text-lg">Mobile: +91 0007800078</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white mt-8 pt-4 text-center text-gray-400 text-sm">
        Lorem Ipsum is simply dummy text of the printing
      </div>
    </footer>
  );
}
