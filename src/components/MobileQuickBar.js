"use client";

import React from "react";
import { FaUtensils, FaCalendarAlt, FaShoppingBag, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function MobileQuickBar({ cartCount = 0, onOpenCart }) {
  return (
    <aside aria-label="Mobile quick actions" className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0d0f15]/95 backdrop-blur-lg border-t border-gray-800 px-3 py-2 text-white">
      <div className="grid grid-cols-4 gap-1 text-center">

        {/* Menu */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-1 text-gray-400 hover:text-orange-400 text-[10px] font-semibold"
        >
          <FaUtensils className="text-base mb-1" />
          <span>Menu</span>
        </a>

        {/* Catering */}
        <a
          href="#catering"
          className="flex flex-col items-center justify-center py-1 text-gray-400 hover:text-amber-400 text-[10px] font-semibold"
        >
          <FaCalendarAlt className="text-base mb-1 text-amber-500" />
          <span>Party Order</span>
        </a>

        {/* Cart */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center py-1 text-gray-400 hover:text-white text-[10px] font-semibold"
        >
          <div className="relative">
            <FaShoppingBag className="text-base mb-1 text-orange-500" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span>Basket</span>
        </button>

        {/* Call */}
        <a
          href="tel:+88017000"
          className="flex flex-col items-center justify-center py-1 text-gray-400 hover:text-emerald-400 text-[10px] font-semibold"
        >
          <FaPhoneAlt className="text-base mb-1 text-emerald-400" />
          <span>Call Kitchen</span>
        </a>

      </div>
    </aside>
  );
}
