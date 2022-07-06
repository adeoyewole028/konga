let header = document.querySelector("header");
let nav = document.querySelector("nav");
let main = document.querySelector("main");
let footer = document.querySelector("footer");




// header Images
let headerContent = [
  "./images/k_travels2.png",
  "./images/kongafood.png",
  "./images/konga_pay.png",
  "./images/new_konga_drinks.png",
  "./images/konga_health.png",
  "./images/k_express2.png",
  "./images//new_konga_groceries.png",
];

let headerImages = document.createElement("ul");
headerImages.setAttribute("class", "header-images flex space-x-10 py-3");
headerContent.forEach((image) => {
  let imagesList = document.createElement("li");
  imagesList.setAttribute("class", "header-image w-24");
  let imageLink = document.createElement("a");
  imageLink.setAttribute("href", "#");
  let imageElement = document.createElement("img");
  imageElement.setAttribute("src", image);

  imageLink.appendChild(imageElement);
  imagesList.appendChild(imageLink);
  headerImages.appendChild(imagesList);
  header.appendChild(headerImages);
});

let topNavContent = [
  {
    name: "./images/logo.png",
    link: "#",
  },
  {
    name: "Store Locator",
    link: "#",
  },
  {
    name: "Sell on Konga",
    link: "#",
  },
  {
    name: "form",
  },
  {
    name: "Help",
    link: "#",

    subMenu: [
      { name: "FAQ", link: "#" },
      { name: "Contact Us", link: "#" },
      { name: "Track My Order", link: "#" },
    ],
  },
  {
    name: "Login/Sign Up",
    link: "#",
  },
  {
    name: "My Cart",
    link: "#",
  },
];

let topNav = document.createElement("ul");
topNav.setAttribute(
  "class",
  "top-nav flex justify-center text-white items-center px-8"
);
topNav.setAttribute("style", "background-color: #ed017f;");
topNavContent.forEach((item) => {
  let topNavList = document.createElement("li");
  topNavList.setAttribute(
    "class",
    "top-nav-item px-4 w-32 py-4 hover:text-red-700 hover:bg-white transition hover:delay-0 duration-300 ease-in-out cursor-pointer"
  );
  let topNavLink = document.createElement("a");

  if (item.name === "./images/logo.png") {
    topNavLink.setAttribute("href", item.link);
    topNavLink.setAttribute("class", "flex items-center");
    let topNavImage = document.createElement("img");
    topNavImage.setAttribute("src", item.name);
    topNavImage.setAttribute("class", "w-32 mr-16");
    topNavLink.appendChild(topNavImage);
    topNav.appendChild(topNavLink);
  } else if (item.name === "form") {
    topNavLink.setAttribute("href", item.link);
    topNavLink.setAttribute("class", "flex items-center");
    let topNavForm = document.createElement("form");
    topNavForm.setAttribute("class", "flex items-center justify-center");
    let topNavInput = document.createElement("input");
    topNavInput.setAttribute("type", "text");
    topNavInput.setAttribute(
      "class",
      "text-black outline-none rounded-l-md h-8 p-2"
    );
    topNavInput.setAttribute("style", "width: 500px;");
    topNavInput.setAttribute(
      "placeholder",
      "Search for products, brands and categories..."
    );
    let topNavButton = document.createElement("button");

    topNavButton.setAttribute("class", "bg-amber-500 w-10 h-8 rounded-r-md");
    let topNavIcon = document.createElement("span");
    topNavIcon.setAttribute("class", "iconify mr-auto ml-auto");
    topNavIcon.setAttribute("data-icon", "ant-design:search-outlined");
    topNavButton.appendChild(topNavIcon);
    topNavForm.appendChild(topNavInput);
    topNavForm.appendChild(topNavButton);
    topNav.appendChild(topNavForm);
  } else if (item.name === "Help") {
    let helpItem = document.createElement("div");
    helpItem.setAttribute(
      "class",
      "dropdown relative px-4 py-3.5 w-32 hover:text-red-700 hover:bg-white transition hover:delay-0 duration-300 ease-in-out cursor-pointer"
    );
    helpItem.innerHTML = `<span class="flex items-center"
    ><span
      class="iconify mr-1.5 font-black text-xl bg-stone-300 rounded-full"
      data-icon="bi:question"
    ></span>
    <span>${item.name}</span
    ><span
      class="iconify text-lg ml-1.5"
      data-icon="ep:arrow-down"
    ></span>
  </span>`;
    topNav.appendChild(helpItem);
    let topNavSubMenu = document.createElement("ul");
    topNavSubMenu.setAttribute(
      "class",
      "top-nav-sub-menu dropdown-content z-50 hidden flex flex-col absolute left-0 top-12 w-48 bg-white transition hover:delay-0 duration-300 ease-in-out"
    );
    item.subMenu.forEach((subItem) => {
      let topNavSubMenuList = document.createElement("li");
      topNavSubMenuList.setAttribute(
        "class",
        "top-nav-sub-menu-item px-5 py-3 text-black hover:text-red-700 hover:bg-slate-200"
      );
      let topNavSubMenuLink = document.createElement("a");
      topNavSubMenuLink.setAttribute("href", subItem.link);
      topNavSubMenuLink.innerHTML = subItem.name;
      topNavSubMenuList.appendChild(topNavSubMenuLink);
      topNavSubMenu.appendChild(topNavSubMenuList);
    });
    helpItem.appendChild(topNavSubMenu);
  } else if (item.name === "My Cart") {
    let cartItem = document.createElement("a");

    cartItem.innerHTML = `<a
    href=""
    class="flex items-center rounded-sm bg-emerald-500 hover:bg-green-600 h-10 px-5 py-4 transition hover:delay-0 duration-300 ease-in-out"
    ><span
      class="iconify mr-1.5 text-3xl fw-bold"
      data-icon="jam:shopping-cart"
    ></span>
    <span class="text-xs">My Cart</span>
    <span class="bg-white rounded-sm text-black px-2 ml-2">0</span>
  </a>`;
    topNav.appendChild(cartItem);
  } else {
    topNavLink.setAttribute("href", item.link);
    topNavLink.innerHTML = item.name;
    topNavList.appendChild(topNavLink);
    topNav.appendChild(topNavList);
  }
});
nav.appendChild(topNav);

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
    subMenu2: [
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
    subMenu3: [
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
    subMenu4: [
      {
        id: "TVs and Audio",
        link: [
          { name: "TVs", link: "#" },
          { name: "Audio", link: "#" },
        ],
      },
      {
        id: "Cameras",
        link: [
          { name: "Cameras", link: "#" },
          { name: "Accessories", link: "#" },
        ],
      },
      {
        id: "Video Games",
        link: [
          { name: "Video Games", link: "#" },
          { name: "Accessories", link: "#" },
        ],
      },
    ],
  },
  { name: "Konga Fashion", link: "#" },
  { name: "Home and Kitchen", link: "#" },
  { name: "Baby, Kids and Toys", link: "#" },
  { name: "Other Categories", link: "#" },
];

