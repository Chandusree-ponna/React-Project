import React from "react";

function FilterBar({
  activeCategory = "All",
  onCategoryChange,
  sortBy = "Latest",
  onSortChange,
}) {
  const categories = [
    "All",
    "Headphones",
    "Earbuds",
    "Earphones",
    "Neckbands",
  ];

  const sortOptions = [
    "Latest",
    "Featured",
    "Top Rated",
    "Price(Lowest First)",
    "Price(Highest First)",
  ];

  return (
    <div className="w-full">

      <div className="flex items-center justify-center gap-5 sm:gap-8 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() =>
              onCategoryChange?.(category)
            }
            className={`flex-shrink-0 text-xs sm:text-sm px-4 py-2 transition ${
              activeCategory === category
                ? "bg-red-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex justify-end mt-5">
        <select
          value={sortBy}
          onChange={(event) =>
            onSortChange?.(event.target.value)
          }
          className="bg-[#171717] border border-[#333333] text-gray-400 text-xs sm:text-sm px-4 py-2.5 outline-none focus:border-red-600 cursor-pointer"
        >
          {sortOptions.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}

export default FilterBar;