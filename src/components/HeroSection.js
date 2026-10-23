"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFire,
  FaStar,
  FaCalendarCheck,
  FaUtensils,
  FaCheckCircle,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { creatorSocialStats } from "@/data/creatorReels";

const heroSlides = [
  {
    image: "/images/hero/asmahero.webp",
    alt: "Asma Akter at Agargaon Street Cart",
    location: "Agargaon New Road Live",
    role: "Content Creator & Street Chef",
    badge: "Specialist",
  },
  {
    image: "/images/hero/asma-juice.webp",
    alt: "Asma Akter Fresh Dragon Fruit Juice Cart",
    location: "Fresh Dragon Fruit Juice Bar",
    role: "Creator & Juice Master",
    badge: "100% Pure Juices",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  useEffect(() => {
    // Preload remaining hero slide images in background so slide rotation is instantaneous
    if (typeof window !== "undefined") {
      heroSlides.slice(1).forEach((slide) => {
        const img = new window.Image();
        img.src = slide.image;
      });
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
  return (
    <section className="relative overflow-hidden min-h-[750px] lg:min-h-[840px] xl:min-h-[880px] flex items-center pt-8 pb-28 lg:pt-12 lg:pb-36 bg-[#0a0c11]">
      {/* Background Image: Anchored left-bottom so the bottom-left vibrant green leaves and food table are ALWAYS fully visible */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bacground-image.webp"
          alt="Night Street Food Market by Asma Akter"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-left-bottom"
        />

        {/* Localized dark shadow strictly behind the headline & text (Top-Center-Left)
            Leaves the bottom-left green leaves and the entire bottom table 100% bright, vibrant, and uncovered! */}
        <div className="absolute top-0 left-0 w-full sm:w-[62%] lg:w-[52%] h-[68%] bg-[radial-gradient(ellipse_at_30%_35%,rgba(10,12,17,0.85)_0%,rgba(10,12,17,0.45)_55%,transparent_100%)] pointer-events-none" />

        {/* Soft top gradient to blend with the navbar */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0c11]/85 to-transparent pointer-events-none" />
      </div>

      {/* Fresh Botanical & Warm Earthen Underglow for the Left-Side Green Leaves */}
      <div className="absolute -bottom-10 -left-10 w-[420px] h-[420px] bg-emerald-500/15 rounded-full blur-[110px] pointer-events-none z-[1]" />
      <div className="absolute bottom-6 left-8 w-[260px] h-[260px] bg-amber-500/15 rounded-full blur-[90px] pointer-events-none z-[1]" />

      {/* Subtle Warm Ambient Glow for Right Cart Stall */}
      <div className="absolute top-1/4 right-1/4 w-[380px] h-[380px] bg-amber-500/15 rounded-full blur-[130px] pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Text Column (order-2 on mobile, order-1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-7 space-y-5 text-center lg:text-left"
          >
            {/* Creator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141822]/90 border border-amber-500/35 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm">
              <FaMapMarkerAlt className="text-orange-500 text-xs shrink-0" />
              <span>Bangladeshi Creator &amp; Street Chef</span>
              <span className="text-gray-500">•</span>
              <span className="text-amber-400 font-bold">1.2M+ Community</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
              <span className="inline-block sm:whitespace-nowrap">
                Dhaka&apos;s Viral Street Food Cart
              </span>{" "}
              <br className="hidden sm:inline" />
              <span>
                Flavors by{" "}
                <span className="relative inline-block text-orange-500 font-black">
                  Asma Akter
                  {/* Decorative brush underline */}
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full h-2.5 text-orange-500"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 1 100 5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed drop-shadow-sm">
              Experience the unmatched aroma of slow-cooked{" "}
              <strong className="text-orange-400 font-semibold">
                Hāser Hāndi (হাঁসের হাঁড়ি)
              </strong>{" "}
              in earthen clay pots, fiery Naga street rolls, 100% pure cold-pressed fruit juices, and decadent artisan desserts.
            </p>

            {/* Social Proof & Metrics Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              {/* Star Rating Card */}
              <div className="flex items-center gap-2.5 bg-[#141722]/90 border border-gray-800/90 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-sm">
                <div className="flex text-amber-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="text-left flex items-baseline gap-1.5">
                  <span className="text-xs font-black text-white">4.9 / 5.0</span>
                  <span className="text-[10px] text-gray-400 font-medium">2,400+ Reviews</span>
                </div>
              </div>

              {/* Social Channels Pill */}
              <div className="flex items-center gap-3 bg-[#141722]/90 border border-gray-800/90 px-4 py-2 rounded-xl text-xs backdrop-blur-md shadow-sm">
                <a
                  href={creatorSocialStats.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-red-400 hover:text-red-300 transition-colors"
                >
                  <FaYoutube className="text-sm" />
                  <span className="font-bold text-white text-[11px]">520K</span>
                </a>
                <span className="text-gray-700">|</span>
                <a
                  href={creatorSocialStats.socialLinks.facebook1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaFacebookF className="text-[11px]" />
                  <span className="font-bold text-white text-[11px]">480K</span>
                </a>
                <span className="text-gray-700">|</span>
                <span className="flex items-center gap-1.5 text-pink-400">
                  <FaTiktok className="text-[11px]" />
                  <span className="font-bold text-white text-[11px]">290K</span>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-orange-600/35 hover:shadow-orange-600/50 transition-all transform hover:-translate-y-0.5"
              >
                <FaUtensils className="text-xs" />
                <span>Explore Full Menu</span>
              </a>

              <a
                href="#catering"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#161a24]/90 hover:bg-[#202534] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full border border-gray-700/80 hover:border-orange-500/50 transition-all transform hover:-translate-y-0.5 backdrop-blur-md"
              >
                <FaCalendarCheck className="text-amber-400 text-xs" />
                <span>Book Event Catering</span>
              </a>
            </div>

            {/* Checkmarks Row */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-gray-300">
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-emerald-400 text-sm" />
                Fresh Local Duck Meat
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-emerald-400 text-sm" />
                Pure Mustard Oil &amp; Claypot
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheckCircle className="text-emerald-400 text-sm" />
                Full Event &amp; Party Setup
              </span>
            </div>
          </motion.div>

          {/* Right Floating Card: Enlarged Auto-Slider of Asma Akter Photos (order-1 on mobile, order-2 on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end pb-4 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full max-w-[420px] sm:max-w-[470px] lg:max-w-[490px] rounded-3xl p-2.5 sm:p-3.5 bg-gradient-to-b from-amber-500/50 via-[#181c26]/90 to-[#12151e] border-2 border-amber-500/60 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(245,158,11,0.3)] backdrop-blur-md group"
            >
              {/* Image Container with Auto-Slider */}
              <div className="relative aspect-[3.7/4.6] sm:aspect-[3.8/4.6] w-full rounded-2xl overflow-hidden bg-gray-950 shadow-inner select-none">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Top Shadow Gradient */}
                <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/80 via-black/25 to-transparent pointer-events-none z-10" />

                {/* Bottom Shadow Gradient */}
                <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none z-10" />

                {/* Top-Left Live Pill */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md z-20">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span>{heroSlides[currentSlide].location}</span>
                </div>

                {/* Top-Right Slider Indicators */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/15 z-20">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentSlide(idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx
                          ? "w-6 bg-gradient-to-r from-orange-500 to-amber-400"
                          : "w-2 bg-white/40 hover:bg-white/70"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Previous Slide Button (hover/touch) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    prevSlide();
                  }}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-orange-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/20 z-20 cursor-pointer shadow-lg"
                  aria-label="Previous photo"
                >
                  <FaChevronLeft className="text-xs" />
                </button>

                {/* Next Slide Button (hover/touch) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    nextSlide();
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-orange-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/20 z-20 cursor-pointer shadow-lg"
                  aria-label="Next photo"
                >
                  <FaChevronRight className="text-xs" />
                </button>

                {/* Bottom Bar inside Card */}
                <div className="absolute bottom-3 inset-x-3 bg-black/85 backdrop-blur-md border border-white/15 rounded-xl p-3 sm:p-3.5 text-white flex items-center justify-between z-20 shadow-lg">
                  <div>
                    <h2 className="text-sm sm:text-base font-black text-white flex items-center gap-1.5">
                      Asma Akter
                      <FaCheckCircle className="text-orange-400 text-xs" />
                    </h2>
                    <p className="text-[11px] text-gray-300 font-medium">
                      {heroSlides[currentSlide].role}
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1.5 rounded-lg shadow">
                    {heroSlides[currentSlide].badge}
                  </span>
                </div>
              </div>



              {/* Floating Bottom-Left Badge: Daily Signature / 50kg Slow-Cook Handi */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute -bottom-5 -left-3 sm:-left-5 bg-[#141722]/95 border border-orange-500/40 p-2.5 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2.5 backdrop-blur-md z-30"
              >
                <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-sm">
                  <FaFire />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-medium">Daily Signature</div>
                  <div className="text-xs font-bold text-white">50kg Slow-Cook Handi</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