let subNav = document.createElement("div");
subNav.setAttribute("class", "sub-nav text-white bg-rose-900");
let subNavList = document.createElement("ul");
subNavList.setAttribute("class", "sub-nav-list flex");
categoryMenu.forEach((item) => {
  let subNavItem = document.createElement("li");
  subNavItem.setAttribute(
    "class",
    "sub-nav-item flex align-center dropdown relative px-9 py-3 hover:text-red-700 hover:bg-white transition hover:delay-0 duration-300 ease-in-out cursor-pointer"
  );
  let subNavSpan = document.createElement("span");
  subNavSpan.setAttribute("class", "flex");
  subNavSpan.innerHTML = item.name;
  if (item.name === "All Categories") {
    subNavSpan.innerHTML = `<span class="mr-2">${item.name}</span><span class= "iconify right-2 text-xl" data-icon = "charm:menu-hamburger"></span>`;
  }
  subNavItem.appendChild(subNavSpan);
  subNavList.appendChild(subNavItem);
  subNav.appendChild(subNavList);

  // if(item.name !== "All Categories"){
  //   let subNavDropdown = document.createElement("div");
  //   subNavDropdown.setAttribute("class", "sub-nav-dropdown absolute top-0 left-0 z-10 w-full h-full");
  //   let subNavDropdownList = document.createElement("ul");
  //   subNavDropdownList.setAttribute("class", "sub-nav-dropdown-list flex flex-col");
  //   let subNavDropdownItem = document.createElement("li");
  //   subNavDropdownItem.setAttribute("class", "sub-nav-dropdown-item flex");
  //   subNavDropdownItem.innerHTML = item.name;
  //   subNavDropdownList.appendChild(subNavDropdownItem);
  //   subNavDropdown.appendChild(subNavDropdownList);
  //   subNavItem.appendChild(subNavDropdown);
  // }

  if (item.subMenu1) {
    let subNavSubMenu = document.createElement("ul");
    subNavSubMenu.setAttribute(
      "class",
      "sub-nav-sub-menu dropdown-content z-50 hidden flex flex-col absolute left-0 top-10 w-64 bg-white transition hover:delay-0 duration-300 ease-in-out"
    );
    item.subMenu1.forEach((subItem) => {
      let subNavSubMenuList = document.createElement("li");
      subNavSubMenuList.setAttribute(
        "class",
        "sub-nav-sub-menu-item px-5 py-3 text-black hover:text-red-700 hover:bg-slate-200"
      );
      subNavSubMenuList.innerHTML = subItem.name;
      subNavSubMenu.appendChild(subNavSubMenuList);
    });
    subNavItem.appendChild(subNavSubMenu);
  }

  if (item.subMenu2) {
    let subNavSubMenu = document.createElement("ul");
    subNavSubMenu.setAttribute(
      "class",
      "sub-nav-sub-menu overflow-y-auto h-96 dropdown-content z-50 hidden flex flex-wrap absolute -left-44  top-11 bg-white transition hover:delay-0 duration-300 ease-in-out"
    );
    subNavSubMenu.style.width = "calc(100vw - 14px)";
    item.subMenu2.forEach((subItem) => {
      let subNavSubMenuList1 = document.createElement("li");
      let subNavSubMenuHead = document.createElement("h3");
      subNavSubMenuHead.setAttribute(
        "class",
        "sub-nav-sub-menu-head text-black text-lg font-bold py-3"
      );
      subNavSubMenuList1.setAttribute(
        "class",
        "sub-nav-sub-menu-item px-5 py-3 w-64 text-black"
      );

      subNavSubMenuHead.innerHTML = subItem.id;
      subNavSubMenuList1.appendChild(subNavSubMenuHead);
      subNavSubMenu.appendChild(subNavSubMenuList1);
      let subNavSubMenuListSubList = document.createElement("ul");
      subItem.link.forEach((subSubItem) => {
        let subNavSubMenuList2 = document.createElement("li");
        subNavSubMenuList2.setAttribute(
          "class",
          "py-3 text-black hover:text-red-700 hover:bg-slate-200"
        );
        subNavSubMenuList2.innerHTML = subSubItem.name;
        subNavSubMenuListSubList.appendChild(subNavSubMenuList2);
        subNavSubMenuList1.appendChild(subNavSubMenuListSubList);
      });
    });
    subNavItem.appendChild(subNavSubMenu);
  } else if (item.subMenu3) {
    let subNavSubMenu = document.createElement("ul");
    subNavSubMenu.setAttribute(
      "class",
      "sub-nav-sub-menu overflow-y-auto h-96 dropdown-content z-50 hidden flex flex-wrap absolute  top-11 bg-white transition hover:delay-0 duration-300 ease-in-out"
    );
    subNavSubMenu.setAttribute(
      "style",
      "width: calc(100vw - 13px); left: calc(-28.5vw);"
    );
    item.subMenu3.forEach((subItem) => {
      let subNavSubMenuList1 = document.createElement("li");
      let subNavSubMenuHead = document.createElement("h3");
      subNavSubMenuHead.setAttribute(
        "class",
        "sub-nav-sub-menu-head text-black text-lg font-bold py-3"
      );
      subNavSubMenuList1.setAttribute(
        "class",
        "sub-nav-sub-menu-item px-5 py-3 w-64 text-black"
      );

      subNavSubMenuHead.innerHTML = subItem.id;
      subNavSubMenuList1.appendChild(subNavSubMenuHead);
      subNavSubMenu.appendChild(subNavSubMenuList1);
      let subNavSubMenuListSubList = document.createElement("ul");
      subItem.link.forEach((subSubItem) => {
        let subNavSubMenuList2 = document.createElement("li");
        subNavSubMenuList2.setAttribute(
          "class",
          "py-3 text-black hover:text-red-700 hover:bg-slate-200"
        );
        subNavSubMenuList2.innerHTML = subSubItem.name;
        subNavSubMenuListSubList.appendChild(subNavSubMenuList2);
        subNavSubMenuList1.appendChild(subNavSubMenuListSubList);
      });
    });
    subNavItem.appendChild(subNavSubMenu);
  } else if (item.subMenu4) {
    let subNavSubMenu = document.createElement("ul");
    subNavSubMenu.setAttribute(
      "class",
      "sub-nav-sub-menu overflow-y-auto h-96 dropdown-content z-50 hidden flex flex-wrap absolute top-11 bg-white transition hover:delay-0 duration-300 ease-in-out"
    );
    subNavSubMenu.setAttribute(
      "style",
      "width: calc(100vw - 16px); left: calc(-41vw);"
    );
    item.subMenu4.forEach((subItem) => {
      let subNavSubMenuList1 = document.createElement("li");
      let subNavSubMenuHead = document.createElement("h3");
      subNavSubMenuHead.setAttribute(
        "class",
        "sub-nav-sub-menu-head text-black text-lg font-bold py-3"
      );
      subNavSubMenuList1.setAttribute(
        "class",
        "sub-nav-sub-menu-item px-5 py-3 w-64 text-black"
      );

      subNavSubMenuHead.innerHTML = subItem.id;
      subNavSubMenuList1.appendChild(subNavSubMenuHead);
      subNavSubMenu.appendChild(subNavSubMenuList1);
      let subNavSubMenuListSubList = document.createElement("ul");
      subItem.link.forEach((subSubItem) => {
        let subNavSubMenuList2 = document.createElement("li");
        subNavSubMenuList2.setAttribute(
          "class",
          "py-3 text-black hover:text-red-700 hover:bg-slate-200"
        );
        subNavSubMenuList2.innerHTML = subSubItem.name;
        subNavSubMenuListSubList.appendChild(subNavSubMenuList2);
        subNavSubMenuList1.appendChild(subNavSubMenuListSubList);
      });
    });
    subNavItem.appendChild(subNavSubMenu);
  }
});
nav.appendChild(subNav);

