let header = document.querySelector("header");
let categoriesMenu = document.querySelector("#category-menu");

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
let main = document.querySelector("main");
let section = document.createElement("section");
section.setAttribute("class", "banner-section flex");
let bannerContainer = document.createElement("div");
bannerContainer.setAttribute("style", "width: calc(100vw - 30%);");
bannerContainer.setAttribute(
  "class",
  "banner-container flex flex-col flex-none items-center relative"
);

let bannerCarousel = [
  // {
  //   id: "banner-1",
  //   image: "./images/flashSale.gif",
  //   link: "#",
  // },
  // {
  //   id: "banner-2",
  //   image: "./images/samsung-treasure-hunt1.jpg",
  //   link: "#",
  // },
  // {
  //   id: "banner-3",
  //   image: "./images/gaming.jpg",
  //   link: "#",
  // },
  // {
  //   id: "banner-4",
  //   image: "./images/BuyNowPayLater.png",
  //   link: "#",
  // },
  // {
  //   id: "banner-5",
  //   image: "./images/Mouka.jpg",
  //   link: "#",
  // },
  // {
  //   id: "banner-6",
  //   image: "./images/AwoofDeal.jpg",
  //   link: "#",
  // },
  // {
  //   id: "banner-7",
  //   image: "./images/BestDealPhone.gif",
  //   link: "#",
  // },
  // {
  //   id: "banner-8",
  //   image: "./images/OneStopElectronics.gif",
  //   link: "#",
  // },
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

  // let bannerCarouselImages = document.createElement("ul");
  // bannerCarouselImages.setAttribute("class", "banner-carousel flex space-x-5");
  // bannerCarousel.forEach((image) => {
  //   let imagesList = document.createElement("li");
  //   imagesList.setAttribute("class", "banner-carousel-image");
  //   let imageLink = document.createElement("a");
  //   imageLink.setAttribute("href", "#");
  //   let imageElement = document.createElement("img");
  //   imageElement.setAttribute("src", image);
  //   imageElement.setAttribute("class", "rounded-full w-4 h-4");

  //   imageLink.appendChild(imageElement);
  //   imagesList.appendChild(imageLink);
  //   bannerCarouselImages.appendChild(imagesList);
  //   bannerContainer.appendChild(bannerCarouselImages);
  // });
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
// bannerAdContainer.setAttribute("style", "width: calc(100vw - 70%")
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

let otherServicesContainer = document.createElement("div");
otherServicesContainer.setAttribute("class", "services flex flex-wrap");
otherServices.forEach((service) => {
  //for each ad in the array
  let serviceEl = document.createElement("div");
  serviceEl.setAttribute("class", "w-1/6 p-2");
  let serviceImage = document.createElement("img");
  serviceImage.setAttribute("src", service.image);
  serviceImage.setAttribute("class", "rounded-md shadow-md p-2 bg-white");
  let serviceLink = document.createElement("a");
  serviceLink.setAttribute("href", service.link);
  serviceLink.appendChild(serviceImage);
  serviceEl.appendChild(serviceLink);
  otherServicesContainer.appendChild(serviceEl);
  main.appendChild(otherServicesContainer);
});

// Categories dropdown menu
let categoriesContainer = document.createElement("div");
categoriesContainer.setAttribute(
  "class",
  "flex categories-container flex-row-reverse justify-end"
);
categoriesContainer.setAttribute("style", "height: calc(100vh - 10.9375rem");
let allCategoriesList1 = document.createElement("ul");
allCategoriesList1.setAttribute(
  "class",
  "flex-none categories-list overflow-y-auto"
);
allCategoriesList1.setAttribute("style", "width: 300px;");
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
  // computerContainer.setAttribute("style", "width: 100%;");
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
  // phoneContainer.setAttribute("style", "width: 100%;");
  phoneContainer.setAttribute(
    "class",
    "drop-right-menus hidden flex flex-wrap overflow-y-auto ml-32"
  );
  phoneAndTabletMenu.forEach((items) => {
    let phoneTabMenu = document.createElement("div");
    phoneTabMenu.classList.add("right-content");
    phoneTabMenu.setAttribute("id", items.id);
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
