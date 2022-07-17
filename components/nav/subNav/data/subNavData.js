// categories dropdown and second nav menu array
let categoryMenu = [
  {
    name: "All Categories",
    subMenu1: [
      { name: "Computer and Accessories" },
      { name: "phones and Tablets" },
      { name: "Electronics" },
      { name: "Konga Fashion" },
      { name: "Home and Kitchen" },
      { name: "Baby, Kids and Toys" },
      { name: "Other Categories" },
    ],
  },
  {
    name: "Computer and Accessories",
    subMenu: [
      {
        id: "Laptops",
        link: [
          { name: "Mini Laptops and Notebooks", link: "#" },
          { name: "Notebooks", link: "#" },
          { name: "Ultrabooks", link: "#" },
          { name: "Hybrid PCs", link: "#" },
          { name: "Macbooks", link: "#" },
        ],
      },
      {
        id: "Desktops and Monitors",
        link: [
          { name: "CPUs", link: "#" },
          { name: "All in Ones", link: "#" },
          { name: "Monitors", link: "#" },
          { name: "UPS", link: "#" },
          { name: "Servers", link: "#" },
          { name: "Desktop Bundles", link: "#" },
        ],
      },
      {
        id: "Computer Accessories",
        link: [
          { name: "Computer Peripherals", link: "#" },
          { name: "Bags, Cases, Covers & Sleeves", link: "#" },
          { name: "Laptop & Desktop Accessories", link: "#" },
          { name: "Storage Devices", link: "#" },
        ],
      },
      {
        id: "Printers, Scanners & Accessories",
        link: [
          { name: "Printers", link: "#" },
          { name: "Scanners", link: "#" },
          { name: "Inks, Toners & Cartridges", link: "#" },
        ],
      },
      {
        id: "Wifi & Networking",
        link: [
          { name: "Switches", link: "#" },
          { name: "Routers", link: "#" },
          { name: "Modems", link: "#" },
          { name: "Networking Peripherals", link: "#" },
        ],
      },
      {
        id: "PC Gaming",
        link: [
          { name: "PC Games", link: "#" },
          { name: "PC Gaming Accessories", link: "#" },
        ],
      },
      {
        id: "Software",
        link: [
          { name: "Office & Business", link: "#" },
          {
            name: "Operating Systems",
            name: "Security & Utilities",
            link: "#",
          },
        ],
      },
      {
        id: "Projectors",
        link: [
          { name: "Switches", link: "#" },
          { name: "Routers", link: "#" },
          { name: "Modems", link: "#" },
          { name: "Networking Peripherals", link: "#" },
        ],
      },
    ],
  },
  {
    name: "Phones and Tablets",
    subMenu: [
      {
        id: "Smartphones",
        link: [
          { name: "Smartphones", link: "#" },
          { name: "Tablets", link: "#" },
          { name: "Smart Watches", link: "#" },
          { name: "Smart Bags", link: "#" },
          { name: "Smart Home", link: "#" },
        ],
      },
      {
        id: "Mobile Phone Accessories",
        link: [
          { name: "Cables", link: "#" },
          { name: "Cases & Covers", link: "#" },
          { name: "Screen Protectors", link: "#" },
          { name: "Chargers & Power Banks", link: "#" },
          { name: "Earphones & Headsets", link: "#" },
          { name: "Smartwatches & Bands", link: "#" },
          { name: "Clips, Holders & Stands", link: "#" },
          { name: "Batteries", link: "#" },
        ],
      },
      {
        id: "Tablets",
        link: [
          { name: "Android", link: "#" },
          { name: "iOS", link: "#" },
          { name: "Windows", link: "#" },
          { name: "Other OS", link: "#" },
        ],
      },
      {
        id: "Tablet Accessories",
        link: [
          { name: "Cases & Covers", link: "#" },
          { name: "Holders & Stands", link: "#" },
          { name: "Other Accessories", link: "#" },
        ],
      },
      {
        id: "Shop By Price",
        link: [
          { name: "Up to 10,000", link: "#" },
          { name: "Up to 20,000", link: "#" },
          { name: "Up to 30,000", link: "#" },
          { name: "Up to 40,000", link: "#" },
          { name: "Up to 50,000", link: "#" },
          { name: "Up to 60,000", link: "#" },
          { name: "60,000 & Above", link: "#" },
        ],
      },
    ],
  },
  {
    name: "Electronics",
    subMenu: [
      {
        id: "Televisions",
        link: [
          { name: "Smart TVs", link: "#" },
          { name: "LED TVs", link: "#" },
          { name: "Curved TVs", link: "#" },
          { name: "OLED TVs", link: "#" },
          { name: "Plasma TVs", link: "#" },
        ],
      },
      {
        id: "DVD Players and Recorders",
        link: [
          { name: "DVD Players", link: "#" },
          { name: "DVD Recorders", link: "#" },
        ],
      },
      {
        id: "Cameras",
        link: [
          { name: "Digital Cameras", link: "#" },
          { name: "Professional & SLR Cameras", link: "#" },
          { name: "Camcorders & Video Cameras", link: "#" },
          { name: "Camera Lenses & Accessories", link: "#" },
          { name: "PCCTV Cameras", link: "#" },
        ],
      },
      {
        id: "Accessories",
        link: [
          { name: "TV Audio", link: "#" },
          { name: "Headphones", link: "#" },
          { name: "Television Accessories", link: "#" },
          { name: "Other Accessories", link: "#" },
          { name: "Gaming Accessories", link: "#" },
        ],
      },
      {
        id: "Home Theatres & Audio Systems",
        link: [
          { name: "Home Theatre", link: "#" },
          { name: "HiFi Systems", link: "#" },
          { name: "MP3 Players & Speakers", link: "#" },
        ],
      },
      {
        id: "Games and Consoles",
        link: [
          { name: "PS4", link: "#" },
          { name: "PS3", link: "#" },
          { name: "Xbox One", link: "#" },
          { name: "Xbox 360", link: "#" },
          { name: "Nintendo Wii", link: "#" },
          { name: "Sony PSP", link: "#" },
          { name: "PS Vita", link: "#" },
          { name: "Nintendo 3DS", link: "#" },
        ],
      },
    ],
  },
  {
    name: "Konga Fashion",
    subMenu: [
      {
        id: "Women's Wear",
        link: [
          { name: "Tops", link: "#" },
          { name: "Trousers", link: "#" },
          { name: "Jumpsuits & Playsuits", link: "#" },
          { name: "Suits & Blazers", link: "#" },
          { name: "Skirts", link: "#" },
          { name: "Co-ordinates", link: "#" },
          { name: "Lingerie & Sleepwear", link: "#" },
          { name: "Ready to Wear", link: "#" },
        ],
      },
      {
        id: "Women's Shoes",
        link: [
          { name: "Ballerinas & Flats", link: "#" },
          { name: "Heels", link: "#" },
          { name: "Sandals & Slippers", link: "#" },
          { name: "Wedges", link: "#" },
          { name: "Sport Shoes", link: "#" },
          { name: "Shoes & Bags", link: "#" },
        ],
      },
      {
        id: "Women's Accessories",
        link: [
          { name: "Bags", link: "#" },
          { name: "Belts", link: "#" },
          { name: "Purses & Clutches", link: "#" },
          { name: "Wallets", link: "#" },
          { name: "Jewellery", link: "#" },
          { name: "Hats & Scarves", link: "#" },
        ],
      },
      {
        id: "Men's Wear",
        link: [
          { name: "Shirts", link: "#" },
          { name: "Polos", link: "#" },
          { name: "T-Shirts", link: "#" },
          { name: "Jeans", link: "#" },
          { name: "Trousers & Shorts", link: "#" },
          { name: "Suits, Blazers & Jackets", link: "#" },
          { name: "Pyjamas", link: "#" },
          { name: "Jerseys", link: "#" },
          { name: "Traditional Wear", link: "#" },
        ],
      },
      {
        id: "Men Shoes",
        link: [
          { name: "Casual Shoes", link: "#" },
          { name: "Formal Shoes", link: "#" },
          { name: "Slippers & Sandals", link: "#" },
          { name: "Shoe Care & Accessories", link: "#" },
        ],
      },
      {
        id: "Men's Accessories",
        link: [
          { name: "Belts & Wallets", link: "#" },
          { name: "Socks & Underwear", link: "#" },
          { name: "Caps & Hats", link: "#" },
          { name: "Jewellery", link: "#" },
          { name: "Bags", link: "#" },
          { name: "Ties & Cufflinks", link: "#" },
        ],
      },
      {
        id: "Watches",
        link: [
          { name: "Men's Watches", link: "#" },
          { name: "Women's Watches", link: "#" },
          { name: "Unisex Watches", link: "#" },
        ],
      },
      {
        id: "Fashion Bundles",
        link: [
          { name: "Women's Fashion Bundles", link: "#" },
          { name: "Men's Fashion Bundles", link: "#" },
          { name: "Xbox One", link: "#" },
          { name: "Xbox 360", link: "#" },
          { name: "Nintendo Wii", link: "#" },
          { name: "Sony PSP", link: "#" },
          { name: "PS Vita", link: "#" },
          { name: "Nintendo 3DS", link: "#" },
        ],
      },
      {
        id: "Style Finder for Women",
        link: [
          { name: "Monochrome", link: "#" },
          { name: "Floral", link: "#" },
          { name: "Bold in Black", link: "#" },
          { name: "9 to 5 Chic", link: "#" },
          { name: "Trending Now", link: "#" },
          { name: "Red Hot", link: "#" },
        ],
      },
      {
        id: "Style Finder for Men",
        link: [
          { name: "Monochrome", link: "#" },
          { name: "Prints", link: "#" },
          { name: "Wardrobe Basics", link: "#" },
          { name: "Men in Blue", link: "#" },
          { name: "Business Look", link: "#" },
        ],
      },
      {
        id: "Under 5K Shop",
        link: [
          { name: "Men's Fashion Under 5K", link: "#" },
          { name: "Women's Fashion Under 5K", link: "#" },
        ],
      },
      {
        id: "Wedding Shop",
        link: [
          { name: "Women's Wedding Shop", link: "#" },
          { name: "Men's Wedding Shop", link: "#" },
        ],
      },
    ],
  },
  {
    name: "Home and Kitchen",
    subMenu: [
      {
        id: "Large Appliances",
        link: [
          { name: "Air Conditioners & Coolers", link: "#" },
          { name: "Fans", link: "#" },
          { name: "Freezers", link: "#" },
          { name: "Washers & Dryers", link: "#" },
          { name: "Refrigerators", link: "#" },
          { name: "Cookers & Ovens", link: "#" },
          { name: " Water Dispensers", link: "#" },
          { name: "Vacuum Cleaners", link: "#" },
        ],
      },
      {
        id: "Small Appliances",
        link: [
          { name: "Blenders, Juicers & Mixers", link: "#" },
          { name: "Hot Plates & Burners", link: "#" },
          { name: "Irons & Steamers", link: "#" },
          { name: "Processors & Mincers", link: "#" },
          { name: "Toasters & Sandwich Makers", link: "#" },
          { name: "Deep Fryers & Rice Cookers", link: "#" },
          { name: "Electric Kettles", link: "#" },
          { name: "Microwaves", link: "#" },
          { name: "Yam Pounder", link: "#" },
        ],
      },
      {
        id: "Home Furnishings",
        link: [
          { name: "Bed & Bathroom Furnishings", link: "#" },
          { name: "Curtains & Blinds", link: "#" },
          { name: "Decor", link: "#" },
          { name: "Light Fixtures", link: "#" },
          { name: "Rugs & Carpets", link: "#" },
          { name: "Housekeeping & Pet Supplies", link: "#" },
        ],
      },
      {
        id: "Kitchen & Dining",
        link: [
          { name: "Cook and Bakeware", link: "#" },
          { name: "Dining", link: "#" },
          { name: "Kitchen Utensils", link: "#" },
          { name: "Cooker Hoods & Ventilators", link: "#" },
        ],
      },
      {
        id: "Top Brands",
        link: [
          { name: "LG", link: "#" },
          { name: "Samsung", link: "#" },
          { name: "Polystar", link: "#" },
          { name: "Scanfrost", link: "#" },
          { name: "Hisense", link: "#" },
          { name: "Saisho", link: "#" },
          { name: "Haier Thermocool", link: "#" },
          { name: "Master Chef", link: "#" },
        ],
      },
      {
        id: "Furniture",
        link: [
          { name: "Living Room Furniture", link: "#" },
          { name: "Bedroom Furniture", link: "#" },
          { name: "Office Furniture", link: "#" },
          { name: "Kitchen & Dining Furniture", link: "#" },
        ],
      },
      {
        id: "Others",
        link: [
          { name: "Rain Boots & Raincoats", link: "#" },
          { name: "Gas Cylinder & Accessories", link: "#" },
          { name: "Towel Racks", link: "#" },
          { name: "Garment Steamers", link: "#" },
        ],
      },
    ],
  },
  {
    name: "Baby, Kids and Toys",
    subMenu: [
      {
        id: "Fashion for Girls",
        link: [
          { name: "Sets", link: "#" },
          { name: "Dresses", link: "#" },
          { name: "Tops, Jackets, & Sweatshirts", link: "#" },
          { name: "Denim, Trousers & Leggings", link: "#" },
          { name: "Underwear & Socks", link: "#" },
          { name: "Watches", link: "#" },
          { name: "Shoes", link: "#" },
          { name: "Sleepwear", link: "#" },
          { name: "Bodysuits & Playsuits", link: "#" },
        ],
      },
      {
        id: "Fashion for Boys",
        link: [
          { name: " Polos & T-Shirts", link: "#" },
          { name: "Sets", link: "#" },
          { name: "Watches", link: "#" },
          { name: "Denim & Trousers", link: "#" },
          { name: "Bodysuits & Playsuits", link: "#" },
          { name: "Sleepwear", link: "#" },
          { name: "Underwear & Socks", link: "#" },
          { name: "Shoes", link: "#" },
          { name: "Shirts", link: "#" },
        ],
      },
      {
        id: "Baby Essentials",
        link: [
          { name: "Bibs & Burp Cloths", link: "#" },
          { name: "Bottle Feeding", link: "#" },
          { name: "Breastfeeding", link: "#" },
          { name: "Pacifiers & Teethers", link: "#" },
          { name: " Baby Food & Formula", link: "#" },
          { name: "Feeding & Nursing", link: "#" },
        ],
      },
      {
        id: "Maternity",
        link: [
          { name: "Maternity Tops & Jackets", link: "#" },
          { name: "Maternity Dresses", link: "#" },
          { name: "Maternity Trousers & Skirts", link: "#" },
          { name: "Maternity Underwear", link: "#" },
          { name: "Maternity Accessories", link: "#" },
        ],
      },
      {
        id: "School Store",
        link: [
          { name: "Bags & Backpacks", link: "#" },
          { name: "Lunchboxes & Waterbottles", link: "#" },
          { name: "School Uniform & Accessories", link: "#" },
          { name: "School Shoes", link: "#" },
        ],
      },
      {
        id: "Travel & Safety Gear",
        link: [
          { name: "Car Seats, Strollers & Carriers", link: "#" },
          { name: "Baby Monitors & Safety Gates", link: "#" },
          { name: "Mobile Beds & Nets", link: "#" },
          { name: "High Chairs & Booster Seats", link: "#" },
        ],
      },
      {
        id: "Diapering & Daily Care",
        link: [
          { name: "Daily Care", link: "#" },
          { name: "Bathtime Essentials", link: "#" },
          { name: "Diapers & Baby Wipes", link: "#" },
          { name: "Diaper Bags & Changing Mats", link: "#" },
          { name: "Potty Training", link: "#" },
          { name: "Co-ordinates", link: "#" },
          { name: "Lingerie & Sleepwear", link: "#" },
          { name: "Ready to Wear", link: "#" },
        ],
      },
      {
        id: "Kids' Beddings & Decor",
        link: [
          { name: "Bedding", link: "#" },
          { name: "Décor Accessories", link: "#" },
          { name: "Furniture", link: "#" },
        ],
      },
      {
        id: "Toys & Activities",
        link: [
          { name: "Tablets for Kids", link: "#" },
          { name: "Educational Toys", link: "#" },
          { name: "Activities", link: "#" },
          { name: "Bicycles & Ride On", link: "#" },
          { name: "Bouncers, Rockers & Swingers", link: "#" },
          { name: "Games & Puzzles", link: "#" },
          { name: "Play Pens & Play Mats", link: "#" },
          { name: "Party Store", link: "#" },
        ],
      },
    ],
  },
  {
    name: "Other Categories",
    subMenu: [
      {
        id: "Beauty, Health & Personal Care",
        link: [
          { name: "Makeup", link: "#" },
          { name: "Fragrances", link: "#" },
          { name: "Hair Centre", link: "#" },
          { name: "Health", link: "#" },
          { name: "Personal Care", link: "#" },
          { name: "Skin Care", link: "#" },
          { name: "Sexual Wellness", link: "#" },
          { name: "Contraceptives", link: "#" },
          { name: "Other Contraceptives & Lubricants", link: "#" },
        ],
      },
      {
        id: "Sports and Fitness",
        link: [
          { name: "Fitness", link: "#" },
          { name: "Outdoor & Indoor Games", link: "#" },
          { name: "Sportswear", link: "#" },
          { name: "Football", link: "#" },
          { name: "Swimming", link: "#" },
          { name: "Boxing", link: "#" },
          { name: "Basketball", link: "#" },
        ],
      },
      {
        id: "Groceries",
        link: [
          { name: "Beverages", link: "#" },
          { name: "Food", link: "#" },
          { name: "Frozen Food", link: "#" },
        ],
      },
      {
        id: "Books & Media Library",
        link: [
          { name: "Books", link: "#" },
          { name: "Musical Equipment", link: "#" },
          { name: "Keyboard, Pianos & Drums", link: "#" },
          { name: "Stage, Studio & Recording Equipment", link: "#" },
          { name: "Wind Instruments", link: "#" },
          { name: "String Instruments", link: "#" },
          { name: "Audio Books", link: "#" },
          { name: "African Tales", link: "#" },
        ],
      },
      {
        id: "Alcoholic Beverages",
        link: [
          { name: "Wines", link: "#" },
          { name: "Spirits", link: "#" },
          { name: "Liqueurs & Creams", link: "#" },
          { name: "Whiskey", link: "#" },
          { name: "Champagne", link: "#" },
        ],
      },
      {
        id: "Office & School Supplies",
        link: [
          { name: "Greeting Cards", link: "#" },
          { name: "School Supplies", link: "#" },
          { name: "Office Supplies", link: "#" },
          { name: "Build Your Office", link: "#" },
        ],
      },
      {
        id: "Generators & Power Solutions",
        link: [
          { name: "Generators & Accessories", link: "#" },
          { name: "Inverters", link: "#" },
          { name: "UPS & Surge Protectors", link: "#" },
          { name: "Solar & Alternative Energy", link: "#" },
        ],
      },
      {
        id: "Automotive",
        link: [
          { name: "Automotive Tools & Accessories", link: "#" },
          { name: "Safety and Security", link: "#" },
          { name: "Autocare & Maintenance", link: "#" },
          { name: "Tyres & Batteries", link: "#" },
          { name: "Replacement Parts", link: "#" },
          { name: "Hand & Power Tools", link: "#" },
        ],
      },
      {
        id: "Building & Industrial",
        link: [
          { name: "Sewing Machines & Accessories", link: "#" },
          { name: "Tools", link: "#" },
          { name: "Plumbing Materials", link: "#" },
          { name: "Construction Materials", link: "#" },
          { name: "Paints", link: "#" },
          { name: "Electrical Fittings", link: "#" },
        ],
      },
      {
        id: "Agriculture",
        link: [
          { name: "Seeds", link: "#" },
          { name: "Fertilizers", link: "#" },
          { name: "Pesticides & Herbicides", link: "#" },
          { name: "Farm Machinery & Equipments", link: "#" },
          { name: "Poultry", link: "#" },
        ],
      },
    ],
  },
];

export default categoryMenu;
