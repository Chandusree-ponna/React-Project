import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#aeb6c9]">
              Tech-Shop
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 leading-5 mt-4 max-w-xs">
              Subscribe to our Email alerts to receive
              early discount offers, and new products
              info.
            </p>

            <div className="mt-5">

              <input
                type="email"
                placeholder="Email Address*"
                className="w-full max-w-xs bg-transparent border border-[#555555] text-gray-300 placeholder:text-gray-500 px-3 py-2.5 text-xs sm:text-sm outline-none focus:border-gray-300"
              />

              <button
                type="button"
                className="block bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm px-6 py-2.5 mt-3 transition"
              >
                Subscribe
              </button>

            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold text-[#aeb6c9]">
              Help
            </h3>

            <div className="flex flex-col gap-4 mt-7">

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                FAQs
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Track Order
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Cancel Order
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Return Order
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Warranty Info
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold text-[#aeb6c9]">
              Policies
            </h3>

            <div className="flex flex-col gap-4 mt-7">

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Return Policy
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Security
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Sitemap
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Terms &amp; Conditions
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold text-[#aeb6c9]">
              Company
            </h3>

            <div className="flex flex-col gap-4 mt-7">

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                About Us
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Contact Us
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Service Centres
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Careers
              </a>

              <a
                href="#"
                className="text-xs sm:text-sm text-gray-500 hover:text-white"
              >
                Affiliates
              </a>

            </div>
          </div>

        </div>

      </div>

      <div className="border-t border-[#222222]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-end">

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-9 h-9 bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center"
            aria-label="Back to top"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;