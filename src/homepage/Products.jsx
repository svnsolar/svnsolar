import React from "react";
import pro1 from '../assets/products/pro1.jpg'
import pro2 from '../assets/products/pro2.jpg'
import pro3 from '../assets/products/pro3.jpg'
import pro4 from '../assets/products/pro4.jpg'
import pro5 from '../assets/products/pro5.jpg'
import pro6 from '../assets/products/pro6.jpg'
import pro7 from '../assets/products/pro7.jpg'

const products = [
  {
    name: "Mono PERC Solar Panel",
    description: "High-efficiency panel ideal for residential & commercial roofs.",
    image: pro1,
    price: "$220",
  },
  {
    name: "Bifacial Solar Panel",
    description: "Generates energy from both sides, maximizing sunlight capture.",
    image:pro2,
    price: "$280",
  },
  {
    name: "Flexible Thin-Film Panel",
    description: "Lightweight and bendable, perfect for mobile setups.",
    image: pro3,
    price: "$180",
  },
  {
    name: "Off-Grid Solar Kit",
    description: "Complete setup for cabins, RVs, and rural installations.",
    image: pro4,
    price: "$650",
  },
];

const Products = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-green-600 font-semibold uppercase">Our Products</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
          Reliable Solar Products for Every Need
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Explore our best-selling solar panels and kits, trusted for durability and efficiency.
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-green-700 font-semibold mb-4">{product.price}</p>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
