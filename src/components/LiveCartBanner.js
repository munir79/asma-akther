"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaTimes, FaWhatsapp, FaCircle } from "react-icons/fa";

export default function LiveCartBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white text-xs sm:text-sm font-medium py-2 px-4 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className="font-bold uppercase tracking-wider text-[11px] bg-black/30 px-2 py-0.5 rounded-full border border-white/20">
            Open Today
          </span>
          <span className="hidden sm:inline text-white/95">
            Agargaon New Road, Dhaka • 4:00 PM - 11:30 PM (Fresh Claypot Batch Ready)
          </span>
        </div>

        {/* Action badges */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/8801712345678?text=Hello%20Asma%20Apu!%20I%20would%20like%20to%20order%20from%20your%20Agargaon%20kitchen."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-black/40 hover:bg-black/60 px-3 py-1 rounded-full text-white transition-colors"
          >
            <FaWhatsapp className="text-emerald-400 text-sm" />
            <span className="hidden md:inline">Hotline:</span>
            <span className="font-bold">+880 1712-345678</span>
          </a>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close notification banner"
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-black/20 transition-colors"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
}
