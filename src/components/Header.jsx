import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import products from "../data/productData";

function Header({ cartCount = 0 }) {
  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [profileOpen, setProfileOpen] =
    useState(false);

  const searchRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  const searchResults = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) return [];

    return products
      .filter(
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
      )
      .slice(0, 8);
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();

    const value = searchTerm.trim();

    if (!value) {
      navigate("/products");
      return;
    }

    navigate(
      `/products?search=${encodeURIComponent(value)}`
    );

    setSearchOpen(false);
  };

  const openProduct = (id) => {
    navigate(`/product/${id}`);
    setSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#111111]">

        <div className="h-16 sm:h-[72px] max-w-7xl mx-auto px-5 sm:px-7 lg:px-10 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-gray-200"
          >
            Tech-Shop
          </Link>

          {/* ICONS */}
          <div className="flex items-center gap-5 sm:gap-7">

            {/* SEARCH */}
            <button
              type="button"
              onClick={() => {
                setSearchOpen((current) => !current);
                setProfileOpen(false);
              }}
              className="text-gray-300 hover:text-white"
              aria-label="Search"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />
                <path d="m20 20-4-4" />
              </svg>
            </button>

            {/* CART */}
            <Link
              to="/cart"
              className="relative text-gray-300 hover:text-white"
              aria-label="Cart"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6h15l-1.5 9h-12z" />
                <path d="M6 6 5 3H2" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 min-w-4 h-4 px-1 rounded-full bg-red-600 text-white text-[9px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* PROFILE */}
            <div className="relative">

              <button
                type="button"
                onClick={() => {
                  setProfileOpen(
                    (current) => !current
                  );
                  setSearchOpen(false);
                }}
                className="text-gray-300 hover:text-white"
                aria-label="Profile"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                  />
                  <path d="M4 21c.8-4 3.4-6 8-6s7.2 2 8 6" />
                </svg>
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-9 w-52 bg-[#151515] border border-[#363636] shadow-2xl">

                  <div className="px-4 py-4 border-b border-[#303030]">

                    <p className="text-sm font-semibold text-gray-200">
                      Welcome to Tech-Shop
                    </p>

                    <p className="text-[10px] text-gray-500 mt-1">
                      Login or create an account
                    </p>

                  </div>

                  <Link
                    to="/login"
                    className="block px-4 py-3 text-xs text-gray-400 hover:bg-[#1c1c1c] hover:text-white"
                  >
                    Login
                  </Link>

                  <Link
                    to="/registration"
                    className="block px-4 py-3 text-xs text-gray-400 hover:bg-[#1c1c1c] hover:text-white"
                  >
                    Signup
                  </Link>

                </div>
              )}

            </div>

          </div>

        </div>

        {/* SEARCH AREA */}
        {searchOpen && (
          <div
            ref={searchRef}
            className="absolute top-full left-0 right-0 bg-[#111111] border-t border-[#222222] px-4 sm:px-8 pb-5"
          >

            <div className="max-w-3xl mx-auto pt-4">

              <form onSubmit={handleSearch}>

                <input
                  autoFocus
                  type="text"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(
                      event.target.value
                    )
                  }
                  placeholder="Search for products..."
                  className="w-full bg-[#151515] border border-gray-500 text-white px-4 py-3 text-sm outline-none focus:border-red-500"
                />

              </form>

              {searchTerm.trim() && (
                <div className="mt-2 bg-[#151515] border border-[#444444] max-h-80 overflow-y-auto">

                  {searchResults.length > 0 ? (
                    searchResults.map(
                      (product) => (
                        <button
                          key={product.id}
                          type="button"
                          onClick={() =>
                            openProduct(
                              product.id
                            )
                          }
                          className="w-full text-left px-4 py-3 text-xs sm:text-sm text-gray-200 hover:bg-[#202020] border-b border-[#292929] last:border-b-0"
                        >
                          {product.name}
                        </button>
                      )
                    )
                  ) : (
                    <div className="px-4 py-4 text-xs text-gray-500">
                      No products found.
                    </div>
                  )}

                </div>
              )}

            </div>

          </div>
        )}

      </header>
    </>
  );
}

export default Header;