let drops = document.querySelectorAll(".dropdown");

drops.forEach((drop) => {
  drop.addEventListener("mouseenter", function () {
    let dropsMenu = this.children[1];
    if (this.classList.contains("dropdown")) {
      console.log(this.children[1]);
      dropsMenu.classList.toggle("hidden");
    }
  });

  drop.addEventListener("mouseleave", function () {
    let dropsMenu = this.children[1];
    console.log("mouseleave");
    if (this.classList.contains("dropdown")) {
      console.log(this.children[1]);
      dropsMenu.classList.toggle("hidden");
    }
  });
});

let sidesMenu = document.querySelectorAll(".drop-right");
let rightContent = document.querySelectorAll(".drop-right-menus");
sidesMenu.forEach((item, i) => {
  item.addEventListener("mouseenter", function () {
    if (rightContent[i].classList.contains("hidden")) {
      rightContent[i].classList.toggle("hidden");
    } else {
      rightContent[i].classList.toggle("hidden");
    }

    item.addEventListener("mouseleave", function () {
      rightContent[i].classList.toggle("hidden");
    });
  });
});

let section = document.createElement("section");
section.setAttribute("class", "banner-section flex");
let bannerContainer = document.createElement("div");
bannerContainer.setAttribute("style", "width: calc(100vw - 30%);");
bannerContainer.setAttribute(
  "class",
  "banner-container flex flex-col flex-none items-center relative"
);

let bannerCarousel = [
  "./images/flashSale.gif",
  "./images/samsung-treasure-hunt1.jpg",
  "./images/gaming.jpg",
  "./images/BuyNowPayLater.png",
  "./images/Mouka.jpg",
  "./images/AwoofDeal.jpg",
  "./images/BestDealPhone.gif",
  "./images/OneStopElectronics.gif",
];

carousel();

