"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { customerReviewsAndMoments, galleryCategories, galleryItems } from "@/data/reviewsAndMoments";
import { FaStar, FaMapMarkerAlt, FaCheckCircle, FaHeart, FaImages, FaTimes, FaExpand } from "react-icons/fa";

export default function CustomerMomentsGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredGallery = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );
  // update and ok 
  return (
    <section id="gallery" className="py-20 bg-[#0c0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <FaImages className="text-orange-500" />
            Kitchen &amp; Customer Moments
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Photo Gallery &amp; <span className="text-gradient-flame">Customer Experiences</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            Real moments from our kitchen on Agargaon New Road and happy food lovers enjoying authentic claypot curries and fresh fruit smoothies.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${activeCategory === cat.id
                  ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white border-orange-500 shadow-md shadow-orange-600/20"
                  : "bg-[#151922] text-gray-400 border-gray-800 hover:text-white hover:border-gray-700"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setLightboxImage(item)}
              className="group cursor-pointer relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Tag Pill */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                {item.tag}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaExpand className="text-xs" />
              </div>

              {/* Bottom Caption & Location */}
              <div className="absolute bottom-3 inset-x-3 text-white">
                <h3 className="text-sm font-bold leading-snug line-clamp-1">{item.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-orange-400 font-medium mt-1">
                  <FaMapMarkerAlt className="text-[11px] shrink-0" />
                  <span className="line-clamp-1">{item.customerLocation}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Reviews & Testimonials with Specific Locations */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Verified Foodie Reviews &amp; <span className="text-orange-400">Customer Locations</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Real customer feedback from Agargaon New Road, Uttara, Mirpur, Dhanmondi, and across Dhaka.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1 bg-[#151922] border border-gray-800 px-3 py-1.5 rounded-xl text-xs font-bold text-amber-400">
              <FaStar />
              <span>4.9 Average Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerReviewsAndMoments.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#141721] rounded-3xl p-6 border border-gray-800/80 hover:border-orange-500/40 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Top Customer Info & Location */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white">{review.customerName}</span>
                        {review.isVerifiedFoodie && (
                          <FaCheckCircle className="text-emerald-400 text-xs" title="Verified Foodie" />
                        )}
                      </div>

                      {/* Customer Location Badge */}
                      <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium mt-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-md self-start inline-flex">
                        <FaMapMarkerAlt className="text-[10px]" />
                        <span>{review.customerLocation}</span>
                      </div>
                    </div>

                    <div className="flex text-amber-400 text-xs shrink-0">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>

                  {/* Dish Ordered Tag */}
                  <div className="text-[11px] font-semibold text-gray-400 mb-3 bg-[#0d0f15] px-2.5 py-1 rounded-lg border border-gray-800/80">
                    Ordered: <span className="text-gray-200">{review.dishOrdered}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-gray-300 leading-relaxed italic mb-4">
                    &ldquo;{review.review}&rdquo;
                  </p>
                </div>

                {/* Footer Likes & Date */}
                <div className="pt-3 border-t border-gray-800/60 flex items-center justify-between text-[11px] text-gray-500">
                  <span>{review.date}</span>
                  <div className="flex items-center gap-1 text-red-400">
                    <FaHeart className="text-[10px]" />
                    <span>{review.likes} found helpful</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#141722] rounded-3xl overflow-hidden border border-gray-700 shadow-2xl"
          >
            <button
              onClick={() => setLightboxImage(null)}
              aria-label="Close Preview"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <FaTimes />
            </button>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={lightboxImage.image}
                alt={lightboxImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-5 text-white flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold">{lightboxImage.title}</h4>
                <div className="flex items-center gap-1.5 text-xs text-orange-400 font-medium mt-1">
                  <FaMapMarkerAlt />
                  <span>{lightboxImage.customerLocation}</span>
                </div>
              </div>
              <span className="text-xs bg-orange-600 px-3 py-1 rounded-full font-bold">
                {lightboxImage.tag}
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
