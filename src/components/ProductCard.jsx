import React from "react";
import { Link } from "react-router-dom";

function ProductCard({
  product,
  onAddToCart,
}) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) /
          product.originalPrice) *
          100
      )
    : 0;

  const image =
    product.image ||
    product.images?.[0] ||
    "";

  return (
    <article className="bg-[#151515] border border-[#303030]">

      {/* PRODUCT IMAGE */}
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

      {/* PRODUCT DETAILS */}
      <div className="p-3 sm:p-4">

        {/* RATING */}
        <div className="flex items-center text-red-600 text-[9px] mb-2">
          {Array.from({
            length: product.rating || 0,
          }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>

        {/* NAME */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs sm:text-sm font-semibold text-[#aeb6c9] truncate hover:text-white">
            {product.name}
          </h3>
        </Link>

        {/* DESCRIPTION */}
        <p className="text-[8px] sm:text-[9px] text-gray-500 mt-1 line-clamp-2 min-h-[25px]">
          {product.info}
        </p>

        {/* PRICE */}
        <div className="border-t border-[#333333] mt-3 pt-3">

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm sm:text-base font-semibold text-[#aeb6c9]">
              ₹
              {product.price.toLocaleString("en-IN")}
            </span>

            <span className="text-[9px] text-gray-600 line-through">
              ₹
              {product.originalPrice.toLocaleString(
                "en-IN"
              )}
            </span>
          </div>

          {/* ADD TO CART */}
          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="w-full bg-red-600 hover:bg-red-700 text-white text-[10px] sm:text-xs py-2.5 mt-3 transition"
          >
            Add to cart
          </button>

        </div>
      </div>
    </article>
  );
}

export default ProductCard;