let dropRight = document.querySelectorAll(".drop-right");
let rightContent = document.querySelector(".drop-right-content");
let categoriesMenu = document.querySelector("#category-menu");

let categoryList = [
  "Computer and Accessories",
  "phone and Tablets",
  "Electronics",
  "Konga Fashion",
  "Home and Kitchen",
  "Baby, Kids and Toys",
  "Other Categories",
];

let unorderedList = document.createElement("ul");

categoryHtml = "";

let category = categoryList.map((item) => {
  return item;
});

// Categories List
category.forEach(function (item) {
  return (categoryHtml += `<li
  class="drop-right px-9 py-3 hover:text-red-700 hover:bg-white transition hover:delay-0 duration-300 ease-in-out cursor-pointer"
>${item}</li>`);
});
unorderedList.innerHTML = categoryHtml;
categoriesMenu.appendChild(unorderedList);

let computerMenus = [
  {
    id: "laptop",
    links: [
      "Mini Laptops and Notebooks",
      "Notebooks",
      "Ultrabooks",
      "Hybrid PCs",
      "Macbooks",
    ],
  },
  {
    id: "Desktop and Monitors",
    links: [
      "CPUs",
      "all in Ones",
      "Monitors",
      "UPS",
      "Servers",
      "Desktop Bundles",
    ],
  },
  {
    id: "Software",
    links: ["Office & Business", "Operating Systems", "Security & Utilities"],
  },
  {
    id: "Printers, Scanners & Accessories",
    links: ["Printers", "Scanners", "Inks, Toners & Cartridges"],
  },
  {
    id: "Wifi & Networking",
    links: ["Switches", "Routers", "Modems", "Networking Peripherals"],
  },
  {
    id: "Projectors",
    links: ["Office & Business", "Operating Systems", "Security & Utilities"],
  },
  {
    id: "Computer Accessories",
    links: [
      "Computer Peripherals",
      "Bags, Cases, Covers & Sleeves",
      "Laptop & Desktop Accessories",
      "Storage Devices",
    ],
  },
  { id: "PC Gaming", links: ["PC Games", "PC Gaming Accessories"] },
];

computerMenus.forEach(function (item) {
  let computerMenu = document.createElement("div");
  computerMenu.classList.add("right-content");
  computerMenu.setAttribute("id", item.id);
  computerMenu.innerHTML = `<h2 class="text-2xl font-bold text-gray-800 w-64 mr-10">${item.id}</h2>`;

  let computerMenuList = document.createElement("ul");
  let computerMenuLinks = item.links.map((item) => {
    return item;
  });

  let computerMenuLinksHtml = "";

  computerMenuLinks.forEach(function (item) {
    return (computerMenuLinksHtml += `<li class="list-content py-2 ">${item}</li>`);
  });

  computerMenuList.innerHTML = computerMenuLinksHtml;
  computerMenu.appendChild(computerMenuList);
  rightContent.appendChild(computerMenu);
  console.log(item.id);
});