function carousel() {
  let bannerEl = document.createElement("div");
  bannerEl.setAttribute("class", "p-3");
  let previousBtn = document.createElement("button");
  let span = document.createElement("span");
  span.setAttribute("class", "iconify");
  span.setAttribute("data-icon", "dashicons:arrow-left-alt2");
  previousBtn.setAttribute(
    "class",
    "slider hidden absolute bg-white shadow-lg rounded-full p-5 left-0 translate-y-36 translate-x-10"
  );
  previousBtn.appendChild(span);
  bannerContainer.appendChild(previousBtn);

  let num = 0;

  previousBtn.addEventListener("click", () => {
    num--;
    if (num < 0) {
      num = bannerCarousel.length - 1;
    }
    bannerImage.setAttribute("src", bannerCarousel[num]);
  });

  let bannerImage = document.createElement("img");
  bannerImage.setAttribute("src", bannerCarousel[num]);
  bannerImage.setAttribute("class", "w");
  bannerEl.appendChild(bannerImage);
  bannerContainer.appendChild(bannerEl);
  section.appendChild(bannerContainer);
  main.appendChild(section);

  let nextBtn = document.createElement("button");
  let span2 = document.createElement("span");
  span2.setAttribute("class", "iconify");
  span2.setAttribute("data-icon", "dashicons:arrow-right-alt2");
  nextBtn.setAttribute(
    "class",
    "slider hidden absolute bg-white shadow-lg rounded-full p-5  right-0 translate-y-36 -translate-x-10"
  );
  nextBtn.appendChild(span2);
  bannerContainer.appendChild(nextBtn);

  nextBtn.addEventListener("click", () => {
    num++;
    if (num >= bannerCarousel.length) {
      num = 0;
    }
    bannerImage.setAttribute("src", bannerCarousel[num]);
  });
  let interval = setInterval(() => {
    num++;
    if (num >= bannerCarousel.length) {
      num = 0;
    } else {
      bannerImage.setAttribute("src", bannerCarousel[num]);
    }
  }, 3000);

  let slider = document.querySelectorAll(".slider");

  bannerContainer.addEventListener("mouseenter", () => {
    slider.forEach((slider) => {
      slider.classList.toggle("hidden");
    });
  });
  bannerContainer.addEventListener("mouseleave", () => {
    slider.forEach((slider) => {
      slider.classList.toggle("hidden");
    });
  });
}

let bannerAd = [
  {
    id: "banner-ad-1",
    image: "./images/foodBox.jpg",
    link: "#",
  },
  {
    id: "banner-ad-2",
    image: "./images/ACCESS.gif",
    link: "#",
  },
  {
    id: "banner-ad-3",
    image: "./images/boxpay.jpg",
    link: "#",
  },
  {
    id: "banner-ad-4",
    image: "./images/edo.gif",
    link: "#",
  },
];

let bannerAdContainer = document.createElement("div");
bannerAdContainer.setAttribute("class", "flex  flex-wrap");

bannerAd.forEach((ad) => {
  //for each ad in the array
  let adEl = document.createElement("div");
  adEl.setAttribute("class", "w-1/2 p-3");
  let adImage = document.createElement("img");
  adImage.setAttribute("src", ad.image);
  adImage.setAttribute("class", "w-full rounded-md");
  let adLink = document.createElement("a");
  adLink.setAttribute("href", ad.link);
  adLink.appendChild(adImage);
  adEl.appendChild(adLink);
  bannerAdContainer.appendChild(adEl);
});
section.appendChild(bannerAdContainer);

let otherServices = [
  {
    id: "other-services-1",
    image: "./images/blog.png",
    link: "#",
  },
  {
    id: "other-services-2",
    image: "./images/payBills.png",
    link: "#",
  },
  {
    id: "other-services-3",
    image: "./images/freeDelivery.png",
    link: "#",
  },
  {
    id: "other-services-4",
    image: "./images/offlineStores.png",
    link: "#",
  },
  {
    id: "other-services-5",
    image: "./images/brandStores.png",
    link: "#",
  },
  {
    id: "other-services-6",
    image: "./images/bookFlight.png",
    link: "#",
  },
];

function renderServices(services) {
  let container = document.createElement("div");
  container.setAttribute("class", "flex flex-wrap");
  services.forEach((service) => {
    let serviceEl = document.createElement("div");
    serviceEl.setAttribute("class", "w-1/6 p-2");
    let serviceImage = document.createElement("img");
    serviceImage.setAttribute("src", service.image);
    serviceImage.setAttribute("class", "w-full rounded-md p-2 bg-white");
    let serviceLink = document.createElement("a");
    serviceLink.setAttribute("href", service.link);
    serviceLink.appendChild(serviceImage);
    serviceEl.appendChild(serviceLink);
    container.appendChild(serviceEl);
  });
  main.appendChild(container);
}

renderServices(otherServices);

// Dropdown event listeners for all dropdown menus ie first level and second level nav menus

let todaysDeal = {
  header: {
    title: "Today's Deal",
    link: "#",
  },

  "item 1": {
    img: "./images/4gwifi.png",
    title: "Airtel 4G Pocket wifi",
    price: "$100",
    link: "#",
  },
  "Item 2": {
    img: "./images/maltina.png",
    title: "Maltina Non Alcoholic Drink",
    price: "$100",
    link: "#",
  },
  "Item 3": {
    img: "./images/indomie.png",
    title: "Indomie bellefull pack",
    price: "$100",
    link: "#",
  },
  "Item 4": {
    img: "./images/goldenpenny.png",
    title: "Golden Penny Twist",
    price: "$100",
    link: "#",
  },
  "Item 5": {
    img: "./images/peakmilk.png",
    title: "Peak Milk refill sachet",
    price: "$100",
    link: "#",
  },
  "Item 6": {
    img: "./images/milo.png",
    title: "Nestle Milo Activ-Go refill sachet",
    price: "$100",
    link: "#",
  },
};

