import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Cotact";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    id: 1,
    rating: 4.8,
    reviewsCount: 41,
    title: "Regular Fit Oxford Shirt",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/product.png",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      {/* Product Image */}
      <img
        src={review.image}
        alt={review.title}
        className="md:w-55  h-45 w-full"
      />

      {/* Product Details */}
      <div className="mt-4 sm:mt-0 sm:ml-4 flex-1 w-full">
        {/* Rating Section */}
        <div className="flex items-center justify-between">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <MdOutlineStarPurple500 key={i} />
            ))}
            <span className="ml-2 text-gray-500 text-sm">
              {review.rating} ({review.reviewsCount})
            </span>
          </div>

          {/* Action Icons */}
          <div className="flex gap-2 text-[#103F51] cursor-pointer text-lg">
            <AiOutlineDelete />
            <FaRegEdit />
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-lg mt-2">{review.title}</h3>

        {/* Product Description */}
        <p className="text-gray-600 text-sm mt-2">{review.description}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        txtColor={"[#103F51]"}
        bgColor={"white"}
        logoUrl={"/images/logo2.png"}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6"
        onClick={() => navigate(`/single-reivew`)}>
          {Array(8)
            .fill(reviews[0])
            .map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Reviews;
