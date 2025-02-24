import { useNavigate } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

const SearchComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center p-4 md:p-6 z-50">
      
      {/* Close Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute md:top-10 top-4 left-4 lg:left-[18%] bg-[#103F51] text-white p-2 md:p-3 rounded-full"
      >
        <FiX size={18} />
      </button>

      {/* Search Bar */}
      <div className="relative flex items-center w-full max-w-lg mt-10 md:mt-4">
        <FiSearch className="absolute left-4 text-white" size={18} />
        <input
          type="text"
          placeholder="Search Product"
          className="w-full pl-10 pr-4 py-2 bg-[#103F51] text-white rounded-full focus:outline-none"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-6xl px-4 md:px-0">
        {Array(4)
          .fill({
            name: "Regular Fit Oxford Shirt",
            price: "₹1,499.00",
            oldPrice: "₹3,899.99",
            rating: "4.8 (98)",
            image: "/images/product.png", // Replace with actual image
          })
          .map((product, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-xs">Shirt</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-800">{product.price}</span>
                  <span className="text-xs line-through text-gray-400">
                    {product.oldPrice}
                  </span>
                </div>
                <p className="text-yellow-500 text-xs flex items-center">
                  ⭐ {product.rating}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchComponent;