function renderProducts(todaysDeal) {
  let todaysDealContainer = document.createElement("div");
  todaysDealContainer.setAttribute(
    "class",
    "todays-deal rounded-lg bg-rose-300 mb-5"
  );
  let heading = document.createElement("div");
  let headingTitle = document.createElement("h2");
  let headingLink = document.createElement("a");
  let headingLinkText = document.createElement("span");

  heading.setAttribute("class", "flex space-x-10 items-center p-5");
  headingTitle.setAttribute("class", "text-3xl font-bold text-gray-800");
  headingLink.setAttribute("class", "text-gray-800");
  headingLinkText.setAttribute("class", "text-gray-800");

  headingTitle.innerHTML = todaysDeal.header.title;
  headingLink.href = todaysDeal.header.link;
  headingLinkText.innerHTML = "See All Items";
  headingLink.appendChild(headingLinkText);
  heading.appendChild(headingTitle);
  heading.appendChild(headingLink);
  todaysDealContainer.appendChild(heading);
  main.appendChild(todaysDealContainer);

  let todaysDealItems = document.createElement("div");
  todaysDealItems.setAttribute(
    "class",
    "flex justify-center flex-wrap bg-white"
  );

  Object.keys(todaysDeal).forEach((item, i) => {
    if (item !== "header") {
      let todaysDealItem = document.createElement("div");
      todaysDealItem.setAttribute(
        "class",
        "sm:w-1/2 md:w-96 p-3 bg-white hover:shadow-2xl m-0.5"
      );
      let todaysDealItemImg = document.createElement("img");
      let todaysDealItemTitle = document.createElement("h3");
      let todaysDealItemPrice = document.createElement("p");
      let todaysDealItemLink = document.createElement("a");
      let titlePrice = document.createElement("div");
      titlePrice.setAttribute("class", "flex flex-col p-3");
      todaysDealItemImg.setAttribute("class", "w-24 h-24");
      todaysDealItemTitle.setAttribute(
        "class",
        "text-xl font-bold text-gray-800"
      );
      todaysDealItemPrice.setAttribute("class", "text-gray-800");
      todaysDealItemLink.setAttribute("class", "flex");
      todaysDealItemImg.src = todaysDeal[item].img;
      todaysDealItemTitle.innerHTML = todaysDeal[item].title;
      todaysDealItemPrice.innerHTML = todaysDeal[item].price;
      todaysDealItemLink.href = todaysDeal[item].link;

      todaysDealItem.appendChild(todaysDealItemLink);
      todaysDealItemLink.appendChild(todaysDealItemImg);

      titlePrice.appendChild(todaysDealItemTitle);
      titlePrice.appendChild(todaysDealItemPrice);
      todaysDealItemLink.appendChild(titlePrice);

      todaysDealItems.appendChild(todaysDealItem);
    }
  });
  todaysDealContainer.appendChild(todaysDealItems);
  main.appendChild(todaysDealContainer);
}

renderProducts(todaysDeal);

let sponsoredProducts = {
  header: {
    title: "Sponsored Products",
  },

  "item 1": {
    img: "./images/4gwifi.png",
    title: "Six packs complete Home gym",
    price: "$100",
    link: "#",
  },
  "Item 2": {
    img: "./images/maltina.png",
    title: "Exercise bike Confidence",
    price: "$100",
    link: "#",
  },
  "Item 3": {
    img: "./images/indomie.png",
    title: "Foam Comfy Pillow",
    price: "$100",
    link: "#",
  },
  "Item 4": {
    img: "./images/goldenpenny.png",
    title: "Men 6 in 1 plain office",
    price: "$100",
    link: "#",
  },
  "Item 5": {
    img: "./images/peakmilk.png",
    title: "Men 4 in 1 Polo T-shirt",
    price: "$100",
    link: "#",
  },
  "Item 6": {
    img: "./images/milo.png",
    title: "Fitness Yoga Belt Resistance",
    price: "$100",
    link: "#",
  },
  "Item 7": {
    img: "./images/milo.png",
    title: "Remote Control Storage",
    price: "$100",
    link: "#",
  },
  "Item 8": {
    img: "./images/milo.png",
    title: "Nashua Upright Exercise Bike",
    price: "$100",
    link: "#",
  },
  "Item 9": {
    img: "./images/milo.png",
    title: "Foam Cozy Pillow",
    price: "$100",
    link: "#",
  },
  "Item 10": {
    img: "./images/milo.png",
    title: "AB Roller Wheel with Mat",
    price: "$100",
    link: "#",
  },
};

