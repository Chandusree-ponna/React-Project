import React, { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  const [cartItems, setCartItems] =
    useState([]);

  const [wishlistItems, setWishlistItems] =
    useState([]);

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => {

      const existingProduct =
        currentItems.find(
          (item) => item.id === product.id
        );

      if (existingProduct) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const handleIncreaseCart = (
    productId
  ) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const handleDecreaseCart = (
    productId
  ) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  const handleRemoveFromCart = (
    productId
  ) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  const handleAddToWishlist = (
    product
  ) => {
    setWishlistItems((currentItems) => {

      const alreadyExists =
        currentItems.some(
          (item) => item.id === product.id
        );

      if (alreadyExists) {
        return currentItems.filter(
          (item) => item.id !== product.id
        );
      }

      return [
        ...currentItems,
        product,
      ];
    });
  };

  const handleRemoveFromWishlist = (
    productId
  ) => {
    setWishlistItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  const cartCount = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-white">

      <Header cartCount={cartCount} />

      <div className="flex-1">

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <Home
                onAddToCart={
                  handleAddToCart
                }
              />
            }
          />

          {/* SEPARATE ALL PRODUCTS PAGE */}
          <Route
            path="/products"
            element={
              <Products
                onAddToCart={
                  handleAddToCart
                }
              />
            }
          />

          {/* PRODUCT DETAILS */}
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                wishlistItems={
                  wishlistItems
                }
                onAddToCart={
                  handleAddToCart
                }
                onAddToWishlist={
                  handleAddToWishlist
                }
              />
            }
          />

          {/* CART */}
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onRemove={
                  handleRemoveFromCart
                }
                onIncrease={
                  handleIncreaseCart
                }
                onDecrease={
                  handleDecreaseCart
                }
              />
            }
          />

          {/* WISHLIST */}
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlistItems={
                  wishlistItems
                }
                onRemove={
                  handleRemoveFromWishlist
                }
                onAddToCart={
                  handleAddToCart
                }
              />
            }
          />

        </Routes>

      </div>

      <Footer />

    </div>
  );
}

export default App;