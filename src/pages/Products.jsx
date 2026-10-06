
import React, { useMemo, useState } from "react";

import { Link, useSearchParams } from "react-router-dom";

import products from "../data/productData";

function Products({ onAddToCart }) {
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "";

  const [sortBy, setSortBy] = useState("Latest");

  const [selectedBrands, setSelectedBrands] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const brands = ["JBL", "BoAt", "Sony"];

  const categories = [
    "Headphones",
    "Earbuds",
    "Earphones",
    "Neckbands",
  ];

  const toggleBrand = (brand) => {
    setSelectedBrands((current) =>
      current.includes(brand)
        ? current.filter((item) => item !== brand)
        : [...current, brand]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(search) ||
          product.brand.toLowerCase().includes(search) ||
          product.info.toLowerCase().includes(search)
      );
    }

  if (selectedBrands.length > 0) {
  result = result.filter((product) =>
    selectedBrands.some(
      (brand) =>
        product.brand?.toLowerCase() === brand.toLowerCase()
    )
  );
}

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (sortBy === "Featured") {
      const featuredIds = [2, 8, 9, 13, 14, 17];

      result.sort(
        (a, b) =>
          Number(featuredIds.includes(b.id)) -
          Number(featuredIds.includes(a.id))
      );
    }

    if (sortBy === "Top Rated") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "Price(Lowest First)") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price(Highest First)") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [
    searchTerm,
    selectedBrands,
    selectedCategories,
    sortBy,
  ]);

  const getImage = (product) =>
    product.image || product.images?.[0] || "";

  const getDiscount = (product) => {
    if (!product.originalPrice) {
      return 0;
    }

    return Math.round(
      ((product.originalPrice - product.price) /
        product.originalPrice) *
        100
    );
  };

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <div className="flex w-full">

        <aside className="w-[190px] sm:w-[215px] lg:w-[245px] flex-shrink-0 border-r border-[#333333]">
          <div className="h-[calc(100vh-64px)] overflow-y-auto px-5 sm:px-7 py-8">

            <div>
              <h2 className="text-sm font-semibold text-gray-200">
                Sort By
              </h2>

              <div className="border-b border-[#3a3a3a] mt-3 pb-4">

                <button
                  type="button"
                  onClick={() => setSortBy("Latest")}
                  className={`block w-full text-left text-xs leading-6 ${
                    sortBy === "Latest"
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Latest
                </button>

                <button
                  type="button"
                  onClick={() => setSortBy("Featured")}
                  className={`block w-full text-left text-xs leading-6 ${
                    sortBy === "Featured"
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Featured
                </button>

                <button
                  type="button"
                  onClick={() => setSortBy("Top Rated")}
                  className={`block w-full text-left text-xs leading-6 ${
                    sortBy === "Top Rated"
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Top Rated
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSortBy("Price(Lowest First)")
                  }
                  className={`block w-full text-left text-xs leading-6 ${
                    sortBy === "Price(Lowest First)"
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Price(Lowest First)
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSortBy("Price(Highest First)")
                  }
                  className={`block w-full text-left text-xs leading-6 ${
                    sortBy === "Price(Highest First)"
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Price(Highest First)
                </button>

              </div>
            </div>

            <div className="mt-6">

              <h2 className="text-sm font-semibold text-gray-200">
                Filter By
              </h2>

              <div className="border-b border-[#3a3a3a] mt-3 pb-5">

                <h3 className="text-xs font-semibold text-gray-300">
                  Brands
                </h3>

                <div className="mt-3 space-y-2">

                  {brands.map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="w-3 h-3 accent-red-600"
                      />

                      <span>{brand}</span>
                    </label>
                  ))}

                </div>
              </div>

              <div className="mt-5">

                <h3 className="text-xs font-semibold text-gray-300">
                  Category
                </h3>

                <div className="mt-3 space-y-2">

                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() =>
                          toggleCategory(category)
                        }
                        className="w-3 h-3 accent-red-600"
                      />

                      <span>{category}</span>
                    </label>
                  ))}

                </div>
              </div>

            </div>

          </div>
        </aside>

        <section className="flex-1 min-w-0">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {filteredProducts.map((product) => {
              const discount = getDiscount(product);

              return (
                <article
                  key={product.id}
                  className="bg-[#151515] border-r border-b border-[#3a3a3a]"
                >

                  <div className="relative h-[165px] sm:h-[180px] lg:h-[190px] bg-[#171717] overflow-hidden">

                    {discount > 0 && (
                      <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[8px] px-2 py-1">
                        {discount}% OFF
                      </span>
                    )}

                    <Link
                      to={`/product/${product.id}`}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={getImage(product)}
                        alt={product.name}
                        className="w-[55%] h-[55%] object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                  </div>

                  <div className="p-3">

                    <div className="flex text-red-500 text-[9px] mb-2">
                      {Array.from({
                        length: product.rating || 0,
                      }).map((_, index) => (
                        <span key={index}>★</span>
                      ))}
                    </div>

                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xs font-semibold text-gray-200 truncate hover:text-white">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-[8px] text-gray-400 mt-1 truncate">
                      {product.info}
                    </p>

                    <div className="border-t border-[#3a3a3a] mt-3 pt-3">

                      <div className="flex items-center gap-2">

                        <span className="text-sm font-semibold text-gray-200">
                          ₹
                          {product.price.toLocaleString(
                            "en-IN"
                          )}
                        </span>

                        <span className="text-[9px] text-gray-500 line-through">
                          ₹
                          {product.originalPrice.toLocaleString(
                            "en-IN"
                          )}
                        </span>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          onAddToCart?.(product)
                        }
                        className="w-full bg-red-600 hover:bg-red-700 text-white text-[10px] py-2 mt-3"
                      >
                        Add to cart
                      </button>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

          {filteredProducts.length === 0 && (
            <div className="h-[500px] flex items-center justify-center">
              <p className="text-sm text-gray-500">
                No products found.
              </p>
            </div>
          )}

        </section>

      </div>
    </main>
  );
}

export default Products;
