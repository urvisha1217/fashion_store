import React from "react";

const products = [
  {
    id: 1,
    name: "Regular Fit Oxford Shirt",
    image: "/images/product.png",
    price: "₹1,499.00",
    oldPrice: "₹2,999.00",
    rating: 4.4,
    reviews: 98,
  },
  {
    id: 2,
    name: "Regular Fit Oxford Shirt",
    image: "/images/product.png",
    price: "₹1,499.00",
    oldPrice: "₹2,999.00",
    rating: 4.4,
    reviews: 98,
  },
  {
    id: 3,
    name: "Regular Fit Oxford Shirt",
    image: "/images/product.png",
    price: "₹1,499.00",
    oldPrice: "₹2,999.00",
    rating: 4.4,
    reviews: 98,
  },
  {
    id: 4,
    name: "Regular Fit Oxford Shirt",
    image: "/images/product.png",
    price: "₹1,499.00",
    oldPrice: "₹2,999.00",
    rating: 4.4,
    reviews: 98,
  },
  {
    id: 5,
    name: "Regular Fit Oxford Shirt",
    image: "/images/product.png",
    price: "₹1,499.00",
    oldPrice: "₹2,999.00",
    rating: 4.4,
    reviews: 98,
  },
  {
    id: 6,
    name: "Regular Fit Oxford Shirt",
    image: "/images/product.png",
    price: "₹1,499.00",
    oldPrice: "₹2,999.00",
    rating: 4.4,
    reviews: 98,
  },
];

const NewProduct = () => {
  return (
    <section className="w-[85%] mx-auto px-4 sm:px-10 lg:px-6 py-16">
      {/* Header Section */}
      <h2 className="text-4xl font-bold text-[#103F51]">
        <span className="border-b">New</span> Product
      </h2>
      <p className="text-gray-400 mt-2 max-w-2xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg shadow-sm hover:shadow-md transition duration-300 p-4"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover rounded-md"
            />

            {/* Product Details */}
            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

              {/* Pricing Section (Now in Same Row as Name) */}
              <div className="text-right">
                <span className="text-lg font-bold text-gray-900 ">
                  {product.price}
                </span>
              </div>
            </div>
            <div className=" flex justify-between text-right text-sm text-gray-500 block">
             Shirt
              <span className=" line-through"> {product.oldPrice}</span>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center text-black     text-sm mt-2">
              ⭐ {product.rating} ({product.reviews})
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProduct;
