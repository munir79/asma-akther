"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { creatorSocialStats, viralVideoReels } from "@/data/creatorReels";
import { FaPlay, FaYoutube, FaFacebookF, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

export default function CreatorLounge() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-20 bg-[#0e1118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <FaPlay className="text-red-500 text-[10px]" />
              YouTube &amp; Creator Vlogs
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Watch <span className="text-gradient-flame">Asma Akter on YouTube &amp; Facebook</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1 max-w-xl">
              Follow Asma Akter&apos;s culinary journey, live cart vlogs, and traditional cooking secrets directly from Agargaon New Road.
            </p>
          </div>

          {/* Social Channels */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={creatorSocialStats.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1b1e2a] hover:bg-red-600 text-gray-200 hover:text-white border border-gray-800 hover:border-red-500/50 px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
            >
              <FaYoutube className="text-red-500 text-base" />
              <span>@asmaakterentreprenuer</span>
            </a>

            <a
              href={creatorSocialStats.socialLinks.facebook1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1b1e2a] hover:bg-blue-600 text-gray-200 hover:text-white border border-gray-800 hover:border-blue-500/50 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all"
            >
              <FaFacebookF className="text-blue-500 text-xs" />
              <span>Facebook Page 1</span>
            </a>

            <a
              href={creatorSocialStats.socialLinks.facebook2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1b1e2a] hover:bg-blue-600 text-gray-200 hover:text-white border border-gray-800 hover:border-blue-500/50 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all"
            >
              <FaFacebookF className="text-blue-500 text-xs" />
              <span>Facebook Page 2</span>
            </a>
          </div>
        </div>

        {/* Video Cards Grid with Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {viralVideoReels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveVideo(reel)}
              className="group cursor-pointer bg-[#141722] rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-colors" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-orange-600/90 text-white flex items-center justify-center shadow-lg shadow-orange-600/40 group-hover:scale-115 transition-transform">
                      <FaPlay className="text-sm ml-0.5" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-amber-300 text-[10px] font-black px-2.5 py-1 rounded-full border border-amber-500/30">
                    {reel.badge}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                    {reel.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>{reel.platform}</span>
                    <span className="font-bold text-orange-400">{reel.views}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors leading-snug line-clamp-2">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {reel.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-gray-800/80 mt-2 flex items-center justify-between text-xs text-orange-400 font-bold">
                <span>Watch on YouTube / Facebook</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Video Modal with Direct YouTube Channel Integration */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#141722] rounded-3xl overflow-hidden border border-gray-700 shadow-2xl p-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">
                  Asma Akter Official Video
                </span>
                <h4 className="text-base font-bold text-white">{activeVideo.title}</h4>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Close Video"
                className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex flex-col items-center justify-center text-center p-6 border border-gray-800">
              <Image
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                fill
                sizes="100vw"
                className="object-cover opacity-35"
              />
              <div className="relative z-10 space-y-4 max-w-md">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white flex items-center justify-center mx-auto shadow-xl">
                  <FaYoutube className="text-2xl" />
                </div>
                <h5 className="text-white font-bold text-sm sm:text-base">
                  &ldquo;{activeVideo.title}&rdquo;
                </h5>
                <p className="text-xs text-gray-300">
                  Stream Asma Akter&apos;s full cooking and vlog video on her official YouTube channel &amp; Facebook pages!
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href={creatorSocialStats.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow"
                  >
                    <FaYoutube className="text-base" />
                    <span>Watch on YouTube</span>
                  </a>
                  <a
                    href={creatorSocialStats.socialLinks.facebook1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow"
                  >
                    <FaFacebookF className="text-xs" />
                    <span>Watch on Facebook</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