function renderSponsors(sponsoredProducts) {
  let sponsoredProductsContainer = document.createElement("div");
  sponsoredProductsContainer.setAttribute(
    "class",
    "sponsored-products rounded-lg bg-rose-300 mb-5"
  );
  let heading = document.createElement("div");
  let headingTitle = document.createElement("h2");
  let headingLink = document.createElement("a");
  let headingLinkText = document.createElement("span");

  heading.setAttribute("class", "flex space-x-10 items-center p-5");
  headingTitle.setAttribute("class", "text-3xl font-bold text-gray-800");
  headingLink.setAttribute("class", "text-gray-800");
  headingLinkText.setAttribute("class", "text-gray-800");

  if (sponsoredProducts.header.link === undefined) {
    headingTitle.innerHTML = sponsoredProducts.header.title;
    heading.appendChild(headingTitle);
    sponsoredProductsContainer.appendChild(heading);
  } else {
    headingTitle.innerHTML = sponsoredProducts.header.title;
    headingLink.href = sponsoredProducts.header.link;
    headingLinkText.innerHTML = "See All Items";
    headingLink.appendChild(headingLinkText);
    heading.appendChild(headingTitle);
    heading.appendChild(headingLink);
    sponsoredProductsContainer.appendChild(heading);
  }

  let sponsoredProductsItems = document.createElement("div");
  sponsoredProductsItems.setAttribute(
    "class",
    "flex space-x-5 p-5 overflow-x-auto bg-white"
  );

  Object.keys(sponsoredProducts).forEach((item, i) => {
    if (item !== "header") {
      let sponsoredProductsItem = document.createElement("div");

      sponsoredProductsItem.setAttribute(
        "class",
        "p-3 bg-white hover:shadow-2xl"
      );
      let sponsoredProductsItemImg = document.createElement("img");
      let sponsoredProductsItemTitle = document.createElement("h3");
      let sponsoredProductsItemPrice = document.createElement("p");
      let sponsoredProductsItemLink = document.createElement("a");
      let titlePrice = document.createElement("div");
      titlePrice.setAttribute("class", "flex flex-col p-3");
      sponsoredProductsItemImg.setAttribute("class", "w-40 h-40");
      sponsoredProductsItemTitle.setAttribute("class", "text-xl font-bold");
      sponsoredProductsItemPrice.setAttribute("class", "text-gray-800");
      sponsoredProductsItemLink.setAttribute("class", "flex flex-col w-64");
      sponsoredProductsItemImg.src = sponsoredProducts[item].img;
      sponsoredProductsItemTitle.innerHTML = sponsoredProducts[item].title;
      sponsoredProductsItemPrice.innerHTML = sponsoredProducts[item].price;
      sponsoredProductsItemLink.href = sponsoredProducts[item].link;

      sponsoredProductsItem.appendChild(sponsoredProductsItemLink);
      sponsoredProductsItemLink.appendChild(sponsoredProductsItemImg);

      titlePrice.appendChild(sponsoredProductsItemTitle);
      titlePrice.appendChild(sponsoredProductsItemPrice);
      sponsoredProductsItemLink.appendChild(titlePrice);

      sponsoredProductsItems.appendChild(sponsoredProductsItem);
    }
  });
  sponsoredProductsContainer.appendChild(sponsoredProductsItems);
  main.appendChild(sponsoredProductsContainer);
}

renderSponsors(sponsoredProducts);

let categories = [
  {
    id: "other-categories-1",
    image: "./images/laptop.png",
    link: "#",
  },
  {
    id: "other-categories-2",
    image: "./images/smartphones.png",
    link: "#",
  },
  {
    id: "other-categories-3",
    image: "./images/beauty.png",
    link: "#",
  },
  {
    id: "other-categories-4",
    image: "./images/provisions.png",
    link: "#",
  },
  {
    id: "other-categories-5",
    image: "./images/video.png",
    link: "#",
  },
  {
    id: "other-categories-6",
    image: "./images/ma.png",
    link: "#",
  },
];

renderServices(categories);

let recommendedProducts = {
  header: {
    title: "Recommended for you",
    link: "#",
  },

  "item 1": {
    img: "./images/kongaCourier.png",
    title: "Kong Courier bag Large",
    price: "$100",
    link: "#",
  },
  "Item 2": {
    img: "./images/Milo2.png",
    title: "Nestle Milo 20g",
    price: "$100",
    link: "#",
  },
  "Item 3": {
    img: "./images/hpLaptop.png",
    title: "HP 255 g Laptop",
    price: "$100",
    link: "#",
  },
  "Item 4": {
    img: "./images/mtn4g.png",
    title: "MTN 4G LTE Mifi",
    price: "$100",
    link: "#",
  },
  "Item 5": {
    img: "./images/devon.png",
    title: "Devon Vegetable Oil",
    price: "$100",
    link: "#",
  },
  "Item 6": {
    img: "./images/jameson.png",
    title: "Jameson Irish Whiskey",
    price: "$100",
    link: "#",
  },
};

renderProducts(recommendedProducts);

let phoneBudget = [{ img: "./images/phoneBudget.png", link: "#" }];

phoneBudget.forEach((item) => {
  let phoneBudgetContainer = document.createElement("div");
  phoneBudgetContainer.setAttribute(
    "class",
    "phone-budget rounded-lg bg-white mb-5"
  );
  let phoneBudgetImg = document.createElement("img");
  phoneBudgetImg.setAttribute("class", "w-full h-full rounded-lg p-3");
  phoneBudgetImg.src = item.img;

  let phoneBudgetLink = document.createElement("a");
  phoneBudgetLink.setAttribute("class", "rounded-lg");
  phoneBudgetLink.href = item.link;
  phoneBudgetLink.appendChild(phoneBudgetImg);

  phoneBudgetContainer.appendChild(phoneBudgetLink);
  main.appendChild(phoneBudgetContainer);
});

let savingBar = [
  { img: "./images/saveMore.png", link: "#" },
  { img: "./images/barShop.png", link: "#" },
];

let savingBarContainer = document.createElement("div");
savingBar.forEach((item) => {
  savingBarContainer.setAttribute(
    "class",
    "saving-bar flex rounded-lg bg-white mb-5"
  );
  let savingBarImg = document.createElement("img");
  savingBarImg.setAttribute("class", "w-full h-full rounded-lg p-3");
  savingBarImg.src = item.img;

  let savingBarLink = document.createElement("a");
  savingBarLink.href = item.link;
  savingBarLink.appendChild(savingBarImg);

  savingBarContainer.appendChild(savingBarLink);
  main.appendChild(savingBarContainer);
});

let shopNow = [
  {
    link: "#",
    content: {
      img: "./images/furnish.png",
      title: "Home Furnishing",
      desc: "Get Up to 50% Off",
      action: "Shop Now",
    },
  },
  {
    link: "#",
    content: {
      img: "./images/fitness.png",
      title: "FITNESS TOOLS AND EQUIPMENTS",
      desc: "Get Fitness Equipment at amazing discounts",
      action: "Shop Now",
    },
  },
  {
    link: "#",
    content: {
      img: "./images/kids.png",
      title: "KIDS WEAR AND ACCESSORIES",
      desc: "Get all Kiddies Products at huge Discount",
      action: "Shop Now",
    },
  },
  {
    link: "#",
    content: {
      img: "./images/tv.png",
      title: "TOP DEALS ON TELEVISIONS",
      desc: "Get The TV you want with bargain deals",
      action: "Shop Now",
    },
  },
];

