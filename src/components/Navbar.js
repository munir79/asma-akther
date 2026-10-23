"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFire,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaUtensils,
  FaCalendarCheck,
  FaImages,
  FaMapMarkerAlt,
  FaYoutube,
  FaFacebookF
} from "react-icons/fa";
import { creatorSocialStats } from "@/data/creatorReels";

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Menu", href: "#menu", icon: FaUtensils },
    { name: "Hāser Hāndi", href: "#signature-handi", icon: FaFire },
    { name: "Party Catering", href: "#catering", icon: FaCalendarCheck },
    { name: "Gallery & Reviews", href: "#gallery", icon: FaImages },
    { name: "Find Location", href: "#location", icon: FaMapMarkerAlt },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0d0f15]/95 backdrop-blur-md border-b border-gray-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2">
          
          {/* Brand Logo - Fully Responsive & Prevents Text Break */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform shrink-0">
              <FaFire className="text-white text-base sm:text-xl animate-pulse" />
            </div>
            
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-xl font-black tracking-tight text-white group-hover:text-orange-400 transition-colors whitespace-nowrap">
                  ASMA AKTER
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-amber-400 bg-amber-500/15 border border-amber-500/35 px-1.5 sm:px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                  উদ্যোক্তা
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-normal sm:tracking-wide truncate max-w-[130px] xs:max-w-[180px] sm:max-w-none">
                Restaurant &amp; Kitchen • Agargaon New Road
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-orange-400 text-sm font-semibold transition-colors flex items-center gap-1.5 hover:-translate-y-0.5 transform duration-150"
              >
                <link.icon className="text-orange-500/70 text-xs" />
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Actions: Socials, Catering CTA & Cart */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Quick Social Badges (Desktop) */}
            <div className="hidden xl:flex items-center gap-1.5 border-r border-gray-800 pr-3 mr-1">
              <a
                href={creatorSocialStats.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="Asma Akter Entrepreneur YouTube"
                className="w-8 h-8 rounded-lg bg-[#181c28] hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors text-xs border border-gray-800"
              >
                <FaYoutube />
              </a>
              <a
                href={creatorSocialStats.socialLinks.facebook1}
                target="_blank"
                rel="noopener noreferrer"
                title="Asma Akter Official Facebook Page"
                className="w-8 h-8 rounded-lg bg-[#181c28] hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors text-xs border border-gray-800"
              >
                <FaFacebookF />
              </a>
            </div>

            {/* Catering Order CTA Button (Desktop & Tablet) */}
            <a
              href="#catering"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <FaCalendarCheck className="text-xs" />
              <span>Book Catering</span>
            </a>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="Open Cart"
              className="relative flex items-center gap-1.5 sm:gap-2 bg-[#1a1d26] hover:bg-[#232836] border border-gray-700/80 text-white px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full transition-all group cursor-pointer"
            >
              <FaShoppingBag className="text-orange-400 text-base sm:text-lg group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline text-xs font-bold text-gray-200">Cart</span>
              {cartCount > 0 && (
                <span className="flex items-center justify-center min-w-[18px] sm:min-w-[20px] h-4.5 sm:h-5 px-1 sm:px-1.5 text-[10px] sm:text-[11px] font-extrabold text-white bg-gradient-to-r from-orange-600 to-red-600 rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle (Left-to-Right Drawer Trigger) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Drawer"
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-[#1a1d26] hover:bg-[#232836] text-gray-300 hover:text-white border border-gray-700/80 transition-colors cursor-pointer"
            >
              <FaBars className="text-lg sm:text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer: Opens from Left to Right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Slide-over Drawer Panel */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 bottom-0 left-0 w-[85%] max-w-[340px] bg-[#0c0f16] border-r border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.9)] z-50 flex flex-col lg:hidden overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="p-4 sm:p-5 border-b border-gray-800 flex items-center justify-between bg-[#11141d]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-lg font-bold shadow-md shrink-0">
                    <FaFire />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-black text-white text-base">ASMA AKTER</span>
                      <span className="text-[9px] font-bold text-amber-400 bg-amber-500/20 border border-amber-500/40 px-1.5 py-0.5 rounded">
                        উদ্যোক্তা
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400">Agargaon New Road, Dhaka</p>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-[#181d28] hover:bg-[#232938] text-gray-400 hover:text-white border border-gray-700 transition-colors cursor-pointer"
                  aria-label="Close navigation drawer"
                >
                  <FaTimes className="text-base" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="p-4 space-y-1.5 flex-1">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider px-3 mb-2">
                  Navigation Menu
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-gray-200 hover:text-orange-400 hover:bg-[#161a25] transition-all font-semibold text-sm border border-transparent hover:border-gray-800"
                  >
                    <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-xs shrink-0">
                      <link.icon />
                    </div>
                    <span>{link.name}</span>
                  </a>
                ))}

                {/* Event Catering CTA inside Drawer */}
                <div className="pt-3">
                  <a
                    href="#catering"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold py-3.5 px-4 rounded-2xl shadow-lg shadow-orange-600/30 text-sm transition-all"
                  >
                    <FaCalendarCheck />
                    <span>Book Event / Party Catering</span>
                  </a>
                </div>
              </div>

              {/* Drawer Footer: Social Channels & Creator Community */}
              <div className="p-4 sm:p-5 border-t border-gray-800/90 bg-[#080a0f] space-y-3">
                <div className="text-[11px] font-bold text-gray-400">
                  Follow Asma Akter (Entrepreneur):
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={creatorSocialStats.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#141822] text-red-400 hover:bg-red-600 hover:text-white border border-gray-800 text-xs font-bold transition-all shadow-sm"
                  >
                    <FaYoutube />
                    <span>YouTube</span>
                  </a>
                  <a
                    href={creatorSocialStats.socialLinks.facebook1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#141822] text-blue-400 hover:bg-blue-600 hover:text-white border border-gray-800 text-xs font-bold transition-all shadow-sm"
                  >
                    <FaFacebookF />
                    <span>Facebook</span>
                  </a>
                </div>
                <p className="text-[10px] text-gray-500 text-center font-medium">
                  Agargaon New Road Food Kitchen • 1.2M+ Community
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
