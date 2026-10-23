import React from "react";
import Link from "next/link";
import { FaFire, FaYoutube, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaHeart } from "react-icons/fa";
import { creatorSocialStats } from "@/data/creatorReels";

export default function Footer() {
  return (
    <footer className="bg-[#090b10] border-t border-gray-800/90 text-gray-400 text-xs sm:text-sm pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Creator Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-red-600 flex items-center justify-center text-white text-lg shadow-lg">
                <FaFire />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight">
                  ASMA AKTER
                </span>
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded ml-2">
                  ফুড ভ্লগার
                </span>
                <p className="text-xs text-gray-400">Restaurant &amp; Food Kitchen • Agargaon</p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Founded by popular food creator &amp; entrepreneur <strong>Asma Akter</strong>. Serving slow-cooked claypot Hāser Hāndi, signature street fast food, and cold-pressed fresh juices at Agargaon New Road.
            </p>

            {/* Official Social Links */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={creatorSocialStats.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                title="YouTube @asmaakterentreprenuer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141822] hover:bg-red-600 text-gray-300 hover:text-white transition-colors border border-gray-800 text-xs font-semibold"
              >
                <FaYoutube className="text-red-500 text-sm" />
                <span>YouTube Channel</span>
              </a>

              <a
                href={creatorSocialStats.socialLinks.facebook1}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page 1"
                title="Official Facebook Page"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141822] hover:bg-blue-600 text-gray-300 hover:text-white transition-colors border border-gray-800 text-xs font-semibold"
              >
                <FaFacebookF className="text-blue-500 text-xs" />
                <span>Facebook Page 1</span>
              </a>

              <a
                href={creatorSocialStats.socialLinks.facebook2}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page 2"
                title="Official Facebook Page 2"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141822] hover:bg-blue-600 text-gray-300 hover:text-white transition-colors border border-gray-800 text-xs font-semibold"
              >
                <FaFacebookF className="text-blue-500 text-xs" />
                <span>Facebook Page 2</span>
              </a>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Food Menu
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#signature-handi" className="hover:text-orange-400 transition-colors">
                  Hāser Hāndi Specials
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-400 transition-colors">
                  Naga Kathi Rolls
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-400 transition-colors">
                  Street Smash Burgers
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-400 transition-colors">
                  Fresh Juices &amp; Borhani
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-400 transition-colors">
                  Matka Kulfi &amp; Desserts
                </a>
              </li>
            </ul>
          </div>

          {/* Catering & Services */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Event Catering
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catering" className="hover:text-amber-400 transition-colors">
                  Wedding Receptions
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-amber-400 transition-colors">
                  Gaye Holud Feasts
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-amber-400 transition-colors">
                  Birthday Parties
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-amber-400 transition-colors">
                  Corporate Feasts
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-amber-400 transition-colors">
                  Bulk Claypot Handi Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Agargaon Location
            </h3>
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-orange-500 text-sm mt-0.5 shrink-0" />
                <span>Agargaon New Road, Sher-e-Bangla Nagar, Dhaka-1207</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-emerald-400 text-xs shrink-0" />
                <span>Hotline: +880 1712-345678</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-amber-400 text-xs shrink-0" />
                <span>catering@asmaakter-foodcart.com</span>
              </div>
              <div className="pt-1 text-[11px] text-amber-300 font-semibold">
                Daily Open: 4:00 PM - 11:30 PM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Asma Akter Restaurant &amp; Food Kitchen. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <FaHeart className="text-red-500 text-xs" /> for Bangladesh&apos;s food lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
