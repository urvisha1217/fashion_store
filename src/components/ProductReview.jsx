import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Cotact";
const product = {
  id: 1,
  rating: 4.8,
  reviewsCount: 41,
  title: "Regular Fit Oxford Shirt",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  images: [
    "/images/product.png",
    "/images/product.png",
    "/images/product.png",
    "/images/product.png",
  ],
};

const ProductReview = () => {
  return (
    <>
    <Header
            txtColor={"[#103F51]"}
            bgColor={"white"}
            logoUrl={"/images/logo2.png"}
          />
      <div className="border border-gray-200 rounded-lg shadow-sm bg-white p-6 container mx-auto  my-10">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              className="w-full h-70 rounded-lg object-cover"
            />
          ))}
        </div>

        {/* Product Info */}
        <div className="mt-4 ">
          {/* Rating */}
          <div className="flex items-center text-yellow-500 mt-8">
            {[...Array(5)].map((_, i) => (
              <MdOutlineStarPurple500 key={i} />
            ))}
            <span className="ml-2 text-gray-500 text-sm">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-xl mt-2 text-[#103F51]">
            {product.title}
          </h3>

          {/* Product Description */}
          <p className="text-gray-400 text-base mt-2">{product.description}</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default ProductReview;
