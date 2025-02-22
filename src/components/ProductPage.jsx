import { useState } from "react";
import { Range } from "react-range";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Cotact";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate(); 
  const [selectedCategory, setSelectedCategory] = useState("Jewelry");
  const [priceRange, setPriceRange] = useState([1500, 5500]);
  const [sortOrder, setSortOrder] = useState("Best Rating");

  const categories = ["Kids", "Men", "Women", "Jewelry"];
  const sortOptions = [
    "Most Popular",
    "Best Rating",
    "Newest",
    "Price Low - High",
    "Price High - Low",
  ];

  const products = Array(6).fill({
    name: "Regular Fit Oxford shirt",
    price: "₹1,499.00",
    oldPrice: "₹3,899.99",
    rating: "4.8 (98)",
    image: "/images/product.png",
  });

  return (
    <>
      <Header bgColor={"[#103F51]"} txtColor={"white"} />
      <div className="flex flex-col md:flex-row p-6 bg-gray-50">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-6 bg-white shadow-lg rounded-lg md:sticky top-20">
          <h2 className="font-semibold text-lg mb-3 text-gray-900">Categories</h2>
          {categories.map((category, index) => (
            <label key={index} className="flex items-center mb-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">{category}</span>
            </label>
          ))}

          {/* Price Range */}
          <h2 className="font-semibold text-lg mt-6 mb-3 text-gray-900">Price Range</h2>
          <div className="relative w-full">
            <Range
              step={100}
              min={500}
              max={10000}
              values={priceRange}
              onChange={(values) => setPriceRange(values)}
              renderTrack={({ props, children }) => (
                <div {...props} className="w-full h-2 rounded-md relative">
                  <div className="absolute top-0 left-0 h-2 bg-gray-300 rounded-md w-full" />
                  <div
                    className="absolute top-0 left-0 h-2 bg-blue-500 rounded-md"
                    style={{
                      width: `${((priceRange[1] - priceRange[0]) / (10000 - 500)) * 100}%`,
                      left: `${((priceRange[0] - 500) / (10000 - 500)) * 100}%`,
                    }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ props, index }) => {
                const { key, ...restProps } = props; // Exclude key
                return (
                  <div
                    {...restProps}
                    key={index}
                    className="w-4 h-4 bg-blue-600 rounded-full border border-white shadow-md"
                  />
                );
              }}
            />
          </div>
          <div className="flex justify-between lg:text-sm mt-2 m md:text-xs gap-1">
            <span className="px-3 py-1 border rounded-md">₹{priceRange[0]}.00</span>
            <span className="px-3 py-1 border rounded-md">₹{priceRange[1]}.00</span>
          </div>

          {/* Sort Order */}
          <h2 className="font-semibold text-lg mt-6 mb-3 text-gray-900">Sort Order</h2>
          {sortOptions.map((option) => (
            <label key={option} className="flex items-center mb-2 cursor-pointer">
              <input
                type="radio"
                checked={sortOrder === option}
                onChange={() => setSortOrder(option)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">{option}</span>
            </label>
          ))}
        </aside>

        {/* Product Grid */}
        <main className="w-full md:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} 
              onClick={() => navigate(`/product`)}
              //onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 md:h-72 object-cover rounded-t-lg"
                />

                {/* Product Details */}
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{product.name}</h3>
                    <div className="text-right">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Shirt</span>
                    <span className="line-through">{product.oldPrice}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center text-black text-sm mt-2">
                    ⭐ {product.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default ProductPage;
