import React from "react";
import { Link } from "react-router-dom";

function Cart({
  cartItems = [],
  onRemove,
  onIncrease,
  onDecrease,
}) {
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalOriginalPrice = cartItems.reduce(
    (total, item) =>
      total +
      (item.originalPrice || item.price) *
        item.quantity,
    0
  );

  const totalDiscount =
    totalOriginalPrice - totalPrice;

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#111111] text-white flex items-center justify-center px-6">
        <div className="text-center">

          <div className="text-6xl text-gray-700 mb-5">
            🛒
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold text-[#aeb6c9]">
            Your Cart is Empty
          </h1>

          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Add some products to your cart.
          </p>

          <Link
            to="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm px-7 py-3 mt-6"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#111111] text-white">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#aeb6c9]">
          Shopping Cart
        </h1>

        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          {cartItems.length}{" "}
          {cartItems.length === 1
            ? "product"
            : "products"}{" "}
          in your cart
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 mt-10">

          {/* CART ITEMS */}
          <div className="space-y-4">

            {cartItems.map((item) => {
              const image =
                item.image ||
                item.images?.[0] ||
                "";

              return (
                <article
                  key={item.id}
                  className="bg-[#151515] border border-[#303030] p-4 sm:p-5"
                >

                  <div className="flex gap-4 sm:gap-6">

                    {/* IMAGE */}
                    <Link
                      to={`/product/${item.id}`}
                      className="w-24 h-24 sm:w-32 sm:h-32 bg-[#111111] flex-shrink-0 flex items-center justify-center"
                    >
                      <img
                        src={image}
                        alt={item.name}
                        className="w-full h-full object-contain p-3"
                      />
                    </Link>

                    {/* DETAILS */}
                    <div className="flex-1 min-w-0">

                      <div className="flex justify-between gap-3">

                        <div>
                          <p className="text-[9px] sm:text-[10px] text-gray-500">
                            {item.brand}
                          </p>

                          <Link
                            to={`/product/${item.id}`}
                          >
                            <h2 className="text-sm sm:text-base font-semibold text-[#aeb6c9] mt-1 hover:text-white">
                              {item.name}
                            </h2>
                          </Link>

                          <p className="text-[9px] sm:text-xs text-gray-500 mt-2 line-clamp-2">
                            {item.info}
                          </p>
                        </div>

                        {/* REMOVE */}
                        <button
                          type="button"
                          onClick={() =>
                            onRemove?.(item.id)
                          }
                          className="text-gray-500 hover:text-red-500 text-sm"
                          aria-label="Remove product"
                        >
                          ×
                        </button>

                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 mt-5">

                        {/* QUANTITY */}
                        <div className="flex items-center border border-[#333333]">

                          <button
                            type="button"
                            onClick={() =>
                              onDecrease?.(item.id)
                            }
                            className="w-8 h-8 text-gray-400 hover:text-white hover:bg-[#222222]"
                          >
                            −
                          </button>

                          <span className="w-9 text-center text-sm text-gray-300">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              onIncrease?.(item.id)
                            }
                            className="w-8 h-8 text-gray-400 hover:text-white hover:bg-[#222222]"
                          >
                            +
                          </button>

                        </div>

                        {/* PRICE */}
                        <div className="text-right">

                          <span className="text-base sm:text-lg font-semibold text-[#aeb6c9]">
                            ₹
                            {(
                              item.price *
                              item.quantity
                            ).toLocaleString("en-IN")}
                          </span>

                          {item.originalPrice && (
                            <span className="block text-[9px] text-gray-600 line-through">
                              ₹
                              {(
                                item.originalPrice *
                                item.quantity
                              ).toLocaleString("en-IN")}
                            </span>
                          )}

                        </div>

                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

          </div>

          {/* ORDER SUMMARY */}
          <aside className="bg-[#151515] border border-[#303030] p-5 sm:p-6 h-fit">

            <h2 className="text-lg font-semibold text-[#aeb6c9]">
              Order Summary
            </h2>

            <div className="border-t border-[#333333] mt-5 pt-5 space-y-4">

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Original Price
                </span>

                <span className="text-gray-300">
                  ₹
                  {totalOriginalPrice.toLocaleString(
                    "en-IN"
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Discount
                </span>

                <span className="text-green-500">
                  -₹
                  {totalDiscount.toLocaleString(
                    "en-IN"
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Delivery
                </span>

                <span className="text-green-500">
                  Free
                </span>
              </div>

            </div>

            <div className="border-t border-[#333333] mt-5 pt-5 flex justify-between">

              <span className="text-base font-semibold text-gray-300">
                Total
              </span>

              <span className="text-xl font-bold text-white">
                ₹
                {totalPrice.toLocaleString("en-IN")}
              </span>

            </div>

            <button
              type="button"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 mt-6 text-sm"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/"
              className="block text-center text-xs text-gray-500 hover:text-white mt-4"
            >
              Continue Shopping
            </Link>

          </aside>

        </div>
      </section>
    </main>
  );
}

export default Cart;