let shopNowContainer = document.createElement("div");
shopNowContainer.setAttribute(
  "class",
  "shop-now flex mb-5 space-x-10"
);
shopNow.forEach((item) => {
  let shopHolder = document.createElement("div");
  shopHolder.setAttribute("class", "shop-holder bg-white rounded-lg");

  shopHolder.innerHTML = `<div>
  <a href="${item.link}"><div class="shop-img rounded-lg"><img src="${item.content.img}" alt=""></div>
  <h3 class="shop-title font-bold pl-5 pt-5">${item.content.title}</h3>
  <div class="shop-desc pl-5 py-5 text-sm">${item.content.desc}</div>
  <div class="shop-action pb-5 text-rose-700 font-bold px-5 flex">${item.content.action}<span class="iconify self-center text-xs ml-2 mt-1" data-icon="dashicons:arrow-right-alt2"></span></div>
  </a>
  </div>`;
  shopNowContainer.appendChild(shopHolder);
  main.appendChild(shopNowContainer);
});

let partnersStore = [
  {
    id: 1,
    link: "#",
    img: "./images/hp.png",
  },
  {
    id: 2,
    link: "#",
    img: "./images/itec.png",
  },
  {
    id: 3,
    link: "#",
    img: "./images/intel.png",
  },
  {
    id: 4,
    link: "#",
    img: "./images/barcardi.png",
  },
  {
    id: 5,
    link: "#",
    img: "./images/tecs.png",
  },
  {
    id: 6,
    link: "#",
    img: "./images/uni.png",
  },
  {
    id: 7,
    link: "#",
    img: "./images/philip.png",
  },
  {
    id: 8,
    link: "#",
    img: "./images/coke.png",
  },
  {
    id: 9,
    link: "#",
    img: "./images/samsung.png",
  },
  {
    id: 10,
    link: "#",
    img: "./images/lenovo.png",
  },
  {
    id: 11,
    link: "#",
    img: "./images/nokia.png",
  },
  {
    id: 12,
    link: "#",
    img: "./images/apc.png",
  },
];

let partnersStoreContainer = document.createElement("div");
partnersStoreContainer.setAttribute(
  "class",
  "partners-store flex flex-wrap justify-center mb-5"
);
partnersStore.forEach((item) => {
  let partnersStoreHolder = document.createElement("div");
  partnersStoreHolder.setAttribute("class", "partners-store-holder h-full");
  let partnersStoreLink = document.createElement("a");
  partnersStoreLink.setAttribute("class", "partners-store-link");
  partnersStoreLink.href = item.link;

  let partnersStoreImg = document.createElement("img");
  partnersStoreImg.setAttribute("class", "h-full hover:shadow-lg");
  partnersStoreImg.setAttribute("style", "width: 218px");
  partnersStoreImg.src = item.img;

  partnersStoreLink.appendChild(partnersStoreImg);
  partnersStoreHolder.appendChild(partnersStoreLink);
  partnersStoreContainer.appendChild(partnersStoreHolder);
  main.appendChild(partnersStoreContainer);
});

let aboutKonga = [
  {
    title: "Konga Online Shopping in Nigeria - Best Shopping Site",
    desc: "Konga.com is Nigeria’s number one online Shopping destination. We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include Food and drinks, automotive and industrial, books, musical equipment, babies and kids items, sports and fitness, to mention a few. To make your shopping experience swift and memorable, there are also added services like gift vouchers, consumer promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping rates for certain products and with the bulk purchase option, you can enjoy low shipping rates, discounted prices and flexible payment. When you shop on our platform, you can pay with your debit card or via KongaPay, which is a convenient and secured payment solution. Get the best of lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly.",
  },
];

let aboutKongaContainer = document.createElement("div");
aboutKongaContainer.setAttribute(
  "class",
  "about-konga flex flex-wrap bg-white rounded-lg p-5 w-full justify-center mb-5"
);
aboutKonga.forEach((item) => {
  let aboutKongaHolder = document.createElement("div");
  aboutKongaHolder.setAttribute("class", "about-konga-holder h-full");
  let aboutKongaTitle = document.createElement("div");
  aboutKongaTitle.setAttribute("class", "about-konga-title py-3 font-bold");
  aboutKongaTitle.innerHTML = `<h2>${item.title}</h2>`;
  let aboutKongaDesc = document.createElement("div");
  aboutKongaDesc.setAttribute(
    "class",
    "about-konga-desc py-3 text-sm leading-7 text-slate-600"
  );
  aboutKongaDesc.innerHTML = `<p>${item.desc}</p>`;
  aboutKongaHolder.appendChild(aboutKongaTitle);
  aboutKongaHolder.appendChild(aboutKongaDesc);
  aboutKongaContainer.appendChild(aboutKongaHolder);
  main.appendChild(aboutKongaContainer);
});

let footerHead = [
  {
    id: 1,
    icon: "iconify",
    dataIcon: "dashicons:email",
    title: "EMAIL SUPPORT",
    desc: "help@konga.com",
  },
  {
    id: 2,
    icon: "iconify",
    dataIcon: "ci:phone",
    title: "PHONE SUPPORT",
    desc: "0708 063 5700, 0809 460 5555, 01 888 3435",
  },
  {
    id: 3,
    icon: "iconify",
    dataIcon: "bxl:whatsapp",
    title: "WHATSPAPP",
    desc: "0907 0038 400, 0809 460 5555",
  },
  {
    id: 4,
    title: "GET LATEST DEALS",
    desc: "Our best promotions sent to your inbox.",
  },
];

