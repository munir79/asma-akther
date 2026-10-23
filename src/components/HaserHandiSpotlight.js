"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFire,
  FaCheck,
  FaShoppingBag,
  FaPepperHot,
  FaVolumeMute,
  FaVolumeUp,
  FaFilm,
  FaYoutube
} from "react-icons/fa";

export default function HaserHandiSpotlight({ onAddToCart }) {
  const [selectedSpice, setSelectedSpice] = useState("Spicy (ঝাল)");
  const [selectedPortion, setSelectedPortion] = useState("Regular Handi (1-2 persons)");
  const [isAdded, setIsAdded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(true);

  const cardVideoRef = useRef(null);

  // Guarantee that autoplay starts smoothly without browser restrictions
  useEffect(() => {
    if (cardVideoRef.current) {
      cardVideoRef.current.defaultMuted = true;
      cardVideoRef.current.muted = isMuted;
      cardVideoRef.current.play().catch(() => { });
    }
  }, [showVideo, isMuted]);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (cardVideoRef.current) {
      cardVideoRef.current.muted = nextMuted;
    }
  };

  const portions = [
    { name: "Regular Handi (1-2 persons)", price: 480 },
    { name: "Combo with Bhuna Khichuri", price: 590 },
    { name: "Grand Feast Handi (3-4 persons)", price: 960 }
  ];

  const spiceLevels = ["Mild", "Medium", "Spicy (ঝাল)", "Naga Hot (Extra Spicy)"];

  const currentPrice = portions.find((p) => p.name === selectedPortion)?.price || 480;

  const handleAdd = () => {
    onAddToCart({
      id: "hh-spotlight-" + Date.now(),
      name: `Traditional Hāser Hāndi (${selectedPortion})`,
      price: currentPrice,
      image: "/images/haser-handi.jpg",
      spiceLevel: selectedSpice,
      quantity: 1
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section id="signature-handi" className="relative py-20 lg:py-28 overflow-hidden bg-[#0a0c12]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-md shadow-sm">
            <FaFire className="text-orange-500" />
            Signature Masterpiece
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md">
            The Famous <span className="text-gradient-flame">Hāser Hāndi (হাঁসের হাঁড়ি)</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed drop-shadow-sm font-normal">
            Asma Akter’s renowned recipe that has captured the hearts of foodies across Bangladesh. Cooked slowly inside handmade clay pots to lock in rich, earthy aromas.
          </p>
        </div>

        {/* Feature Grid: Left Side Video & Right Side Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Visual Column: Featured Real Video Player with Story link */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(245,158,11,0.25)] group bg-black">
              <video
                ref={cardVideoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/video/haser-handi-story.webm" type="video/webm" />
                <source src={`/video/${encodeURI("সফলতা এমনেই আসে না_ এর পেছনে লুকিয়ে থাকে কষ্ট আর পরিশ্রম । (4_7894.webm")}`} type="video/webm" />
              </video>

              {/* Top Live Badge */}
              <div className="absolute top-4 left-4 bg-orange-600/95 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg z-10">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span>সফলতা এমনেই আসে না - আসমা আক্তার</span>
              </div>

              {/* Audio Toggle Button */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="bg-black/80 hover:bg-orange-600 text-white text-xs px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  {isMuted ? <FaVolumeMute className="text-amber-400" /> : <FaVolumeUp className="text-emerald-400" />}
                  <span className="text-[11px] font-bold">{isMuted ? "Sound Off" : "Sound On"}</span>
                </button>
              </div>

              {/* Bottom Bar on Video with YouTube Story Link */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white bg-black/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 z-10">
                <div className="min-w-0 pr-2">
                  <div className="text-[10px] text-gray-300 font-medium truncate">Kitchen &amp; Cart Journey</div>
                  <div className="text-xs sm:text-sm font-black text-amber-300 truncate">এর পেছনে লুকিয়ে থাকে কষ্ট আর পরিশ্রম</div>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=AYVtkcTN0_U&t=110s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-extrabold bg-[#cc0000] hover:bg-red-600 text-white px-3 sm:px-3.5 py-2 rounded-xl shadow-md transition-all transform hover:scale-105"
                >
                  <FaYoutube className="text-sm shrink-0" />
                  <span>View Story on YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Ordering & Details Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#131722]/90 backdrop-blur-xl border border-gray-700/80 p-6 sm:p-8 rounded-3xl space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">

              {/* Secret Flavors Highlight */}
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Why Foodies Travel Miles For This:</span>
                </h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                    <span><strong>Farm-fresh local duck (দেশি হাঁস)</strong> marinated in mustard oil &amp; crushed garlic.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                    <span>Slow-cooked for <strong>3.5 hours inside porous red clay pots</strong> with 18 roasted spices.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                    <span>Served with whole caramelized garlic bulbs and fresh coriander garnish.</span>
                  </li>
                </ul>
              </div>

              {/* Portion Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  1. Choose Serving Portion:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {portions.map((portion) => (
                    <button
                      key={portion.name}
                      onClick={() => setSelectedPortion(portion.name)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${selectedPortion === portion.name
                          ? "bg-gradient-to-r from-orange-600/30 to-amber-600/20 border-orange-500 text-white font-bold"
                          : "bg-[#11131a] border-gray-800 text-gray-300 hover:border-gray-700"
                        }`}
                    >
                      <div className="text-xs leading-tight line-clamp-1">{portion.name}</div>
                      <div className="text-sm font-extrabold text-amber-400 mt-1">৳ {portion.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Spice Level Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                  <FaPepperHot className="text-red-400" />
                  2. Choose Spice Level:
                </label>
                <div className="flex flex-wrap gap-2">
                  {spiceLevels.map((spice) => (
                    <button
                      key={spice}
                      onClick={() => setSelectedSpice(spice)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${selectedSpice === spice
                          ? "bg-red-500/20 border-red-500 text-red-300"
                          : "bg-[#11131a] border-gray-800 text-gray-400 hover:text-gray-200"
                        }`}
                    >
                      {spice}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart CTA */}
              <div className="pt-2 flex items-center justify-between border-t border-gray-800">
                <div>
                  <div className="text-[11px] text-gray-400 font-medium">Selected Total:</div>
                  <div className="text-2xl font-black text-amber-400">৳ {currentPrice}</div>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg cursor-pointer ${isAdded
                      ? "bg-emerald-600 text-white"
                      : "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-orange-600/30 hover:scale-[1.02]"
                    }`}
                >
                  {isAdded ? (
                    <>
                      <FaCheck />
                      <span>Added to Feast!</span>
                    </>
                  ) : (
                    <>
                      <FaShoppingBag />
                      <span>Add to Handi Order</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
