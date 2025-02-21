import React from "react";

const categories = [
  {
    id: 1,
    name: "Men",
    image: "/images/c1.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Women",
    image: "/images/c2.png",
  },
  {
    id: 3,
    name: "Unisex",
    image: "/images/c3.png",
  },
];

const ChooseCategory = () => {
  return (
    <section className="w-[85%] mx-auto text-center py-16">
      {/* Header Section */}
      <h2 className="text-4xl font-bold text-[#103F51] "><span className="border-b">Chose Your Category</span></h2>
      <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-md">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type.
      </p>

      {/* Category Grid */}
      <div className="flex justify-center items-center gap-10 mt-10 flex-wrap">
        {categories.map((category) => (
          <div key={category.id} className="text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
           
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseCategory;
