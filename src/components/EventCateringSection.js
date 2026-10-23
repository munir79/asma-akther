"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cateringPackages, eventTypesList, dhakaAreas } from "@/data/cateringPackages";
import { FaCalendarCheck, FaUsers, FaCheckCircle, FaWhatsapp, FaWineGlassAlt, FaConciergeBell } from "react-icons/fa";

export default function EventCateringSection() {
  const [selectedPackageId, setSelectedPackageId] = useState("pkg-royal-reception");
  const [guestCount, setGuestCount] = useState(50);
  const [eventType, setEventType] = useState(eventTypesList[0]);
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState(dhakaAreas[0]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentPackage = cateringPackages.find((p) => p.id === selectedPackageId) || cateringPackages[0];
  const estimatedTotal = guestCount * currentPackage.pricePerPerson;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert("Please enter your name and phone number so we can confirm your party booking!");
      return;
    }
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*Event & Catering Booking Request - Asma Akter Kitchen (Agargaon)*\n\n` +
      `*Host Name:* ${customerName || "Valued Client"}\n` +
      `*Phone:* ${customerPhone || "N/A"}\n` +
      `*Event Type:* ${eventType}\n` +
      `*Date:* ${eventDate || "To be discussed"}\n` +
      `*Venue/Area:* ${eventLocation}\n` +
      `*Number of Guests:* ${guestCount} persons\n` +
      `*Selected Package:* ${currentPackage.name} (৳${currentPackage.pricePerPerson}/person)\n` +
      `*Estimated Cost:* ৳${estimatedTotal.toLocaleString()} BDT\n` +
      `*Special Notes:* ${specialNotes || "None"}\n\n` +
      `Looking forward to confirming with Asma Akter's team!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/8801712345678?text=${encoded}`, "_blank");
  };

  return (
    <section id="catering" className="py-20 bg-[#0d0f17] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <FaWineGlassAlt className="text-amber-400 text-xs" />
            Special Events, Parties &amp; Receptions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Order for Your <span className="text-gradient-flame">Party or Full Reception</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            Whether it&apos;s a grand <strong>wedding reception, Gaye Holud, birthday celebration, corporate dinner, or family gathering</strong>, bring the signature slow-cooked claypots and live cooking stations from our Agargaon kitchen directly to your venue.
          </p>
        </div>

        {/* Package Cards Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {cateringPackages.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedPackageId(pkg.id)}
                className={`cursor-pointer rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between relative ${
                  isSelected
                    ? "bg-gradient-to-b from-[#1b1f2b] to-[#141722] border-orange-500 shadow-xl shadow-orange-600/20"
                    : "bg-[#12151e] border-gray-800 hover:border-gray-700"
                }`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2.5 py-0.5 rounded-full self-start mb-3">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">{pkg.subtitle}</p>

                  <div className="mb-4">
                    <span className="text-2xl font-black text-amber-400">৳ {pkg.pricePerPerson}</span>
                    <span className="text-xs text-gray-400"> / guest</span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 border-t border-gray-800/80 pt-4">
                    <div className="text-[11px] font-semibold text-gray-300">Package Includes:</div>
                    {pkg.itemsIncluded.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-snug">
                        <FaCheckCircle className="text-emerald-400 text-xs shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {pkg.itemsIncluded.length > 3 && (
                      <div className="text-[11px] text-orange-400 font-medium">
                        + {pkg.itemsIncluded.length - 3} more items &amp; service
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">Min {pkg.minGuests} guests</span>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      isSelected
                        ? "bg-orange-600 text-white"
                        : "bg-gray-800 text-gray-300"
                    }`}
                  >
                    {isSelected ? "Selected" : "Select"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Booking & Quotation Form */}
        <div className="bg-[#141822] border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Form Inputs (Left) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaConciergeBell className="text-orange-400" />
                  Customize Your Event Booking
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Fill in your party details to receive an instant estimate and reserve your date with Asma Akter&apos;s team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Event / Occasion Type
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full bg-[#0e1118] border border-gray-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                    >
                      {eventTypesList.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guest Count Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-semibold text-gray-300">
                        Guest Count: <span className="text-amber-400 font-bold">{guestCount} guests</span>
                      </label>
                    </div>
                    <input
                      type="range"
                      min={15}
                      max={400}
                      step={5}
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full accent-orange-500 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Date */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-[#0e1118] border border-gray-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  {/* Venue Location Area */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Event Location in Dhaka
                    </label>
                    <select
                      value={eventLocation}
                      onChange={(e) => setEventLocation(e.target.value)}
                      className="w-full bg-[#0e1118] border border-gray-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                    >
                      {dhakaAreas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Host Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Name / Host Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full bg-[#0e1118] border border-gray-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="017XXXXXXXX"
                      className="w-full bg-[#0e1118] border border-gray-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Special Requests or Custom Menu Items (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder="e.g. Need 20 extra clay pots of Hāser Hāndi, live street food stall on our lawn, special dragon fruit smoothies..."
                    className="w-full bg-[#0e1118] border border-gray-700 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </form>
            </div>

            {/* Price Estimation Summary (Right) */}
            <div className="lg:col-span-5 bg-[#0f121a] rounded-2xl p-6 border border-gray-800 space-y-5">
              <div className="border-b border-gray-800 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
                  Instant Quotation Summary
                </span>
                <h4 className="text-lg font-black text-white mt-1">
                  {currentPackage.name}
                </h4>
                <p className="text-xs text-gray-400">{eventType} in {eventLocation}</p>
              </div>

              <div className="space-y-2.5 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Guest Headcount:</span>
                  <span className="font-bold text-white">{guestCount} persons</span>
                </div>
                <div className="flex justify-between">
                  <span>Rate per Person:</span>
                  <span className="font-bold text-white">৳ {currentPackage.pricePerPerson}</span>
                </div>
                <div className="flex justify-between">
                  <span>Live Claypot / Cart Setup:</span>
                  <span className="font-bold text-emerald-400">Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Crew &amp; Transportation:</span>
                  <span className="font-bold text-emerald-400">Complimentary</span>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-400 block">Estimated Feast Cost</span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400">
                    ৳ {estimatedTotal.toLocaleString()}
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 bg-gray-800/60 px-2 py-1 rounded">
                  Approx. BDT
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={generateWhatsAppMessage}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Send Request to WhatsApp Hotline</span>
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs py-3 rounded-xl transition-all"
                >
                  <FaCalendarCheck />
                  <span>Submit Booking Request Online</span>
                </button>
              </div>

              {isSubmitted && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in duration-300">
                  <FaCheckCircle className="shrink-0 text-base" />
                  <span>
                    Thank you, {customerName}! Your catering inquiry has been submitted. Our team will contact {customerPhone} shortly to confirm details.
                  </span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
