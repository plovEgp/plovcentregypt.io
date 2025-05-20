// Food categories and items data
const categories = [
  {
    id: 1,
    name: "First Courses",
    nameArabic: "الأطباق الأولى",
    image: "/images/categories/first-courses.png",
    slug: "first-courses"
  },
  {
    id: 2,
    name: "Main Courses",
    nameArabic: "الأطباق الرئيسية",
    image: "/images/categories/main-courses.png",
    slug: "main-courses"
  },
  {
    id: 3,
    name: "Grill",
    nameArabic: "المشويات",
    image: "/images/categories/grill.png",
    slug: "grill"
  },
  {
    id: 4,
    name: "Salads",
    nameArabic: "السلطات",
    image: "/images/categories/salads.png",
    slug: "salads"
  },
  {
    id: 5,
    name: "Drinks",
    nameArabic: "المشروبات",
    image: "/images/categories/drinks.png",
    slug: "drinks"
  }
];

const foodItems = [
  // First courses
  {
    id: 1,
    name: "Uzbek Soup",
    nameArabic: "شوربة أوزبكية",
    description: "Traditional Uzbek soup with lamb and vegetables",
    image: "/images/food/uzbek-soup.jpg",
    weight: "400g",
    price: 180,
    category: 1
  },
  {
    id: 2,
    name: "Lagman",
    nameArabic: "لاغمان",
    description: "Hand-pulled noodle soup with beef and vegetables",
    image: "/images/food/lagman.jpg",
    weight: "450g",
    price: 220,
    category: 1
  },
  {
    id: 3,
    name: "Borscht",
    nameArabic: "بورشت",
    description: "Traditional beetroot soup with beef",
    image: "/images/food/borscht.jpg",
    weight: "400g",
    price: 190,
    category: 1
  },
  
  // Main courses
  {
    id: 4,
    name: "Plov",
    nameArabic: "بلوف",
    description: "Traditional Uzbek rice dish with lamb and carrots",
    image: "/images/food/plov.jpg",
    weight: "350g",
    price: 250,
    category: 2
  },
  {
    id: 5,
    name: "Manti",
    nameArabic: "مانتي",
    description: "Steamed dumplings filled with lamb and onions",
    image: "/images/food/manti.jpg",
    weight: "250g",
    price: 210,
    category: 2
  },
  {
    id: 6,
    name: "Beshmarmak",
    nameArabic: "بيشبارماك",
    description: "Flat noodles with horse meat and onion sauce",
    image: "/images/food/beshmarmak.jpg",
    weight: "300g",
    price: 260,
    category: 2
  },
  {
    id: 7,
    name: "Samsa",
    nameArabic: "سمسا",
    description: "Baked pastry filled with lamb and onions",
    image: "/images/food/samsa.jpg",
    weight: "120g",
    price: 150,
    category: 2
  },
  
  // Grill
  {
    id: 8,
    name: "Lamb Kebab",
    nameArabic: "كباب لحم الضأن",
    description: "Grilled lamb kebab with special spices",
    image: "/images/food/lamb-kebab.jpg",
    weight: "350g",
    price: 310,
    category: 3
  },
  {
    id: 9,
    name: "Chicken Kebab",
    nameArabic: "كباب دجاج",
    description: "Grilled chicken kebab with spices",
    image: "/images/food/chicken-kebab.jpg",
    weight: "300g",
    price: 260,
    category: 3
  },
  {
    id: 10,
    name: "Mixed Grill",
    nameArabic: "مشاوي مشكلة",
    description: "Assorted grilled meats with vegetables",
    image: "/images/food/mixed-grill.jpg",
    weight: "500g",
    price: 420,
    category: 3
  },
  
  // Salads
  {
    id: 11,
    name: "Achichuk",
    nameArabic: "أتشيتشوك",
    description: "Traditional Uzbek tomato and onion salad",
    image: "/images/food/achichuk.jpg",
    weight: "200g",
    price: 140,
    category: 4
  },
  {
    id: 12,
    name: "Vinaigrette",
    nameArabic: "فينيجريت",
    description: "Traditional Russian beetroot salad",
    image: "/images/food/vinaigrette.jpg",
    weight: "200g",
    price: 160,
    category: 4
  },
  {
    id: 13,
    name: "Carrot Salad",
    nameArabic: "سلطة الجزر",
    description: "Spicy Korean-style carrot salad",
    image: "/images/food/carrot-salad.jpg",
    weight: "150g",
    price: 130,
    category: 4
  },
  
  // Drinks
  {
    id: 14,
    name: "Green Tea",
    nameArabic: "شاي أخضر",
    description: "Traditional Uzbek green tea",
    image: "/images/food/green-tea.jpg",
    weight: "500ml",
    price: 90,
    category: 5
  },
  {
    id: 15,
    name: "Compote",
    nameArabic: "كومبوت",
    description: "Homemade fruit drink",
    image: "/images/food/compote.jpg",
    weight: "500ml",
    price: 100,
    category: 5
  },
  {
    id: 16,
    name: "Ayran",
    nameArabic: "عيران",
    description: "Traditional yogurt drink",
    image: "/images/food/ayran.jpg",
    weight: "300ml",
    price: 110,
    category: 5
  }
];

export { categories, foodItems };
