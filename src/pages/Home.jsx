import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import products from "../data/productData";

function Home({
  onAddToCart,
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");
  const [searchTerm, setSearchTerm] = useState("");

  
  const heroProducts = useMemo(
    () =>
      products.filter((product) =>
        [1, 3, 7].includes(product.id)
      ),
    []
  );

  const [heroIndex, setHeroIndex] = useState(0);

  const currentHero =
    heroProducts[heroIndex] || heroProducts[0];

  

  const featuredProducts = useMemo(
    () =>
      products.filter((product) =>
        [2, 8, 9, 13, 14, 17].includes(product.id)
      ),
    []
  );

  const [featuredIndex, setFeaturedIndex] = useState(0);

 

  useEffect(() => {
    if (heroProducts.length <= 1) return;

    const timer = setInterval(() => {
      setHeroIndex((current) =>
        current === heroProducts.length - 1
          ? 0
          : current + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [heroProducts.length]);



  useEffect(() => {
    if (featuredProducts.length <= 1) return;

    const timer = setInterval(() => {
      setFeaturedIndex((current) =>
        current === featuredProducts.length - 1
          ? 0
          : current + 1
      );
    }, 3500);

    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  /* =========================================================
      CATEGORIES
  ========================================================= */

  const categories = [
    "All",
    "Headphones",
    "Earbuds",
    "Earphones",
    "Neckbands",
  ];

  /* =========================================================
      FILTER + SORT
  ========================================================= */

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All") {
      result = result.filter(
        (product) =>
          product.category === activeCategory
      );
    }

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();

      result = result.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(search) ||
          product.brand
            .toLowerCase()
            .includes(search) ||
          product.info
            .toLowerCase()
            .includes(search)
      );
    }

    if (sortBy === "Featured") {
      result.sort((a, b) => {
        const aFeatured = [
          2,
          8,
          9,
          13,
          14,
          17,
        ].includes(a.id);

        const bFeatured = [
          2,
          8,
          9,
          13,
          14,
          17,
        ].includes(b.id);

        return (
          Number(bFeatured) -
          Number(aFeatured)
        );
      });
    }

    if (sortBy === "Top Rated") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sortBy === "Price(Lowest First)") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortBy === "Price(Highest First)") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    return result;
  }, [
    activeCategory,
    searchTerm,
    sortBy,
  ]);

  const topProducts = filteredProducts.slice(
    0,
    11
  );
 

  const getDiscount = (product) => {
    if (!product.originalPrice) return 0;

    return Math.round(
      ((product.originalPrice -
        product.price) /
        product.originalPrice) *
        100
    );
  };

  const getImage = (product) => {
    if (product?.image) {
      return product.image;
    }

    if (product?.images?.length) {
      return product.images[0];
    }

    return "";
  };

 

  const goToPreviousHero = () => {
    setHeroIndex((current) =>
      current === 0
        ? heroProducts.length - 1
        : current - 1
    );
  };

  const goToNextHero = () => {
    setHeroIndex((current) =>
      current === heroProducts.length - 1
        ? 0
        : current + 1
    );
  };


  const goToPreviousFeatured = () => {
    setFeaturedIndex((current) =>
      current === 0
        ? featuredProducts.length - 1
        : current - 1
    );
  };

  const goToNextFeatured = () => {
    setFeaturedIndex((current) =>
      current === featuredProducts.length - 1
        ? 0
        : current + 1
    );
  };

  const visibleFeaturedProducts = [-2, -1, 0, 1, 2].map(
    (offset) => {
      const index =
        (featuredIndex +
          offset +
          featuredProducts.length) %
        featuredProducts.length;

      return {
        product: featuredProducts[index],
        offset,
      };
    }
  );

  return (
    <main className="bg-[#111111] text-white min-h-screen">


      <section className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] overflow-hidden bg-[#111111]">

        {/* Background Brand */}

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <span className="text-[90px] sm:text-[150px] lg:text-[220px] xl:text-[270px] font-black uppercase tracking-[-0.08em] text-[#171717] select-none">

            {currentHero?.brand ||
              "Tech-Shop"}

          </span>

        </div>


        {/* Hero Content */}

        <div className="relative z-10 max-w-7xl mx-auto min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] px-6 sm:px-10 lg:px-16 flex items-center">

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-10">

            {/* LEFT CONTENT */}

            <div className="order-2 lg:order-1 max-w-xl">

              <p className="text-sm sm:text-base text-gray-300 mb-3">

                {currentHero?.name}

              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-gray-200">

                {currentHero?.tagline ||
                  "Keep the noise out, or in. You choose."}

              </h1>


              {/* PRICE */}

              <div className="flex items-center gap-4 mt-7">

                <span className="text-xl sm:text-2xl font-semibold">

                  ₹
                  {currentHero?.price?.toLocaleString(
                    "en-IN"
                  )}

                </span>

                <span className="text-sm sm:text-base text-gray-500 line-through">

                  ₹
                  {currentHero?.originalPrice?.toLocaleString(
                    "en-IN"
                  )}

                </span>

              </div>


              {/* SHOP NOW */}

              <Link
                to={`/product/${currentHero?.id}`}
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-7 py-3 mt-7 text-sm font-semibold transition-colors"
              >
                Shop Now
              </Link>

            </div>


            {/* RIGHT IMAGE */}

            <div className="order-1 lg:order-2 flex items-center justify-center">

              <Link
                to={`/product/${currentHero?.id}`}
                className="block w-full"
              >

                <img
                  src={getImage(currentHero)}
                  alt={currentHero?.name}
                  className="w-[78%] max-w-[520px] lg:max-w-[620px] mx-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
                />

              </Link>

            </div>

          </div>

        </div>


        {/* LEFT HERO ARROW */}

        <button
          type="button"
          onClick={goToPreviousHero}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-700 text-gray-300 hover:bg-white hover:text-black transition hidden md:flex items-center justify-center"
          aria-label="Previous product"
        >
          ‹
        </button>


        {/* RIGHT HERO ARROW */}

        <button
          type="button"
          onClick={goToNextHero}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-700 text-gray-300 hover:bg-white hover:text-black transition hidden md:flex items-center justify-center"
          aria-label="Next product"
        >
          ›
        </button>

      </section>


   
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">

        <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-300">
          Featured Products
        </h2>


        <div className="relative mt-12">

          {/* LEFT ARROW */}

          <button
            type="button"
            onClick={goToPreviousFeatured}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-30
              w-9
              h-9
              rounded-full
              bg-[#202020]
              border
              border-[#444444]
              text-gray-300
              hover:bg-red-600
              hover:text-white
              transition
              flex
              items-center
              justify-center
            "
            aria-label="Previous featured product"
          >
            ‹
          </button>


          {/* FEATURED PRODUCTS */}

          <div className="flex items-end justify-center gap-2 sm:gap-5 lg:gap-10 overflow-hidden px-8 sm:px-14">

            {visibleFeaturedProducts.map(
              ({ product, offset }) => {

                if (!product) return null;

                const isCenter = offset === 0;

                const image =
                  getImage(product);

                return (
                  <Link
                    key={`${product.id}-${offset}`}
                    to={`/product/${product.id}`}
                    className={`
                      flex-shrink-0
                      text-center
                      group
                      transition-all
                      duration-500
                      ${
                        isCenter
                          ? "w-40 sm:w-52 lg:w-64"
                          : "w-20 sm:w-28 lg:w-36"
                      }
                    `}
                  >

                    {/* IMAGE */}

                    <div
                      className={`
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-500
                        ${
                          isCenter
                            ? "h-44 sm:h-56 lg:h-64"
                            : "h-24 sm:h-32 lg:h-40"
                        }
                      `}
                    >

                      <img
                        src={image}
                        alt={product.name}
                        className={`
                          object-contain
                          transition-all
                          duration-500
                          group-hover:scale-105
                          ${
                            isCenter
                              ? "max-h-full opacity-100"
                              : "max-h-[90%] opacity-70"
                          }
                        `}
                      />

                    </div>


                    {/* NAME */}

                    <p
                      className={`
                        mt-2
                        line-clamp-1
                        ${
                          isCenter
                            ? "text-xs sm:text-sm text-gray-300"
                            : "text-[9px] sm:text-xs text-gray-500"
                        }
                      `}
                    >
                      {product.name}
                    </p>


                    {/* PRICE */}

                    <div className="flex justify-center items-center gap-2 mt-2">

                      <span
                        className={`
                          font-semibold
                          ${
                            isCenter
                              ? "text-base sm:text-lg text-gray-200"
                              : "text-xs sm:text-sm text-gray-500"
                          }
                        `}
                      >
                        ₹
                        {product.price.toLocaleString(
                          "en-IN"
                        )}
                      </span>

                      {isCenter && (
                        <span className="text-[9px] sm:text-xs text-gray-600 line-through">

                          ₹
                          {product.originalPrice.toLocaleString(
                            "en-IN"
                          )}

                        </span>
                      )}

                    </div>

                  </Link>
                );
              }
            )}

          </div>


          {/* RIGHT ARROW */}

          <button
            type="button"
            onClick={goToNextFeatured}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-30
              w-9
              h-9
              rounded-full
              bg-[#202020]
              border
              border-[#444444]
              text-gray-300
              hover:bg-red-600
              hover:text-white
              transition
              flex
              items-center
              justify-center
            "
            aria-label="Next featured product"
          >
            ›
          </button>

        </div>

      </section>


      {/* =====================================================
          TOP PRODUCTS
      ===================================================== */}

      <section
        id="products"
        className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10 pb-24"
      >

        <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-300">
          Top Products
        </h2>


        {/* CATEGORY BUTTONS */}

        <div className="flex items-center justify-center gap-8 sm:gap-12 mt-8 overflow-x-auto pb-2 scrollbar-hide">

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              onClick={() =>
                setActiveCategory(category)
              }
              className={`
                flex-shrink-0
                text-xs
                sm:text-sm
                px-4
                py-2
                transition
                ${
                  activeCategory === category
                    ? "bg-red-600 text-white"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              {category}
            </button>

          ))}

        </div>


        {/* SEARCH + SORT */}

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 mb-6">

          <div className="relative w-full sm:max-w-sm">

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search products..."
              className="
                w-full
                bg-[#171717]
                border
                border-[#333333]
                text-white
                placeholder:text-gray-600
                px-4
                py-3
                text-sm
                outline-none
                focus:border-red-600
              "
            />

          </div>


          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value)
            }
            className="
              bg-[#171717]
              border
              border-[#333333]
              text-gray-300
              px-4
              py-3
              text-sm
              outline-none
              focus:border-red-600
            "
          >

            <option value="Latest">
              Latest
            </option>

            <option value="Featured">
              Featured
            </option>

            <option value="Top Rated">
              Top Rated
            </option>

            <option value="Price(Lowest First)">
              Price(Lowest First)
            </option>

            <option value="Price(Highest First)">
              Price(Highest First)
            </option>

          </select>

        </div>


        {/* PRODUCT GRID */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px] sm:gap-1">

          {topProducts.map((product) => {

            const discount =
              getDiscount(product);

            const image =
              getImage(product);

            return (
              <article
                key={product.id}
                className="
                  bg-[#151515]
                  border
                  border-[#2c2c2c]
                  group
                "
              >

                {/* PRODUCT IMAGE */}

                <div className="relative h-40 sm:h-48 lg:h-52 bg-[#171717] overflow-hidden">

                  {discount > 0 && (
                    <span
                      className="
                        absolute
                        top-2
                        left-2
                        z-10
                        text-[8px]
                        sm:text-[10px]
                        bg-red-600
                        text-white
                        px-2
                        py-1
                      "
                    >
                      {discount}% OFF
                    </span>
                  )}


                  <Link
                    to={`/product/${product.id}`}
                    className="
                      w-full
                      h-full
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <img
                      src={image}
                      alt={product.name}
                      className="
                        w-[78%]
                        h-[78%]
                        object-contain
                        group-hover:scale-105
                        transition-transform
                        duration-300
                      "
                    />

                  </Link>

                </div>


                {/* PRODUCT INFORMATION */}

                <div className="p-3 sm:p-4">

                  {/* RATING */}

                  <div className="flex items-center gap-0.5 text-red-600 text-[10px] mb-2">

                    {Array.from({
                      length: product.rating || 0,
                    }).map((_, index) => (
                      <span key={index}>
                        ★
                      </span>
                    ))}

                  </div>


                  {/* PRODUCT NAME */}

                  <Link
                    to={`/product/${product.id}`}
                  >

                    <h3 className="
                      text-xs
                      sm:text-sm
                      font-semibold
                      text-gray-200
                      line-clamp-1
                      hover:text-white
                    ">
                      {product.name}
                    </h3>

                  </Link>


                  {/* PRODUCT INFO */}

                  <p className="
                    text-[8px]
                    sm:text-[10px]
                    text-gray-500
                    mt-1
                    line-clamp-2
                    min-h-[24px]
                  ">
                    {product.info}
                  </p>


                  {/* PRICE */}

                  <div className="border-t border-[#333333] mt-3 pt-3">

                    <div className="flex items-center gap-2 flex-wrap">

                      <span className="
                        text-sm
                        sm:text-base
                        font-semibold
                        text-gray-200
                      ">
                        ₹
                        {product.price.toLocaleString(
                          "en-IN"
                        )}
                      </span>

                      <span className="
                        text-[9px]
                        sm:text-[10px]
                        text-gray-600
                        line-through
                      ">
                        ₹
                        {product.originalPrice.toLocaleString(
                          "en-IN"
                        )}
                      </span>

                    </div>


                    {/* ADD TO CART */}

                    <button
                      type="button"
                      onClick={() =>
                        onAddToCart?.(product)
                      }
                      className="
                        w-full
                        bg-red-600
                        hover:bg-red-700
                        text-white
                        text-[10px]
                        sm:text-xs
                        py-2.5
                        mt-3
                        transition
                      "
                    >
                      Add to cart
                    </button>

                  </div>

                </div>

              </article>
            );
          })}


          {/* BROWSE ALL PRODUCTS */}

          <Link
            to="/products"
            className="
              min-h-[320px]
              sm:min-h-[360px]
              bg-[#151515]
              border
              border-[#2c2c2c]
              flex
              items-center
              justify-center
              p-6
              group
            "
          >

            <div className="text-center">

              <p className="
                text-gray-300
                text-lg
                sm:text-xl
                font-light
              ">
                Browse All
              </p>

              <p className="
                text-gray-300
                text-lg
                sm:text-xl
                font-light
                flex
                items-center
                justify-center
                gap-2
              ">
                Products

                <span className="
                  text-red-600
                  group-hover:translate-x-1
                  transition-transform
                ">
                  →
                </span>

              </p>

            </div>

          </Link>

        </div>


        {/* NO PRODUCTS */}

        {topProducts.length === 0 && (

          <div className="text-center py-20">

            <p className="text-gray-500">
              No products found.
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");
                setSortBy("Latest");
              }}
              className="
                mt-4
                bg-red-600
                hover:bg-red-700
                text-white
                px-6
                py-2
                text-sm
              "
            >
              View All Products
            </button>

          </div>

        )}

      </section>
      <section className="border-t border-[#242424] bg-[#111111] py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-300">
      Our Advantages
    </h2>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mt-12">

      <div className="flex items-center gap-4">

        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-orange-500 flex-shrink-0"
        >
          <path d="M3 7h11v10H3z" />
          <path d="M14 10h4l3 3v4h-7z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </svg>

        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-gray-200">
            Express Delivery
          </h3>

          <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
            Ships in 24 Hours
          </p>
        </div>

      </div>

      <div className="flex items-center gap-4">

        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-orange-500 flex-shrink-0"
        >
          <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
          <path d="m9 12 2 2 4-5" />
        </svg>

        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-gray-200">
            Brand Warranty
          </h3>

          <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
            100% Original products
          </p>
        </div>

      </div>

      <div className="flex items-center gap-4">

        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-orange-500 flex-shrink-0"
        >
          <path d="M3 7h18l-2 11H5z" />
          <path d="M3 7l3-4h12l3 4" />
          <path d="M8 11h8" />
        </svg>

        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-gray-200">
            Exciting Deals
          </h3>

          <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
            On all prepaid orders
          </p>
        </div>

      </div>

      <div className="flex items-center gap-4">

        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-orange-500 flex-shrink-0"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 15h4" />
        </svg>

        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-gray-200">
            Secure Payments
          </h3>

          <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
            SSL / Secure certificate
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

      

    </main>
  );
}

export default Home;