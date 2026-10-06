import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/productData";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("Specifications");

  if (!product) {
    return (
      <main className="min-h-screen bg-[#111111] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Product Not Found</h1>
          <Link to="/" className="inline-block mt-5 bg-red-600 px-6 py-3 text-sm">Back to Home</Link>
        </div>
      </main>
    );
  }

  const images = product.images?.length ? product.images : [product.image];
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const relatedProducts = useMemo(() => {
    const sameCategory = products.filter((item) => item.category === product.category && item.id !== product.id);
    const others = products.filter((item) => item.category !== product.category && item.id !== product.id);
    return [product, ...sameCategory, ...others].slice(0, 4);
  }, [product]);

  const specifications = [
    ["Brand", product.brand],
    ["Model", product.name],
    ["Generic Name", product.category],
    ["Headphone Type", product.type],
    ["Connectivity", product.connectivity],
    ["Microphone", "Yes"],
  ];

  const reviews = [
    ["Aharva Kumar", "14 Aug 2022", 5, "Sound is awesome and as I expected, love it."],
    ["Ritika Sen", "15 July 2022", 5, "Very good and awesome product"],
    ["Bhavesh Joshi", "19 June 2022", 4, "Good product and amazing sound quality."],
  ];

  return (
    <main className="bg-[#111111] text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8">
          <div className="flex gap-4">
            <div className="w-16 sm:w-20 flex flex-col gap-4">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 sm:w-[70px] sm:h-[70px] border bg-[#151515] flex items-center justify-center ${selectedImage === index ? "border-gray-300" : "border-[#333333]"}`}
                >
                  <img src={image} alt={product.name} className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
            <div className="flex-1 min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
              <img src={images[selectedImage]} alt={product.name} className="w-full max-w-[560px] max-h-[530px] object-contain" />
            </div>
          </div>

          <div className="pt-2 lg:pt-5">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200">{product.name}</h1>
            <p className="text-sm text-gray-400 mt-2">{product.connectivity} {product.type} {product.category}</p>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-red-600 text-xs">
                {Array.from({ length: product.rating || 0 }).map((_, index) => <span key={index}>★</span>)}
              </div>
              <span className="text-xs text-gray-500">| {product.reviews || 0} Ratings</span>
            </div>

            <div className="border-t border-[#333333] mt-6 pt-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl sm:text-3xl font-bold text-gray-200">₹{product.price.toLocaleString("en-IN")}</span>
                <span className="text-base text-gray-600 line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
              </div>
              <p className="text-green-500 text-xs mt-2">You save: ₹{(product.originalPrice - product.price).toLocaleString("en-IN")} ({discount}%)</p>
              <p className="text-gray-600 text-xs mt-2">(Inclusive of all taxes)</p>
              <span className="inline-flex mt-4 bg-green-600 text-white text-xs px-3 py-2">✓ In Stock</span>
            </div>

            <div className="border-t border-[#333333] mt-6 pt-6">
              <h2 className="text-sm text-gray-300 mb-4">Offers and Discounts</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-[#444444] px-3 py-3 text-[10px] sm:text-xs text-gray-400">No Cost EMI on Credit Card</div>
                <div className="border border-[#444444] px-3 py-3 text-[10px] sm:text-xs text-gray-400">Pay Later &amp; Avail Cashback</div>
              </div>
            </div>

            <button type="button" onClick={() => onAddToCart?.(product)} className="w-full sm:w-44 bg-red-600 hover:bg-red-700 text-white text-sm py-3 mt-7">
              Add to cart
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-20">
        <div className="flex items-center justify-center gap-5 sm:gap-12">
          {["Specifications", "Overview", "Reviews"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm ${activeTab === tab ? "bg-red-600 text-white" : "text-gray-400 hover:text-white"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Specifications" && (
          <div className="max-w-5xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6">
            {specifications.map(([label, value]) => (
              <div key={label} className="grid grid-cols-2 border-b border-[#222222] pb-4">
                <span className="text-xs sm:text-sm text-gray-500">{label}</span>
                <span className="text-xs sm:text-sm text-gray-300">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Overview" && (
          <div className="max-w-6xl mx-auto py-12">
            <p className="text-sm sm:text-base font-semibold text-gray-200">
              The <span className="text-red-500">{product.name}</span> {product.info.toLowerCase()} provides with fabulous sound quality
            </p>
            <div className="mt-5 space-y-3 text-xs sm:text-sm text-gray-300">
              <p>• Sound Tuned to Perfection</p>
              <p>• Comfortable to Wear</p>
              <p>• Long Hours Playback Time</p>
            </div>
            <p className="mt-7 text-xs sm:text-sm leading-7 text-gray-400">
              Buy the <span className="bg-red-600 text-white px-1">{product.name}</span> which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these earphones giving you a truly awesome audio experience.
            </p>
          </div>
        )}

        {activeTab === "Reviews" && (
          <div className="max-w-4xl mx-auto py-12">
            {reviews.map(([name, date, rating, text]) => (
              <div key={name} className="flex items-start gap-4 py-6 border-b border-[#222222]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-200">{name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-red-600 text-xs">
                      {Array.from({ length: rating }).map((_, index) => <span key={index}>★</span>)}
                    </div>
                    <span className="text-gray-600 text-xs">|</span>
                    <span className="text-gray-500 text-xs">{date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-3">{text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-10 pt-20 pb-24">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-300">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] sm:gap-2 mt-12">
          {relatedProducts.map((item) => {
            const itemImage = item.image || item.images?.[0];
            const itemDiscount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : 0;

            return (
              <article key={item.id} className="bg-[#151515] border border-[#303030]">
                <div className="relative h-40 sm:h-48 bg-[#171717] overflow-hidden">
                  {itemDiscount > 0 && <span className="absolute top-2 left-2 bg-red-600 text-white text-[8px] px-2 py-1 z-10">{itemDiscount}% OFF</span>}
                  <Link to={`/product/${item.id}`} className="w-full h-full flex items-center justify-center">
                    <img src={itemImage} alt={item.name} className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300" />
                  </Link>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex text-red-600 text-[9px] mb-2">
                    {Array.from({ length: item.rating || 0 }).map((_, index) => <span key={index}>★</span>)}
                  </div>
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-300 truncate hover:text-white">{item.name}</h3>
                  </Link>
                  <p className="text-[9px] text-gray-500 mt-1 h-7">{item.info}</p>
                  <div className="border-t border-[#333333] mt-3 pt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-semibold text-gray-300">₹{item.price.toLocaleString("en-IN")}</span>
                      <span className="text-[9px] text-gray-600 line-through">₹{item.originalPrice.toLocaleString("en-IN")}</span>
                    </div>
                    <button type="button" onClick={() => onAddToCart?.(item)} className="w-full bg-red-600 hover:bg-red-700 text-white text-[10px] sm:text-xs py-2.5 mt-3">
                      Add to cart
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

export default ProductDetails;