let footerHeadContainer = document.createElement("div");
footerHeadContainer.setAttribute(
  "class",
  "footer-head flex w-full bg-gray-800 py-3 text-gray-400 justify-center text-sm space-x-2"
);
let formEl = document.createElement("div");
formEl.innerHTML = `
  
  <form class="w-full"><input class="text-black outline-none rounded-l-md h-12 p-2 w-48" type="email" placeholder="Enter your email" /> <button class="bg-rose-500 h-12 p-2 rounded-r-md text-white absolute right-0 " type="submit">Subscribe</button></form>

  `;
footerHead.forEach((item) => {
  let footerHeadHolder = document.createElement("div");
  footerHeadHolder.setAttribute(
    "class",
    "footer-head-holder flex space-x-3 h-full align-center"
  );
  let footerHeadIcon = document.createElement("div");
  footerHeadIcon.setAttribute(
    "class",
    "footer-head-icon self-center text-black bg-white rounded-full  p-3"
  );
  if (item.id === 4) {
    footerHeadIcon.removeAttribute("class");
  }
  footerHeadIcon.innerHTML = `<i class="${item.icon}" data-icon="${item.dataIcon}"></i>`;
  let footerHeadTitle = document.createElement("div");
  footerHeadTitle.setAttribute("class", "footer-head-title font-bold");
  footerHeadTitle.innerHTML = `<h2>${item.title}</h2>`;
  let footerHeadDesc = document.createElement("div");
  footerHeadDesc.setAttribute(
    "class",
    "footer-head-desc text-sm leading-7 text-gray-400"
  );
  let summary = document.createElement("div");
  summary.setAttribute("class", "summary");
  footerHeadDesc.innerHTML = `<p>${item.desc}</p>`;
  footerHeadHolder.appendChild(footerHeadIcon);
  summary.appendChild(footerHeadTitle);
  summary.appendChild(footerHeadDesc);
  footerHeadHolder.appendChild(summary);
  footerHeadContainer.appendChild(footerHeadHolder);
  footerHeadContainer.appendChild(formEl);
  footer.appendChild(footerHeadContainer);
});

let footerMain = [
  {
    id: 1,
    title: "ABOUT KONGA",
    links: [
      {
        name: "Contact Us",
        link: "#",
      },
      {
        name: "About Us",
        link: "#",
      },
      {
        name: "Careers",
        link: "#",
      },
      {
        name: "Our Blog",
        link: "#",
      },
      {
        name: "Forum",
        link: "#",
      },
      {
        name: "Terms & Conditions",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "PAYMENT",
    links: [
      {
        name: "Konga Pay",
        link: "#",
      },
      {
        name: "Wallet",
        link: "#",
      },
      {
        name: "Verve",
        link: "#",
      },
      {
        name: "MaserCard",
        link: "#",
      },
      {
        name: "Visa",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "BUYING ON KONGA",
    links: [
      {
        name: "Buyer Safety Centre",
        link: "#",
      },
      {
        name: "FAQs",
        link: "#",
      },
      {
        name: "Delivery",
        link: "#",
      },
      {
        name: "Konga Return Policy",
        link: "#",
      },
      {
        name: "Digital Services",
        link: "#",
      },
      {
        name: "Bulk Purchase",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    title: "MORE INFO",
    links: [
      {
        name: "Site Map",
        link: "#",
      },
      {
        name: "Track My Order",
        link: "#",
      },
      {
        name: "Privacy Policy",
        link: "#",
      },
      {
        name: "Authentic Items Policy",
        link: "#",
      },
    ],
  },
  {
    id: 5,
    title: "MAKE MONEY ON KONGA",
    links: [
      {
        name: "Become a Konga Affiliate",
        link: "#",
      },
    ],
  },
  {
    id: 6,
    title: "DOWNLOAD AND CONNECT WITH US",
    links: [
      {
        name: "./images/logo.png",
        link: "#",
      },
      {
        name: "./images/logo.png",
        link: "#",
      },
    ],

    subTitle: "CONTACT US WITH",
    links: [
      {
        name: "./images/logo.png",
        link: "#",
      },
      {
        name: "./images/logo.png",
        link: "#",
      },
      {
        name: "./images/logo.png",
        link: "#",
      },
      {
        name: "./images/logo.png",
        link: "#",
      },
    ],
  },
];

let footerMainContainer = document.createElement("div");
footerMainContainer.setAttribute(
  "class",
  "footer-main flex w-full bg-black px-10 text-gray-400 justify-between text-sm mb-5"
);
footerMain.forEach((item) => {
  let footerMainHolder = document.createElement("div");
  footerMainHolder.setAttribute(
    "class",
    "footer-main-holder flex h-full align-center"
  );
  let footerMainTitle = document.createElement("div");
  footerMainTitle.setAttribute("class", "footer-main-title ");
  footerMainTitle.innerHTML = `<h2 class="py-5">${item.title}</h2>`;
  let footerMainLinks = document.createElement("div");
  footerMainLinks.setAttribute("class", "footer-main-links pb-4 space-y-4");
  item.links.forEach((link) => {
    let footerMainLink = document.createElement("div");
    footerMainLink.setAttribute("class", "footer-main-link");
    footerMainLink.innerHTML = `<a href="${link.link}">${link.name}</a>`;
    footerMainLinks.appendChild(footerMainLink);
  });
  footerMainTitle.appendChild(footerMainLinks);
  footerMainHolder.appendChild(footerMainTitle);
  footerMainContainer.appendChild(footerMainHolder);
});
footer.appendChild(footerMainContainer);



