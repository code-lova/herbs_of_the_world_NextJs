"use client";
import React, { useState } from "react";
import { products } from "@/constants";
import Image from "next/image";

const HerbsForHorses = () => {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("alphabetical");

  const filteredProducts = products
    .filter((product) => {
      const productPrice = parseFloat(product.price);
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);
      return (!min || productPrice >= min) && (!max || productPrice <= max);
    })
    .sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      if (sortOption === "alphabetical") return a.title.localeCompare(b.title);
      if (sortOption === "descending") return priceB - priceA;
      if (sortOption === "ascending") return priceA - priceB;
      return 0;
    });

  const handleViewProduct = () => {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-4">
      <div className="w-full h-[400px] bg-herobg-gray col-span-1 rounded-md py-4 px-4">
        <h1 className="text-lg font-bold mb-4">Filter By:</h1>
        {/* Price Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price Range
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full p-2 border rounded-md"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full p-2 border rounded-md"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Sort Options */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Sort By
          </label>
          <select
            className="w-full p-2 border rounded-md"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="alphabetical">Alphabetical (A-Z)</option>
            <option value="descending">Price (High to Low)</option>
            <option value="ascending">Price (Low to High)</option>
          </select>
        </div>
      </div>

      {/* Product Display Section */}
      <div className="w-full bg-herobg-gray col-span-3 rounded-md py-4 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow p-4 flex flex-col"
          >
            {/* Image Section */}
            <Image
              className="rounded-t-lg object-cover w-[200px] h-[200px] mx-auto"
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
            />

            {/* Content Section */}
            <div className="flex flex-col justify-between h-full px-4 py-2 text-center">
              {/* Title */}
              <h5 className="text-md font-semibold text-gray-900 mb-2 h-12 overflow-hidden text-ellipsis">
                {item.title}
              </h5>

              {/* Ratings */}
              <div
                className="flex items-center justify-center mt-2 mb-4"
                style={{ minHeight: "30px" }}
              >
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < item.ratings ? "text-yellow-500" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100">
                  {item.ratings.toFixed(1)}
                </span>
              </div>

              {/* Price and Button */}
              <div className="flex items-center justify-between w-full mt-auto">
                <span className="text-xl font-bold text-gray-900">
                  ${item.price}
                </span>
                <button
                  onClick={() => handleViewProduct()}
                  className="bg-black text-white font-bold hover:bg-green-800 focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 text-center"
                >
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HerbsForHorses;
