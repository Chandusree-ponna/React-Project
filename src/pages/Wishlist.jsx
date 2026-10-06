import React from "react";
import { Link } from "react-router-dom";

function Wishlist({
  wishlistItems = [],
  onRemove,
  onAddToCart,
}) {
  if (wishlistItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#111111] text-white flex items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-2xl sm:text-3xl font-semibold text-[#aeb6c9]">
            Your Wishlist is Empty
          </h1>

          <p className="text-xs sm:text-sm text-gray-500 mt-3">
            You haven't added any products to your wishlist yet.
          </p>

          <Link
            to="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm px-7 py-3 mt-7"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#111111] text-white">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">

        <h1 className="text-2xl sm:text-3xl font-semibold text-[#aeb6c9]">
          Wishlist
        </h1>

        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          {wishlistItems.length}{" "}
          {wishlistItems.length === 1
            ? "product"
            : "products"}{" "}
          saved
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px] sm:gap-2 mt-10">

          {wishlistItems.map((product) => {

            const image =
              product.image ||
              product.images?.[0] ||
              "";

            const discount = product.originalPrice
              ? Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )
              : 0;

            return (
              <article
                key={product.id}
                className="bg-[#151515] border border-[#303030]"
              >

                <div className="relative h-40 sm:h-48 lg:h-52 bg-[#171717] overflow-hidden">

                  {discount > 0 && (
                    <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[8px] sm:text-[10px] px-2 py-1">
                      {discount}% OFF
                    </span>
                  )}

                  <Link
                    to={`/product/${product.id}`}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                </div>

                <div className="p-3 sm:p-4">

                  <div className="flex text-red-600 text-[9px] mb-2">
                    {Array.from({
                      length: product.rating || 0,
                    }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>

                  <Link to={`/product/${product.id}`}>
                    <h2 className="text-xs sm:text-sm font-semibold text-[#aeb6c9] truncate hover:text-white">
                      {product.name}
                    </h2>
                  </Link>

                  <p className="text-[8px] sm:text-[9px] text-gray-500 mt-1 h-7">
                    {product.info}
                  </p>

                  <div className="border-t border-[#333333] mt-3 pt-3">

                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-semibold text-[#aeb6c9]">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>

                      {product.originalPrice && (
                        <span className="text-[9px] text-gray-600 line-through">
                          ₹
                          {product.originalPrice.toLocaleString(
                            "en-IN"
                          )}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onAddToCart?.(product)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-[10px] sm:text-xs py-2.5 mt-3"
                    >
                      Add to cart
                    </button>

                    <button
                      type="button"
                      onClick={() => onRemove?.(product.id)}
                      className="w-full border border-[#444444] hover:border-red-600 hover:text-red-500 text-gray-400 text-[10px] sm:text-xs py-2.5 mt-2"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              </article>
            );
          })}

        </div>
      </section>
    </main>
  );
}

export default Wishlist;