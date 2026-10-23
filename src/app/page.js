"use client";

import React, { useState, useEffect } from "react";
import LiveCartBanner from "@/components/LiveCartBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HaserHandiSpotlight from "@/components/HaserHandiSpotlight";
import MenuSection from "@/components/MenuSection";
import EventCateringSection from "@/components/EventCateringSection";
import CustomerMomentsGallery from "@/components/CustomerMomentsGallery";
import CreatorLounge from "@/components/CreatorLounge";
import CartLocationSection from "@/components/CartLocationSection";
import CartDrawer from "@/components/CartDrawer";
import MobileQuickBar from "@/components/MobileQuickBar";
import Footer from "@/components/Footer";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage if available
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("asma_akter_cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.warn("Could not load cart from localStorage", e);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("asma_akter_cart", JSON.stringify(cartItems));
    } catch (e) {
      console.warn("Could not save cart to localStorage", e);
    }
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if item with same name & spiceLevel already exists
      const existingIndex = prevItems.findIndex(
        (i) => i.name === item.name && i.spiceLevel === item.spiceLevel
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += item.quantity || 1;
        return updated;
      } else {
        return [...prevItems, { ...item, quantity: item.quantity || 1 }];
      }
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0c0e14] text-gray-100 flex flex-col font-sans">
      {/* Top Real-time Cart Banner */}
      <LiveCartBanner />

      {/* Sticky Header & Navbar */}
      <Navbar
        cartCount={totalItemCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Creator Spotlight & Quick CTAs */}
        <HeroSection />

        {/* Signature Dish Showcase: Hāser Hāndi */}
        <HaserHandiSpotlight onAddToCart={handleAddToCart} />

        {/* Full Interactive Menu with Search & Category Tabs */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* Dedicated Party & Reception Catering Section */}
        <EventCateringSection />

        {/* Customer Moments & Photo Gallery with Specific Customer Locations & Reviews */}
        <CustomerMomentsGallery />

        {/* Creator Lounge: Viral Cooking Vlogs & Reels */}
        <CreatorLounge />

        {/* Street Cart Live Tracker, Timings & Location */}
        <CartLocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Bottom Quick Action Bar for Mobile Viewers */}
      <MobileQuickBar
        cartCount={totalItemCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
