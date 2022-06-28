let categoriesMenu = document.querySelector("#category-menu");
// categories dropdown and second nav menu array
let categoryMenu = [
  "Computer and Accessories",
  "Phone and Tablets",
  "Electronics",
  "Konga Fashion",
  "Home and Kitchen",
  "Baby, Kids and Toys",
  "Other Categories",
];

// computer and accessories dropdown menu
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
    id: "Computer Accessories",
    links: [
      "Computer Peripherals",
      "Bags, Cases, Covers & Sleeves",
      "Laptop & Desktop Accessories",
      "Storage Devices",
    ],
  },
  {
    id: "Printers, Scanners & Accessories",
    links: ["Printers", "Scanners", "Inks, Toners & Cartridges"],
  },
  {
    id: "Wifi & Networking",
    links: ["Switches", "Routers", "Modems", "Networking Peripherals"],
  },
  { id: "PC Gaming", links: ["PC Games", "PC Gaming Accessories"] },

  {
    id: "Software",
    links: ["Office & Business", "Operating Systems", "Security & Utilities"],
  },
  {
    id: "Projectors",
    links: ["Office & Business", "Operating Systems", "Security & Utilities"],
  },
];

// phone and tablets dropdown menu
const phoneAndTabletMenu = [
  {
    id: "Mobile Phones",
    links: ["Smartphones", "Feature Phones"],
  },
  {
    id: "Mobile Phone Accessories",
    links: [
      "Cables",
      "Cases & Covers",
      "Screen Protectors",
      "Chargers & Power Banks",
      "Earphones & Headsets",
      "Smartwatches & Bands",
      "Clips, Holders & Stands",
      "Batteries",
    ],
  },
  { id: "Tablets", links: ["Android", "iOS", "Windows", "Other OS"] },
  {
    id: "Tablet Accessories",
    links: ["Cases & Covers", "Holders & Stands", "Other Accessories"],
  },
  {
    id: "Shop By Price",
    links: [
      "Up to 10,000",
      "Up to 20,000",
      "Up to 30,000",
      "Up to 40,000",
      "Up to 50,000",
      "Up to 60,000",
      "60,000 & Above",
    ],
  },
];

// Categories dropdown menu
let categoriesContainer = document.createElement("div");
categoriesContainer.setAttribute(
  "class",
  "flex categories-container flex-row-reverse justify-end"
);
categoriesContainer.setAttribute("style", "height: calc(100vh - 10.9375rem");
let allCategoriesList1 = document.createElement("ul");
allCategoriesList1.setAttribute("class", "categories-list overflow-y-auto");
allCategoriesList1.setAttribute("style", "width: 48%;");
categoryMenu.forEach(function (item) {
  // loop through the array and create a list item for each item
  let listItem = document.createElement("li");
  listItem.setAttribute(
    "class",
    "drop-right px-9 py-3 hover:text-red-700 hover:bg-white transition hover:delay-0 duration-300 ease-in-out cursor-pointer"
  );
  listItem.innerHTML = item;
  allCategoriesList1.appendChild(listItem);
  categoriesContainer.appendChild(allCategoriesList1);
  categoriesMenu.appendChild(categoriesContainer);

  let computerContainer = document.createElement("div");
  computerContainer.setAttribute(
    "class",
    "drop-right-menus hidden flex flex-wrap overflow-y-auto"
  );

  computerMenus.forEach(function (item) {
    let computerMenu = document.createElement("div");
    computerMenu.classList.add("right-content");
    computerMenu.setAttribute("id", item.id);
    computerMenu.innerHTML = `<h2 class="text-lg font-bold text-gray-800 w-64 mr-10">${item.id}</h2>`;

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
    computerContainer.appendChild(computerMenu); // append the computer menu to the computer container
  });

  if (item === "Computer and Accessories") {
    categoriesContainer.appendChild(computerContainer);
  }

  let phoneContainer = document.createElement("div");
  phoneContainer.setAttribute(
    "class",
    "drop-right-menus hidden flex flex-wrap"
  );
  phoneAndTabletMenu.forEach((items) => {
    let phoneTabMenu = document.createElement("div");
    phoneTabMenu.innerHTML = `<h2 class="text-lg font-bold text-gray-800 w-64 mr-10">${items.id}</h2>`;

    let phoneTabMenuList = document.createElement("ul");
    let phoneTabMenuLinks = items.links.map((item) => {
      return item;
    });

    let phoneTabMenuLinksHtml = "";

    phoneTabMenuLinks.forEach(function (item) {
      return (phoneTabMenuLinksHtml += `<li class="list-content py-2 ">${item}</li>`);
    });

    phoneTabMenuList.innerHTML = phoneTabMenuLinksHtml;
    phoneTabMenu.appendChild(phoneTabMenuList);
    phoneContainer.appendChild(phoneTabMenu);
  });

  if (item === "Phone and Tablets") {
    categoriesContainer.appendChild(phoneContainer);
  }
  // let sidesMenu = Array.from(document.querySelectorAll(".drop-right"));

  // let side = sidesMenu.map((item) => {
  //   return item;
  // });

  // side.forEach((sides) => {
  //   console.log(sides);
  //   sides.addEventListener("mouseenter", function () {
  //     console.log(sides.textContent);
  //     // console.log(this.nextElementSibling);
  //     if (sides.textContent === "Computer and Accessories") {
  //       computerContainer.classList.toggle("hidden");
  //     } else if (sides.textContent === "Phone and Tablets") {
  //       phoneContainer.classList.toggle("hidden");
  //     }
  //   });
  // });

  // Categories List Hover

  // listItem.addEventListener("mouseover", function (e) {
  //   console.log("over");
  //   if (item === "Computer and Accessories") {
  //     console.log(item);
  //     computerContainer.classList.toggle("hidden");
  //   } else if (e.target.innerHTML === "Phone and Tablets") {
  //     console.log(e.target.innerHTML);
  //     phoneContainer.classList.toggle("hidden");
  //   }
  //  else if (e.target.innerHTML === "Electronics") {
  //     console.log(e.target.innerHTML);
  //     electronicsContainer.classList.toggle("hidden");
  //   } else if (e.target.innerHTML === "Konga Fashion") {
  //     console.log(e.target.innerHTML);
  //     kongaFashionContainer.classList.toggle("hidden");
  //   } else if (e.target.innerHTML === "Home and Kitchen") {
  //     console.log(e.target.innerHTML);
  //     homeAndKitchenContainer.classList.toggle("hidden");
  //   } else if (e.target.innerHTML === "Baby, Kids and Toys") {
  //     console.log(e.target.innerHTML);
  //     babyAndKidsContainer.classList.toggle("hidden");
  //   } else if (e.target.innerHTML === "Other Categories") {
  //     console.log(e.target.innerHTML);
  //     otherCategoriesContainer.classList.toggle("hidden");
  //   }
  // });
  // listItem.addEventListener("mouseout", function (e) {
  //   console.log(e.target.innerHTML);
  //   console.log("out");
  //   if (e.target.innerHTML === "Computer and Accessories") {
  //     console.log("target");
  //     computerContainer.classList.remove("hidden");
  //   } else if (e.target.innerHTML === "Phone and Tablets") {
  //     console.log("target");
  //     phoneContainer.classList.remove("hidden");
  //   }
  // });
});

