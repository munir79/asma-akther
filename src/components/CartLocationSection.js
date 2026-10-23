"use client";

import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaDirections, FaCheckCircle, FaWhatsapp, FaStore } from "react-icons/fa";

export default function CartLocationSection() {
  return (
    <section id="location" className="py-20 bg-[#0c0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Details Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <FaMapMarkerAlt className="text-emerald-400" />
              Kitchen &amp; Food Cart Location
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Visit Asma Akter at <span className="text-gradient-flame">Agargaon New Road</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Drop by our bustling kitchen and street food counter on <strong>Agargaon New Road</strong> for steaming clay pots of Hāser Hāndi, spicy crispy rolls, and freshly churned fruit juices.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#141721] border border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 text-lg">
                  <FaStore />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Restaurant &amp; Cart Address</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Agargaon New Road, Sher-e-Bangla Nagar, Dhaka-1207, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#141721] border border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-lg">
                  <FaClock />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Daily Kitchen Timings</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    <strong>Every Day:</strong> 4:00 PM - 11:30 PM (Fresh Hāser Hāndi batches served at 5:00 PM &amp; 8:30 PM)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#141721] border border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-lg">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Direct Order &amp; Hotline</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Call / WhatsApp: <strong className="text-white">+880 1712-345678</strong> (Pre-order your duck curry clay pot early)
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Partners */}
            <div className="pt-2">
              <span className="text-xs font-bold text-gray-400 block mb-2 uppercase tracking-wider">
                Home Delivery Across Dhaka:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-[#151924] border border-gray-800 text-xs font-semibold text-gray-300">
                  Pathao Food
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#151924] border border-gray-800 text-xs font-semibold text-gray-300">
                  Foodpanda
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                  Direct Kitchen Delivery (Piping Hot)
                </span>
              </div>
            </div>
          </div>

          {/* Map Visual Column */}
          <div className="lg:col-span-6">
            <div className="bg-[#141822] rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Agargaon Hub Live
                  </span>
                </div>
                <span className="text-[11px] text-gray-400">GPS: 23.7772° N, 90.3807° E</span>
              </div>

              {/* Map Illustration Frame */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#1a1e2b] border border-gray-700/80 flex items-center justify-center p-6 text-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ff5e1e_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-orange-600/30 text-orange-500 border border-orange-500/50 flex items-center justify-center mx-auto text-2xl shadow-lg shadow-orange-600/30 animate-bounce">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white">
                      Asma Akter Kitchen &amp; Food Cart
                    </h3>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Agargaon New Road, Dhaka
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <a
                      href="https://maps.google.com/?q=Agargaon+New+Road+Dhaka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-md"
                    >
                      <FaDirections />
                      <span>Get Google Maps Directions</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Hours Note */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span>Evening crowd picks up around 5:30 PM</span>
                <span className="font-semibold text-amber-400">Open until 11:30 PM</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
