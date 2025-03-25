import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Fname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ Fname: "", email: "", phone: "", message: "" });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <>
      <Header
        txtColor={"[#103F51]"}
        bgColor={"white"}
        logoUrl={"/images/logo2.png"}
      />

      <section className="xl:w-[80%] sm:w-full mx-auto px-4 sm:px-10 xl:px-6 py-10">
        <h2 className="text-3xl font-bold text-[#103F51]">
          <span className="border-b">Contact</span> Us
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {/* Left: Map */}
          <div className="w-full">
            <iframe
              title="Google Map"
              className="w-full h-[300px] sm:h-[350px] lg:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95373531531668!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4d82bfb%3A0x5045675218ce6e0!2sMelbourne%2C+Victoria%2C+Australia!5e0!3m2!1sen!2sus!4v1532589198014"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="Fname"
                placeholder="Full Name"
                className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]"
                value={formData.Fname}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51]"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 border border-[#103F51] rounded-md placeholder-[#103F51] h-32"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#103F51] text-white py-3 rounded-md text-lg font-semibold"
              >
                Send
              </button>
            </form>

            <div className="mt-6 text-gray-600 text-sm space-y-2">
              <p>
                📞 <strong>Phone:</strong> +91 00052 00052
              </p>
              <p>
                📍 <strong>Location:</strong> Surat, Gujarat 395006
              </p>
              <p>
                📧 <strong>Email:</strong> xyzdesigns@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
