"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories, foodMenuItems } from "@/data/foodMenu";
import { FaFire, FaSearch, FaShoppingBag, FaStar, FaPepperHot, FaCheck } from "react-icons/fa";

export default function MenuSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedItemId, setAddedItemId] = useState(null);

  const filteredItems = useMemo(() => {
    return foodMenuItems.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAddItem = (item) => {
    onAddToCart({
      id: `${item.id}-${Date.now()}`,
      originalId: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      spiceLevel: item.spiceLevels ? item.spiceLevels[0] : "Standard",
      quantity: 1
    });

    setAddedItemId(item.id);
    setTimeout(() => {
      setAddedItemId(null);
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 bg-[#0c0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <FaFire className="text-orange-500" />
              Sizzling Street Kitchen
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Explore Our <span className="text-gradient-flame">Street Cart Menu</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1 max-w-xl">
              Freshly prepared street food delicacies crafted with authentic ingredients, spices, and homemade passion.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search duck, roll, juice..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#151922] border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white border-orange-500 shadow-lg shadow-orange-600/25 scale-[1.02]"
                  : "bg-[#151922] text-gray-400 border-gray-800 hover:text-white hover:border-gray-700"
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#12151e] rounded-3xl border border-gray-800">
            <p className="text-gray-400 text-base">No delicious dishes found matching &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (idx % 6) * 0.05 }}
                className="bg-[#141720] rounded-3xl border border-gray-800/90 overflow-hidden hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141720] via-transparent to-transparent opacity-80" />

                    {/* Bestseller Badge */}
                    {item.isBestseller && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[11px] font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <FaStar className="text-[10px]" />
                        Bestseller
                      </div>
                    )}

                    {/* Signature Badge */}
                    {item.isSignature && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <FaFire className="text-[10px]" />
                        Signature Handi
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags / Spice Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.spiceLevels && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-red-300 bg-red-500/15 border border-red-500/30 px-2 py-0.5 rounded-full">
                          <FaPepperHot className="text-[9px]" />
                          {item.spiceLevels[0]}
                        </span>
                      )}
                      {item.tags &&
                        item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-gray-400 bg-gray-800/80 px-2 py-0.5 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & Add to Cart */}
                <div className="p-5 sm:p-6 pt-0 border-t border-gray-800/60 mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-medium">Price</span>
                    <span className="text-lg sm:text-xl font-black text-amber-400">
                      ৳ {item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddItem(item)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      addedItemId === item.id
                        ? "bg-emerald-600 text-white"
                        : "bg-orange-600/20 hover:bg-orange-600 text-orange-400 hover:text-white border border-orange-500/40"
                    }`}
                  >
                    {addedItemId === item.id ? (
                      <>
                        <FaCheck />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <FaShoppingBag />
                        <span>Add to Order</span>
                      </>
                    )}
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