// Second level Nav dropdown menu for Computer and Accessories etc

let secondNav = document.querySelector("#second-level-nav"); // second level nav
let allCategoriesList2 = document.createElement("ul"); // second level nav ul element

allCategoriesList2.setAttribute("class", "flex");
categoryMenu.forEach(function (item) {
  // second level menu forEach loop to create li elements
  let listItem = document.createElement("li");
  listItem.setAttribute(
    "class",
    "dropdown relative px-9 py-3 hover:text-red-700 hover:bg-white transition hover:delay-0 duration-300 ease-in-out cursor-pointer"
  );
  listItem.innerHTML = item;
  allCategoriesList2.appendChild(listItem);
  secondNav.appendChild(allCategoriesList2);

  let computerContainer = document.createElement("div");
  computerContainer.setAttribute(
    "class",
    "absolute px-20 top-11 hidden bg-white flex flex-wrap"
  );
  computerContainer.setAttribute(
    "style",
    "width: calc(100vw - 18px); left: -182px;"
  );

  computerMenus.forEach(function (item) {
    let computerMenu = document.createElement("div");
    computerMenu.setAttribute("id", item.id);
    computerMenu.innerHTML = `<h2 class="text-lg font-bold text-gray-800 w-60 mr-5">${item.id}</h2>`;

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
    computerContainer.appendChild(computerMenu);
  });

  if (item === "Computer and Accessories") {
    listItem.appendChild(computerContainer);
  }

  let phoneContainer = document.createElement("div");
  phoneContainer.setAttribute(
    "class",
    "absolute px-20 top-11 hidden bg-white flex flex-wrap"
  );
  phoneContainer.setAttribute(
    "style",
    "width: calc(100vw - 18px); left: -394px;"
  );

  phoneAndTabletMenu.forEach((items) => {
    let phoneTabMenu = document.createElement("div");
    phoneTabMenu.innerHTML = `<h2 class="text-lg font-bold text-gray-800 w-60 mr-5">${items.id}</h2>`;

    let phoneTabMenuList = document.createElement("ul");
    let phoneTabMenuLinks = items.links.map((item) => {
      return item;
    });

    let phoneTabMenuLinksHtml = "";

    phoneTabMenuLinks.forEach(function (item) {
      return (phoneTabMenuLinksHtml += `<li class="list-content py-2 ">${item}</li>`);
    });

    phoneTabMenuList.innerHTML = phoneTabMenuLinksHtml;
    phoneTabMenu.appendChild(phoneTabMenuList);
    phoneContainer.appendChild(phoneTabMenu);
  });
  if (item === "Phone and Tablets") {
    listItem.appendChild(phoneContainer);
  }
});
// Dropdown event listeners for all dropdown menus ie first level and second level nav menus
let drops = document.querySelectorAll(".dropdown");

drops.forEach((drop) => {
  drop.addEventListener("mouseenter", function () {
    let dropContent = this.children[0];
    let dropContent2 = this.children[1];
    if (dropContent.classList.contains("hidden")) {
      dropContent.classList.toggle("hidden");
    } else if (dropContent2) {
      dropContent2.classList.toggle("hidden");
    }
  });

  drop.addEventListener("mouseleave", function () {
    let dropContent = this.children[0];
    let dropContent2 = this.children[1];

    if (dropContent.classList.contains("flex")) {
      dropContent.classList.toggle("hidden");
    } else if (dropContent2) {
      dropContent2.classList.add("hidden");
    }
  });
});

let sidesMenu = document.querySelectorAll(".drop-right");
let rightContent = document.querySelectorAll(".drop-right-menus");
rightContent.forEach((right) => {
  console.log(right);

  sidesMenu.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      console.log(item.textContent);
      // console.log(this.nextElementSibling);
      if (item.textContent === "Computer and Accessories") {
        computerContainer.classList.toggle("hidden");
      }
    });
  });
});
