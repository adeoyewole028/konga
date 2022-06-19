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
    id: "Printers, Scanners & Accessories",
    links: ["Printers", "Scanners", "Inks, Toners & Cartridges"],
  },
  {
    id: "Software",
    links: ["Office & Business", "Operating Systems", "Security & Utilities"],
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

let computerList = [computerMenus].map((i) => {
  return i;
});
console.log(computerList);

let content = document.querySelector("#content");
let contentUl = document.querySelector("#content-ul");

let computerHtml = "";
let computerLinks = "";
computerList.forEach(function (item) {
  let itemsId = item.map((i) => {
    return i.id;
  });
  let itemsLinks = item.map((i) => {
    return i.links;
  });
  itemsId.forEach(function (itemid) {
    console.log(itemid);
    return (computerHtml += `<h1 class="">${itemid}</h1>`);
  });
// To map the links today
  itemsLinks.forEach(function (itemlinks) {
    console.log(itemlinks);
    return (computerLinks += `<li class=""><a href="" ${itemlinks}</a></li>`);
  });
});
console.log(computerHtml);
content.innerHTML = computerHtml;
console.log(computerLinks);
contentUl.innerHTML = computerLinks;

let drops = [...Array(dropRight.length)].map((_, i) => {
  dropRight[i].addEventListener("mouseenter", function (e) {
    console.log(e);
    rightContent.classList.remove("hidden");
  });
});
