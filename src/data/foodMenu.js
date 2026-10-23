// Menu data for Asma Akter Food Cart & Kitchen
export const categories = [
  { id: "all", name: "All Items", icon: "BiFoodMenu" },
  { id: "handi", name: "Hāser Hāndi & Curries", icon: "GiCookingPot" },
  { id: "fastfood", name: "Street Rolls & Fast Food", icon: "MdFastfood" },
  { id: "juices", name: "Fresh Juices & Mocktails", icon: "BiDrink" },
  { id: "desserts", name: "Artisan Desserts", icon: "GiCakeSlice" }
];

export const foodMenuItems = [
  {
    id: "hh-01",
    name: "Traditional Hāser Hāndi (হাঁসের হাঁড়ি)",
    category: "handi",
    price: 480,
    unit: "per clay pot",
    isBestseller: true,
    isSignature: true,
    image: "/images/haser-handi.jpg",
    description: "Asma Akter's signature dish! Slow-cooked tender local duck in earthen clay pot with whole roasted garlic, pure mustard oil, and 18 secret Bengali spices.",
    spiceLevels: ["Mild", "Medium", "Spicy (ঝাল)", "Naga Hot (Extra Spicy)"],
    portions: [
      { name: "Regular Handi (1-2 persons)", extraPrice: 0 },
      { name: "Grand Feast Handi (3-4 persons)", extraPrice: 480 }
    ],
    tags: ["Earthen Pot", "House Special", "Duck Curry", "Mustard Oil"]
  },
  {
    id: "hh-02",
    name: "Hāser Hāndi with Bhuna Khichuri Combo",
    category: "handi",
    price: 590,
    unit: "combo meal",
    isBestseller: true,
    image: "/images/haser-handi.jpg",
    description: "Fragrant Chinigura rice and roasted moong dal bhuna khichuri served with rich, steaming duck handi curry, salad, and green chili pickle.",
    spiceLevels: ["Medium", "Spicy", "Naga Hot (Extra Spicy)"],
    portions: [
      { name: "Single Combo", extraPrice: 0 },
      { name: "Couple Combo (2 Khichuri + Extra Duck)", extraPrice: 380 }
    ],
    tags: ["Combo Meal", "Bestseller", "Khichuri"]
  },
  {
    id: "hh-03",
    name: "Clay Pot Beef Chui Jhal Handi",
    category: "handi",
    price: 520,
    unit: "per clay pot",
    isBestseller: false,
    image: "/images/haser-handi.jpg",
    description: "Prime beef cutlets slow-cooked with authentic Chui Jhal root in an earthen handi. Rich, peppery, deep aroma with melt-in-mouth garlic bulbs.",
    spiceLevels: ["Medium", "Spicy", "Extra Chui Jhal Spicy"],
    portions: [
      { name: "Regular (1-2 persons)", extraPrice: 0 },
      { name: "Large (3-4 persons)", extraPrice: 450 }
    ],
    tags: ["Chui Jhal", "Clay Pot Beef"]
  },
  {
    id: "ff-01",
    name: "Sizzling Naga Crispy Chicken Kathi Roll",
    category: "fastfood",
    price: 220,
    unit: "roll",
    isBestseller: true,
    image: "/images/street-fast-food.jpg",
    description: "Flaky handmade lachha paratha stuffed with crispy spiced chicken chunks, fiery Naga chili mayo, tangy crunchy onions, and fresh mint chutney.",
    spiceLevels: ["Regular Spicy", "Naga Spicy", "Double Naga Spicy"],
    portions: [
      { name: "Single Egg Chicken Roll", extraPrice: 0 },
      { name: "Double Egg Double Chicken", extraPrice: 70 }
    ],
    tags: ["Viral Street Roll", "Naga Spicy", "Crispy"]
  },
  {
    id: "ff-02",
    name: "Asma's Street Smash Beef Burger",
    category: "fastfood",
    price: 280,
    unit: "burger",
    isBestseller: true,
    image: "/images/street-fast-food.jpg",
    description: "Two 100% seasoned beef patties seared on screaming hot cart grill, melted cheddar cheese, caramelized onions, cart secret sauce in a brioche bun.",
    spiceLevels: ["Mild", "Spicy Cart Style"],
    portions: [
      { name: "Double Patty", extraPrice: 0 },
      { name: "Triple Patty Monster", extraPrice: 110 }
    ],
    tags: ["Smash Burger", "Beef", "Cheesy"]
  },
  {
    id: "ff-03",
    name: "Dhaka Masala Loaded Fries with Cheese",
    category: "fastfood",
    price: 180,
    unit: "portion",
    isBestseller: false,
    image: "/images/street-fast-food.jpg",
    description: "Crispy skin-on french fries tossed in zesty chaat masala, drizzled with warm cheddar cheese sauce, garlic mayo, and chopped green chilies.",
    spiceLevels: ["Mild Masala", "Spicy Masala"],
    portions: [
      { name: "Regular Box", extraPrice: 0 },
      { name: "Jumbo Sharing Box", extraPrice: 90 }
    ],
    tags: ["Sides", "Fries", "Cheesy"]
  },
  {
    id: "jc-01",
    name: "Royal Dhaka Borhani (Traditional Spiced Yogurt)",
    category: "juices",
    price: 130,
    unit: "glass",
    isBestseller: true,
    image: "/images/fresh-juices.jpg",
    description: "Thick, creamy sour yogurt blended with fresh mint leaves, roasted cumin, black salt, coriander, and mustard seed paste. Perfect digestif with Haser Handi!",
    spiceLevels: ["Authentic Traditional"],
    portions: [
      { name: "Glass (350ml)", extraPrice: 0 },
      { name: "Earthen Pitcher / 1 Litre Bottle", extraPrice: 190 }
    ],
    tags: ["Borhani", "Traditional", "Digestif"]
  },
  {
    id: "jc-02",
    name: "Kacha Aam Mint Cooler (কাঁচা আমের শরবত)",
    category: "juices",
    price: 140,
    unit: "glass",
    isBestseller: true,
    image: "/images/fresh-juices.jpg",
    description: "Tangy raw mangoes roasted over hot charcoal, blended with crushed ice, fresh garden mint, pink Himalayan salt, and roasted cumin.",
    spiceLevels: ["Sweet & Tangy", "Extra Bit-Noon & Green Chili"],
    portions: [
      { name: "Regular Glass", extraPrice: 0 },
      { name: "Giant 500ml Cart Jar", extraPrice: 60 }
    ],
    tags: ["Raw Mango", "Summer Special", "Cold Pressed"]
  },
  {
    id: "jc-03",
    name: "Fresh Malta & Orange Citrus Burst",
    category: "juices",
    price: 160,
    unit: "glass",
    isBestseller: false,
    image: "/images/fresh-juices.jpg",
    description: "100% pure fresh-pressed sweet Malta and orange juice with zero added sugar or artificial preservatives, served chilled with pulp.",
    spiceLevels: ["Pure Natural"],
    portions: [
      { name: "Fresh Glass (350ml)", extraPrice: 0 },
      { name: "Cart Takeaway Bottle (500ml)", extraPrice: 70 }
    ],
    tags: ["100% Fresh", "Immunity Boost", "No Sugar Added"]
  },
  {
    id: "jc-04",
    name: "Strawberry Basil Fizz Mocktail",
    category: "juices",
    price: 180,
    unit: "glass",
    isBestseller: false,
    image: "/images/fresh-juices.jpg",
    description: "Crushed fresh strawberries muddled with holy basil, lime juice, sparkling soda water, and crushed crystal ice.",
    spiceLevels: ["Refreshing Sweet"],
    portions: [
      { name: "Chilled Glass", extraPrice: 0 }
    ],
    tags: ["Mocktail", "Sparkling", "Fruity"]
  },
  {
    id: "ds-01",
    name: "Traditional Earthen Matka Kulfi",
    category: "desserts",
    price: 120,
    unit: "clay matka",
    isBestseller: true,
    image: "/images/desserts.jpg",
    description: "Rich, dense, slow-reduced milk kulfi infused with saffron strands, crushed green cardamom, and roasted pistachios served in an earthen clay cup.",
    portions: [
      { name: "Single Matka", extraPrice: 0 },
      { name: "Pack of 4 Matkas (Family Box)", extraPrice: 320 }
    ],
    tags: ["Matka Kulfi", "Saffron", "Clay Pot"]
  },
  {
    id: "ds-02",
    name: "Royal Shahi Tukda with Rabri & Rose Petals",
    category: "desserts",
    price: 160,
    unit: "portion",
    isBestseller: true,
    image: "/images/desserts.jpg",
    description: "Ghee-crisped bread soaked in fragrant saffron sugar syrup, smothered with thick creamy malai rabri, roasted almond slivers, and edible dried rose petals.",
    portions: [
      { name: "Single Serving", extraPrice: 0 },
      { name: "Double Delight Platter", extraPrice: 120 }
    ],
    tags: ["Shahi Tukda", "Rabri", "Royal Treat"]
  },
  {
    id: "ds-03",
    name: "Warm Chocolate Lava Cake with Ice Cream",
    category: "desserts",
    price: 210,
    unit: "serving",
    isBestseller: false,
    image: "/images/desserts.jpg",
    description: "Decadent dark chocolate molten sponge cake with hot gooey center, paired with a scoop of creamy vanilla ice cream.",
    portions: [
      { name: "Single Lava Cake", extraPrice: 0 }
    ],
    tags: ["Chocolate Lava", "Molten", "Fusion"]
  }
];
