"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaTimes, FaShoppingBag, FaPlus, FaMinus, FaTrash, FaWhatsapp, FaMotorcycle, FaStore, FaCheckCircle } from "react-icons/fa";

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [orderType, setOrderType] = useState("delivery"); // 'delivery' or 'takeaway'
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = orderType === "delivery" && subtotal > 0 ? 60 : 0;
  const total = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let itemsText = cartItems
      .map(
        (item) =>
          `• ${item.name} (${item.spiceLevel || "Standard"}) x ${item.quantity} = ৳${item.price * item.quantity}`
      )
      .join("\n");

    const message =
      `*New Order - Asma Akter Kitchen & Food Cart (Agargaon)*\n\n` +
      `*Order Type:* ${orderType === "delivery" ? "Home Delivery" : "Takeaway from Agargaon Kitchen"}\n` +
      `*Phone:* ${customerPhone || "Not provided"}\n` +
      `${orderType === "delivery" ? `*Delivery Address:* ${customerAddress || "Dhaka"}\n` : ""}\n` +
      `*Ordered Items:*\n${itemsText}\n\n` +
      `*Subtotal:* ৳${subtotal}\n` +
      `${orderType === "delivery" ? `*Delivery Fee:* ৳${deliveryFee}\n` : ""}` +
      `*Total Payable:* ৳${total} BDT\n\n` +
      `Please confirm my order and preparation time!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/8801712345678?text=${encoded}`, "_blank");
    setIsOrdered(true);
    setTimeout(() => {
      setIsOrdered(false);
      onClearCart();
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#12151e] border-l border-gray-800 text-white flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-gray-800 flex items-center justify-between bg-[#151924]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center">
                <FaShoppingBag />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Your Food Basket</h3>
                <span className="text-xs text-gray-400">
                  {cartItems.length} {cartItems.length === 1 ? "dish" : "dishes"} selected
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart drawer"
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <div className="w-16 h-16 rounded-full bg-gray-800/80 text-gray-500 flex items-center justify-center mx-auto text-2xl">
                  <FaShoppingBag />
                </div>
                <h4 className="text-base font-bold text-gray-300">Your basket is empty</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Add some sizzling Hāser Hāndi, spicy rolls, or fresh juices to start your order!
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 bg-orange-600 text-white text-xs font-bold rounded-xl"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#181c28] p-3.5 rounded-2xl border border-gray-800 flex gap-3 items-center justify-between"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-900 shrink-0">
                    <Image
                      src={item.image || "/images/haser-handi.jpg"}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                    <span className="text-[11px] text-orange-400 font-medium block">
                      {item.spiceLevel}
                    </span>
                    <span className="text-xs font-extrabold text-amber-400">
                      ৳ {item.price * item.quantity}
                    </span>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 shrink-0 bg-[#0e1119] px-2 py-1 rounded-xl border border-gray-800">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-400 hover:text-white p-1"
                    >
                      <FaMinus className="text-[10px]" />
                    </button>
                    <span className="text-xs font-bold text-white min-w-[14px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-400 hover:text-white p-1"
                    >
                      <FaPlus className="text-[10px]" />
                    </button>
                  </div>

                  {/* Remove Item */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-gray-500 hover:text-red-400 p-1.5 transition-colors"
                  >
                    <FaTrash className="text-xs" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Order Details & Checkout Footer */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-gray-800 bg-[#151924] space-y-4">
              
              {/* Order Mode Toggle */}
              <div className="grid grid-cols-2 gap-2 bg-[#0e1119] p-1 rounded-xl border border-gray-800">
                <button
                  onClick={() => setOrderType("delivery")}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${
                    orderType === "delivery"
                      ? "bg-orange-600 text-white shadow"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <FaMotorcycle />
                  <span>Delivery (+৳60)</span>
                </button>
                <button
                  onClick={() => setOrderType("takeaway")}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${
                    orderType === "takeaway"
                      ? "bg-orange-600 text-white shadow"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <FaStore />
                  <span>Cart Pickup (Free)</span>
                </button>
              </div>

              {/* Delivery Details Inputs */}
              <div className="space-y-2 text-xs">
                <input
                  type="tel"
                  placeholder="Your Phone / WhatsApp *"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#0e1119] border border-gray-700 rounded-xl px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
                {orderType === "delivery" && (
                  <input
                    type="text"
                    placeholder="Delivery Address (e.g. Road 4, Dhanmondi) *"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full bg-[#0e1119] border border-gray-700 rounded-xl px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                  />
                )}
              </div>

              {/* Bill Breakdown */}
              <div className="space-y-1.5 text-xs text-gray-300 pt-1 border-t border-gray-800">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-white">৳ {subtotal}</span>
                </div>
                {orderType === "delivery" && (
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="font-bold text-white">৳ {deliveryFee}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-black text-amber-400 pt-2 border-t border-gray-800">
                  <span>Total Amount</span>
                  <span>৳ {total} BDT</span>
                </div>
              </div>

              {/* WhatsApp Checkout Button */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all text-sm"
              >
                <FaWhatsapp className="text-lg" />
                <span>Order via WhatsApp (Instant Confirm)</span>
              </button>

              {isOrdered && (
                <div className="p-2.5 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                  <FaCheckCircle className="text-base shrink-0" />
                  <span>Order sent to WhatsApp! Asma&apos;s cart crew will respond in minutes.</span>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
