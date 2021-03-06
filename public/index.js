import headerContent from "../components/head/data/headerContent.js";
import HeaderImages from "../components/head/Header.js";
import navData from "../components/nav/topNav/data/navData.js";
import TopNav from "../components/nav/topNav/Nav.js";
import Mobile from "../components/nav/topNav/MobileNav.js";
import SubNavData from "../components/nav/subNav/data/subNavData.js";
import SubNav from "../components/nav/subNav/SubNav.js";
import MobileSubNav from "../components/nav/subNav/MobileSubNav.js";

let header = document.querySelector("header");
let nav = document.querySelector("nav");
let main = document.querySelector("main");
let footer = document.querySelector("footer");

header.appendChild(HeaderImages(headerContent));
nav.appendChild(Mobile());
nav.appendChild(TopNav(navData));
nav.appendChild(SubNav(SubNavData));
nav.appendChild(MobileSubNav());


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
section.setAttribute(
  "class",
  "banner-section flex flex-col md:flex-row md:pb-3"
);
let bannerContainer = document.createElement("div");
// display flex and flex col to position select buttons in the banner div
bannerContainer.setAttribute(
  "class",
  "banner-container flex-none flex-col flex items-center relative md:basis-9/12"
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
  bannerEl.setAttribute("class", "md:pb md:pr-3");
  let previousBtn = document.createElement("button");
  let span = document.createElement("span");
  span.setAttribute("class", "iconify");
  span.setAttribute("data-icon", "dashicons:arrow-left-alt2");
  previousBtn.setAttribute(
    "class",
    "slider md:hidden absolute bg-white shadow-lg rounded-full p-3 opacity-50 md:opacity-75 md:p-5 left-0 md:left-10 top-1/3"
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
  bannerImage.setAttribute("class", "rounded-lg");
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
    "slider md:hidden absolute bg-white shadow-lg rounded-full p-3 opacity-50 md:opacity-75 md:p-5 right-0 md:right-10 top-1/3"
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
      slider.classList.toggle("md:hidden");
    });
  });
  bannerContainer.addEventListener("mouseleave", () => {
    slider.forEach((slider) => {
      slider.classList.toggle("md:hidden");
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
bannerAdContainer.setAttribute("class", "flex flex-wrap md:basis-3/12");

bannerAd.forEach((ad) => {
  //for each ad in the array
  let adEl = document.createElement("div");
  adEl.setAttribute("class", "basis-1/2 p-1");
  let adImage = document.createElement("img");
  adImage.setAttribute("src", ad.image);
  adImage.setAttribute("class", "rounded-md h-full");
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
  container.setAttribute("class", "md:flex flex-wrap hidden justify-between");
  services.forEach((service) => {
    let serviceEl = document.createElement("div");
    serviceEl.setAttribute("class", "basis-1/6");
    let serviceImage = document.createElement("img");
    serviceImage.setAttribute("src", service.image);
    serviceImage.setAttribute("class", "w-52 rounded-md p-2 bg-white");
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
    title: "Today's Deals",
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
    "todays-deal flex flex-col rounded-lg bg-gray-800 md:bg-rose-900 mb-5 mt-3 text-white"
  );
  let heading = document.createElement("div");
  heading.setAttribute(
    "class",
    "flex justify-between border-b-2 md:justify-start md:space-x-10 items-center py-1.5 px-4"
  );
  heading.innerHTML = `<h2 class="md:text-3xl font-bold text-center">${todaysDeal.header.title}</h2>
    <a href="${todaysDeal.header.link}"<button class="btn btn-primary text-xs">See All Items</button></a>
    `;
  todaysDealContainer.appendChild(heading);
  main.appendChild(todaysDealContainer);

  let todaysDealItems = document.createElement("div");
  todaysDealItems.setAttribute(
    "class",
    "flex overflow-x-auto rounded-b-lg md:flex-wrap bg-white"
  );

  Object.keys(todaysDeal).forEach((item, i) => {
    if (item !== "header") {
      let todaysDealItem = document.createElement("div");
      todaysDealItem.setAttribute(
        "class",
        "md:basis-1/3 p-3 rounded-b-lg text-sm bg-white hover:shadow-2xl"
      );
      let todaysDealItemLink = document.createElement("a");
      todaysDealItemLink.setAttribute(
        "class",
        "flex flex-col md:flex-row w-32 md:w-full"
      );
      let todaysDealItemImg = document.createElement("img");
      let todaysDealItemTitle = document.createElement("h3");
      let todaysDealItemPrice = document.createElement("p");
      let titlePrice = document.createElement("div");
      titlePrice.setAttribute("class", "flex flex-col p-3");
      todaysDealItemImg.setAttribute("class", "md:w-24 md:h-24");
      todaysDealItemTitle.setAttribute("class", "text-gray-800");
      todaysDealItemPrice.setAttribute("class", "text-gray-800");
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
    "sponsored-products rounded-lg bg-white mb-5"
  );
  let heading = document.createElement("div");
  let headingTitle = document.createElement("h2");

  heading.setAttribute("class", "flex border-b-2 py-1.5 px-4");
  headingTitle.setAttribute("class", "md:text-3xl font-bold text-gray-800");

  headingTitle.innerHTML = sponsoredProducts.header.title;
  heading.appendChild(headingTitle);
  sponsoredProductsContainer.appendChild(heading);

  let sponsoredProductsItems = document.createElement("div");
  sponsoredProductsItems.setAttribute(
    "class",
    "flex space-x-5 p- rounded-b-lg overflow-x-auto bg-white"
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
      sponsoredProductsItemTitle.setAttribute("class", "");
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
    "phone-budget p-2 rounded bg-white flex basis-1 mb-5"
  );
  let phoneBudgetImg = document.createElement("img");
  phoneBudgetImg.setAttribute("class", "w-full h-full rounded");
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
    "saving-bar flex flex-wrap md:flex-nowrap rounded-lg bg-white mb-5"
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
  "shop-now mb-5 overflow-x-auto flex md:overflow-none space-x-1"
);
shopNow.forEach((item) => {
  let shopHolder = document.createElement("div");
  shopHolder.setAttribute("class", "shop-holder basis-1/2 flex");

  shopHolder.innerHTML = `
  <a class="bg-white p-1 rounded-lg md:basis-" href="${item.link}"><div class="shop-img"><img src="${item.content.img}" alt=""></div>
  <h3 class="shop-title font-bold pt-5">${item.content.title}</h3>
  <div class="shop-desc py-5 text-sm">${item.content.desc}</div>
  <div class="shop-action pb-5 text-rose-700 font-bold flex">${item.content.action}<span class="iconify self-center text-xs ml-2 mt-1" data-icon="dashicons:arrow-right-alt2"></span></div>
  </a>
  `;
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
  partnersStoreHolder.setAttribute("class", "partners-store-holder basis-1/6");
  let partnersStoreLink = document.createElement("a");
  partnersStoreLink.href = item.link;

  let partnersStoreImg = document.createElement("img");
  partnersStoreImg.src = item.img;

  partnersStoreLink.appendChild(partnersStoreImg);
  partnersStoreHolder.appendChild(partnersStoreLink);
  partnersStoreContainer.appendChild(partnersStoreHolder);
  main.appendChild(partnersStoreContainer);
});

let aboutKonga = [
  {
    title: "Konga Online Shopping in Nigeria - Best Shopping Site",
    desc: "Konga.com is Nigeria???s number one online Shopping destination. We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include Food and drinks, automotive and industrial, books, musical equipment, babies and kids items, sports and fitness, to mention a few. To make your shopping experience swift and memorable, there are also added services like gift vouchers, consumer promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping rates for certain products and with the bulk purchase option, you can enjoy low shipping rates, discounted prices and flexible payment. When you shop on our platform, you can pay with your debit card or via KongaPay, which is a convenient and secured payment solution. Get the best of lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly.",
  },
];

let aboutKongaContainer = document.createElement("div");
aboutKongaContainer.setAttribute(
  "class",
  "about-konga hidden md:flex flex-wrap bg-white rounded-lg p-5 w-full justify-center mb-5"
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
  "footer-head flex flex-col md:flex-row bg-gray-800 py-3 px-5 text-gray-400 md:justify-center text-sm space-y-4 md:space-y-0 md:space-x-2 flex-wrap md:flex-nowrap"
);
let formEl = document.createElement("div");
formEl.innerHTML = `
  
  <form class="min-w-full m:w-full"><input class="text-black outline-none rounded-l-md h-12 p-2 w-full md:w-48" type="email" placeholder="Enter your email" /> <button class="bg-rose-500 h-12 p-2 mr-5 rounded-r-md text-white absolute right-0 " type="submit">Subscribe</button></form>

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
  footerHeadTitle.setAttribute("class", "footer-head-title");
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
        name: "./images/apple.png",
        link: "#",
      },
      {
        name: "./images/google.png",
        link: "#",
      },
    ],

    subTitle: "CONTACT US WITH",
    socials: [
      {
        id: "facebook",
        icon: "iconify",
        dataIcon: "akar-icons:facebook-fill",
      },
      {
        id: "twitter",
        icon: "iconify",
        dataIcon: "entypo-social:twitter-with-circle",
      },
      {
        id: "instagram",
        icon: "iconify",
        dataIcon: "ant-design:instagram-outlined",
      },
      {
        id: "youtube",
        icon: "iconify",
        dataIcon: "uil:youtube",
      },
    ],
  },
];

let footerMainContainer = document.createElement("div");
footerMainContainer.setAttribute(
  "class",
  "footer-main md:flex w-full bg-black px-10 text-gray-400 justify-between text-sm hidden"
);
footerMain.forEach((item) => {
  let footerMainHolder = document.createElement("div");
  footerMainHolder.setAttribute(
    "class",
    "footer-main-holder flex h-full align-center"
  );
  let footerMainTitle = document.createElement("div");
  footerMainTitle.setAttribute("class", "footer-main-title");
  footerMainTitle.innerHTML = `<h2 class="py-5 font-bold">${item.title}</h2>`;
  let footerMainLinks = document.createElement("div");
  footerMainLinks.setAttribute("class", "footer-main-links pb-4 space-y-4");
  item.links.forEach((link) => {
    let footerMainLink = document.createElement("div");
    footerMainLink.setAttribute("class", "footer-main-link hover:text-white");
    footerMainLink.innerHTML = `<a href="${link.link}">${link.name}</a>`;
    if (item.id === 6) {
      footerMainLink.innerHTML = `<a href="${link.link}"><img src="${link.name}" alt=""></a>`;
    }
    footerMainLinks.appendChild(footerMainLink);
  });

  if (item.id === 6) {
    footerMainHolder.setAttribute("class", "flex flex-col");
    footerMainLinks.setAttribute("class", "flex");

    let footerSocial = document.createElement("div");
    footerSocial.setAttribute("class", "footer-social order-last");
    footerSocial.innerHTML = `<h2 class="py-5 font-bold">${item.subTitle}</h2>`;
    let footerSocials = document.createElement("div");
    footerSocials.setAttribute(
      "class",
      "footer-socials flex text-5xl space-x-4"
    );
    item.socials.forEach((social) => {
      let footerSocialHolder = document.createElement("div");
      footerSocialHolder.setAttribute(
        "class",
        "footer-social-holder flex h-full align-center"
      );
      let footerSocialIcon = document.createElement("div");
      footerSocialIcon.setAttribute("class", "footer-social-icon");
      footerSocialIcon.innerHTML = `<i class="${social.icon}" data-icon=${social.dataIcon}></i>`;
      footerSocialHolder.appendChild(footerSocialIcon);
      footerSocials.appendChild(footerSocialHolder);
    });
    footerSocial.appendChild(footerSocials);
    footerMainHolder.appendChild(footerSocial);
  }

  footerMainTitle.appendChild(footerMainLinks);
  footerMainHolder.appendChild(footerMainTitle);
  footerMainContainer.appendChild(footerMainHolder);
});
footer.appendChild(footerMainContainer);

let footerDiv = document.querySelectorAll(".footer-main-holder");

footerDiv.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    let title = item.children[0].children[0];
    title.classList.toggle("text-white");
  });
  item.addEventListener("mouseleave", () => {
    let title = item.children[0].children[0];
    title.classList.toggle("text-white");
  });
});

let today = new Date();
let year = today.getFullYear();
let footerCopyright = document.createElement("div");
footerCopyright.setAttribute(
  "class",
  "footer-copyright flex justify-center items-center"
);
footerCopyright.innerHTML = `<p class="text-white text-center bg-black">Copyright ?? ${year} Konga. All rights reserved.</p>`;
footer.appendChild(footerCopyright);
