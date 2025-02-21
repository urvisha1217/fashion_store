import React from "react";

const products = [
  {
    id: 1,
    name: "Regular Fit Oxford Shirt",
    image: "/images/product.png", // Replace with actual image path
    price: "₹1,499.00",
    oldPrice: "₹3,899.99",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 2,
    name: "Regular Fit Oxford Shirt",
    image: "/images/product.png",
    price: "₹1,499.00",
    oldPrice: "₹3,899.99",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 3,
    name: "Regular Fit Oxford Shirt",
    image: "/images/product.png",
    price: "₹1,499.00",
    oldPrice: "₹3,899.99",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 4,
    name: "Regular Fit Oxford Shirt",
    image: "/images/product.png",
    price: "₹1,499.00",
    oldPrice: "₹3,899.99",
    rating: 4.8,
    reviews: 98,
  },
];

const BestSellingProduct = () => {
  return (
    <section className="w-full mx-auto px-4 sm:px-10 lg:px-6 py-16 bg-[#103F51] text-white">
      <div className="w-[85%] mx-auto">
        {/* Header Section */}
        <h2 className="md:text-4xl font-bold text-3xl ">
          <span className="border-b">Best</span> Selling Product
        </h2>
        <p className="text-gray-300 mt-6 max-w-2xl text-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 mt-10 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded-t-lg"
              />

              {/* Product Details */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  {/* Price Section */}
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
                <div className="flex items-center text-black text-sm mt-2">
                  ⭐ {product.rating} ({product.reviews})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingProduct;
